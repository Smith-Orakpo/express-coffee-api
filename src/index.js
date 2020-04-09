import "dotenv/config"
import express from "express"

const app = express()

app.get("/", (request, response) =>
	response.status(200).send("coffee house api")
)

app.listen(process.env.PORT)
