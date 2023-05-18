import { H3Event } from "h3";
import jwt from "jsonwebtoken";

export const useValidateJwt = (event: H3Event): Auth => {
  const config = useRuntimeConfig();
  const token = getCookie(event, "token");

  if (!token) {
    throw new Error("No token found");
  }

  jwt.verify(token, config.jwtSecret);
  const decoded = jwt.decode(token);
  return {
    name: decoded.name,
    avatarUrl: decoded.avatarUrl,
    id: decoded.sub,
  };
};

interface Auth {
  name: string;
  avatarUrl: string;
  id: string;
}
