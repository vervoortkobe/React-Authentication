import { forgotPasswordRoute } from "./forgotPasswordRoute";
import { getGoogleOauthUrlRoute } from "./getGoogleOauthUrlRoute";
import { googleOauthCallbackRoute } from "./googleOauthCallbackRoute";
import { loginRoute } from "./loginRoute";
import { resetPasswordRoute } from "./resetPasswordRoute";
import { signUpRoute } from "./signUpRoute";
import { testRoute } from "./testRoute";
import { updateUserInfoRoute } from "./updateUserInfoRoute";
import { verifyEmailRoute } from "./verifyEmailRoute";

export const routes = [
  forgotPasswordRoute,
  getGoogleOauthUrlRoute,
  googleOauthCallbackRoute,
  loginRoute,
  resetPasswordRoute,
  signUpRoute,
  testRoute,
  updateUserInfoRoute,
  verifyEmailRoute,
];
