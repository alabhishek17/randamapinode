const express=require("express")
const router=express.Router();
const data=[
    {
        id:1,
        joke:"What did the topic sentence say to the evidence? Why aren't you supporting me?"
    },
    {
        id:2,
        joke:"What do you call a sheep covered in chocolate? A candy baa"
    },{
        id:3,
        joke:"Why cant college students take exams at the zoo? Too many cheetahs"
    },{
        id:4,
        joke:"How is a rabbit similar to a plum? they are both purple, except for the rabbit."
    },{
        id:5,
        joke:"What do you call a very religious person who sleep walks? A Roman Catholic."
    },{
        id:6,
        joke:"How did the firefly feel when he flew into the fan? He was de-lighted"
    },{
        id:7,
        joke:"Why cant college students take exams at the zoo? Too many cheetahs"
    }
]

//using query
router.get("/joke",(req,res)=>{
    console.log("login api called");
    const params=req.query    //req.query
    console.log(req.query)
    const user=data.find((u) => u.id==params.id)
    if(!params.id){
        return res.json({
            success:true,
            result:data,
        })
    }
    if(!user){
        res.status(404).json({
            success:false,
            message:"data not found"
        })
    }else{
     
        res.json({
            success:true,
            message:"login get api",
            result:user,
        })
    }
   
})

module.exports=router