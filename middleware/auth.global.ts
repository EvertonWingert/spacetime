import { defineNuxtRouteMiddleware } from "#app";
import { useUser } from "~/composables/useAuth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  await useUser();
});
