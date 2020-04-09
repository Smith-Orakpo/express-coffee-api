import { Router } from "express"
import { users } from "../controller"

const router = Router()

router.post("users/login", users.login)
router.post("users/register", users.register)

export default router
