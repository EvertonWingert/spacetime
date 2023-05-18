export const useUser = async () => {
  const user = useState("user");
  const cookie = useCookie("token");

  if (!user.value && cookie.value) {
    try {
      const data = await $fetch(`/api/auth/me`, {
        headers: useRequestHeaders(["cookie"]) as HeadersInit,
      });

      user.value = data;
    } catch (e) {
      user.value = null;
    }
  }

  return user.value;
};
