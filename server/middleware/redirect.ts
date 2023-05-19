export default defineEventHandler((event) => {
  const token = getCookie(event, "token");
  const config = useRuntimeConfig();

  const loginPath = `https://github.com/login/oauth/authorize?client_id=${config.public.github.clientId}`;

  if (!token && event.path.includes("memories")) {
    setCookie(event, "redirect", event.path, {
      maxAge: 20,
      httpOnly: true,
    });

    sendRedirect(event, loginPath , 302);
  }
});
