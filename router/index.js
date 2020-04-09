import { Router } from "express"

const router = Router()

router.get("/", (request, response) =>
	response.status(200).send("coffee house api")
)

export default router
