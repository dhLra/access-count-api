import { Request, Response } from "express";
import { AuthUseCase } from "./authUseCase";

class AuthController {
    async handle(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            const AuthUseCaseInstace = new AuthUseCase();

            const result = await AuthUseCaseInstace.execute({ email, password });

            if (result.success === true) {
                return res.status(200).json(result);
            }
            return res.status(401).json({message: "Usuario ou senha errados"});

        } catch (error) {
            console.log(error)
            return res.status(400).json({ error: "Algo de errado aconteceu" })
        }
    }
}

export default AuthController;