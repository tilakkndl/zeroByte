const express = require("express")
const morgan = require("morgan")
const app = express()

// const userRouter = require("./route/userRoute")
const userRouter = require("./route/userRoute")
//MIDDLEWARE
// app.use(express.json())
// app.use(morgan("dev"))

// app.use((req, res, next)=>{
//     console.log("Hello from MIDDLEWARE")
//     req.requestTime = new Date().toISOString()
//     // console.log(req.headers)
//     console.log("Helllow from middleware")
//     next()
// })

app.use("/api/v1/users/", userRouter)


module.exports = app;