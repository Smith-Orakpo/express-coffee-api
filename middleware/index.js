import morgan from "morgan"
import parser from "body-parser"

export default app => {
	app.set("json spaces", 2)
	app.use(morgan("dev"))
	app.use(parser.json())
	app.use(parser.urlencoded({ extended: false }))
}
