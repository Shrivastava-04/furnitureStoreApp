import express from "express"
import { getFurniture } from "../controller/furniture.controller.js"

const router = express.Router();

router.get("/",getFurniture);

export default router;