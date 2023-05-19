import { defineNuxtRouteMiddleware } from "#app";
import { useUser } from "~/composables/useAuth";


export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = await useUser();
  const config = useRuntimeConfig();
  const loginPath = `https://github.com/login/oauth/authorize?client_id=${config.public.github.clientId}`;


  if (to.path.includes("memories") && !user) {
    await navigateTo(loginPath, {
      external: true,
      replace: true
    });
    return abortNavigation()
  }
});

        

