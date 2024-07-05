const express = require("express")

//importing router
const jokeRouter=require("./joke")
// const imgeRouter=require("./imges")
// const randomApi=require("./jokeandimg")
//server Intialization
const app = express();


//calling router

app.use(jokeRouter)
// app.use(imgeRouter)
app.use(express.static("imges"))
// app.use(randomApi)
//using /

app.get("/user",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"get api",
        result:app.use(jokeRouter),
        // data:imgeRouter
    })
})

// app.post("/user", (req,res)=>{
//     console.log("login api called");
app.listen(10000,()=>
console.log(`express server is up and running at port 10000`));