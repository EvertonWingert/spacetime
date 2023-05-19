import { useValidateJwt } from "../../utils/useValidateJwt";

export default defineEventHandler(async (event) => {
  useValidateJwt(event);

  deleteCookie(event, "token");

  return sendRedirect(event, "/");
});
