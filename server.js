import userRouter from './routers/userRouter.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import {} from 'dotenv/config'
import express from 'express'
import chalk from 'chalk'
import cors from 'cors'

const app = express()
const port = process.env.PORT
const mongodb_url = process.env.MONGODB_URL
const connect = chalk.green.bold

app.use(cors())
app.use(bodyParser.urlencoded({limit:"30mb", extended:"true"}))
app.use(express.json({limit:"30mb", extended:true}))

app.use("/users", userRouter)

mongoose.connection.on("connected", () => {
    console.log(connect("Mongoose connected"))
});
mongoose.connection.on("error", (e) => {
    console.log(e)
});
mongoose.connect(mongodb_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => app.listen(port, console.log(`http://localhost:${port}`)))
