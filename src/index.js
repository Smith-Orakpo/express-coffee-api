import "dotenv/config"
import express from "express"
import router from "../router"
import middleware from "../middleware"

const app = express()
middleware(app)
app.use("/", router)

app.use((request, response) => response.status(404).send("resource not found"))
app.use((error, request, response, next) => {
	console.error(error.message)
	response.status(500).send("internal server error")
})

app.listen(process.env.PORT)
