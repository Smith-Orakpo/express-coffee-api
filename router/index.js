import { Router } from "express"
import { main } from "../controller"

const router = Router()

router.get("/", main)

export default router
