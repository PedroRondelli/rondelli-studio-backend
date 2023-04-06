import { Router } from "express";
import { tattoArtistControllers } from "../controllers/tattooArtist-controllers.js";
import { authMiddlewares } from "../middlewares/auth-middleware.js";

const tattooArtistRouters = Router();

tattooArtistRouters.post(
  "/login",
  authMiddlewares.authLoginMiddleware,
  tattoArtistControllers.signin
);

export default tattooArtistRouters;