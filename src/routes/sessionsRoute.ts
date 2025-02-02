import express from "express";
import { loginUser } from "../controllers/sessionsController";


const router = express.Router();

router.post('/', loginUser);




export default router;