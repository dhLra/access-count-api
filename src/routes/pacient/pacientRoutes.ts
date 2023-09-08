import express from "express";
import PostDataController from "../../controllers/data/post/postDataController";


const router = express.Router();

const postDataControllerInstace = new PostDataController;

router
    .post("/add", postDataControllerInstace.handle)


export default router;