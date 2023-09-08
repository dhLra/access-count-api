import { Request, Response } from "express";
import { PostData } from "./postDataUseCase";

class PostDataController {
    async handle(req: Request, res: Response) {
        try {
            const { access_type, destination, time } = req.body;

            const PostDataInstace = new PostData();

            const result = await PostDataInstace.execute({ access_type, destination, time });

            if (result.success === true) {
                return res.status(200).json(result);
            }
            return res.status(401).json({ message: result.message });

        } catch (error) {
            console.log(error)
            return res.status(400).json({ error: "Algo de errado aconteceu" })
        }
    }
}

export default PostDataController;