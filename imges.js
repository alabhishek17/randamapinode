const express=require("express");
const router=express.Router();

const Data=[
    {
        id:1,
          imges:"http://localhost:10000/imges/apple.png"
        // imges:"https://plus.unsplash.com/premium_photo-1669144690665-17dde1269f68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"
    },{
        id:2,
        imges:"http://localhost:10000/imges/facebook.png"
    },{
        id:3,
        imges:"http://localhost:10000/imges/google.png"
    },{
        id:4,
        imges:"http://localhost:10000/imges/microsoft.png"
    },{
        id:5,
        imges:"http://localhost:10000/imges/social.png"
    },{
        id:6,
        imges:"http://localhost:10000/imges/apple.png"
    }
]


router.get("/imges",(req,res)=>{
    res.json({
        success:true,
        message:"api feach",
        result:Data
    })
})

module.exports=router