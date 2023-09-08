import express from "express";
import AuthController from "../../controllers/auth/authController";

const router = express.Router();
const authControllerUseCase = new AuthController;

router
    .post("/login", authControllerUseCase.handle)

export default router;