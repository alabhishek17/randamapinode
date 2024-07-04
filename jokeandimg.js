const express=require("express");
const router=express.Router();

const data=[
    {
        id:1,
        joke:"What do you call a very religious person who sleep walks? A Roman Catholic.",
        imge:"http://localhost:10000/imges/apple.png"
    },{
        id:2,
        joke:"How is a rabbit similar to a plum? they are both purple, except for the rabbit.",
        imge:"http://localhost:10000/imges/facebook.png"
    },{
        id:3,
        joke:"Why cant college students take exams at the zoo? Too many cheetahs",
        imge:"http://localhost:10000/imges/microsoft.png"
    },{
        id:4,
        joke:"What do you call a sheep covered in chocolate? A candy baa",
        imge:"http://localhost:10000/imges/social.png"
    },{
        id:5,
        joke:"What did the topic sentence say to the evidence? Why aren't you supporting me?",
        imge:"http://localhost:10000/imges/apple.png"
    }
]


router.get("/randomapi",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"random api get",
        result:data
    })
})

module.exports=router