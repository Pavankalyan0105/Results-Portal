require('dotenv').config()



const mongoose  = require("mongoose")
const express   = require("express")
const app       = express()

// Middlewares
const bodyParser    = require('body-parser')
const cookieParser  = require('cookie-parser')
const cors          = require('cors')

//auth routes
const authRoutes = require("./routes/auth")


//results routes
const resultRoutes = require("./routes/results")

//User routes
const userRoutes = require("./routes/user")


//DB connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology:true ,
    useCreateIndex:true
}).then(() => {
    console.log("DB connected")
})


//MIDDLEWARES
app.use(bodyParser.json())
app.use(express.json());

app.use(cookieParser())
app.use(cors())


// //My Routes
app.use("/api" , authRoutes)
app.use("/api" , resultRoutes)
app.use("/api" , userRoutes)


//PORT
const port = process.env.PORT || 8000;


//starting the server
app.listen(port , () => {
    console.log(`App is running at ${port}`);
})


