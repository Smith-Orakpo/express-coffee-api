import { Router } from "express"
import { users, coffee } from "../controller"

const router = Router()

router.route("/coffee").get(coffee.main).post(coffee.create)
router
	.route("/coffee/:id")
	.get(coffee.detail)
	.put(coffee.update)
	.delete(coffee.remove)
router.post("users/login", users.login)
router.post("users/register", users.register)

export default router
