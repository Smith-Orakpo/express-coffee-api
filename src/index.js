import "dotenv/config"
import express from "express"

import middleware from "../middleware"

const app = express()
middleware(app)

app.get("/", (request, response) =>
	response.status(200).send("coffee house api")
)

app.listen(process.env.PORT)
