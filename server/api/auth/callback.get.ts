import jwt from "jsonwebtoken";
import { z } from "zod";
import prisma from "../../lib/prisma";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);

  const requestSchema = z.object({
    code: z.string(),
  });

  const { code } = requestSchema.parse(query);

  const response = await $fetch<GitHubAccessTokenResponse>(
    "login/oauth/access_token",
    {
      baseURL: "https://github.com/",
      method: "POST",
      query: {
        client_id: config.public.github.clientId,
        client_secret: config.github.clientSecret,
        code,
      },
      headers: {
        Accept: "application/json",
      },
    }
  );

  const { access_token } = response;

  const userResponse = await $fetch<GitHubUser>("/user", {
    baseURL: "https://api.github.com",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const { id, login, avatar_url, name } = userResponse;

  let user = await prisma.user.findUnique({
    where: {
      githubId: id,
    },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        githubId: id,
        login: login,
        avatarUrl: avatar_url,
        name,
      },
    });
  }

  const token = jwt.sign(
    {
      name: user.name,
      avatarUrl: user.avatarUrl,
    },
    config.jwtSecret,
    {
      expiresIn: "30 days",
      subject: user.id,
    }
  );

  setCookie(event, "token", token, {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
    httpOnly: true,
  });

  const redirect = getCookie(event, "redirect");

  return sendRedirect(event, redirect ? redirect : "/");
});

interface GitHubUser {
  id: string;
  login: string;
  avatar_url: string;
  name: string;
}

interface GitHubAccessTokenResponse {
  access_token: string;
}
