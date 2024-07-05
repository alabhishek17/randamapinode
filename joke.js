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
const data2=[
    {
        // id:1,
        //   imges:"http://localhost:10000/imges/apple.png"
        imges:"https://plus.unsplash.com/premium_photo-1669144690665-17dde1269f68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"
    },{
        // id:2,
        imges:"https://unsplash.com/photos/a-black-sports-car-parked-on-the-side-of-the-road-k_mXu9nXkdA"
    },{
        // id:3,
        imges:"https://unsplash.com/photos/a-row-of-bikes-parked-next-to-each-other-_z-ApjSPYRc"
    },{
        // id:4,
        imges:"https://unsplash.com/photos/a-tall-building-sitting-on-top-of-a-lush-green-hillside-9ljhK9vPPB0"
    },{
        // id:5,
        imges:"https://unsplash.com/photos/a-small-house-in-the-middle-of-a-forest-VBjC2fiTQ1s"
    },{
        // id:6,
        imges:"https://unsplash.com/photos/a-black-sports-car-parked-on-the-side-of-the-road-k_mXu9nXkdA"
    },{
        // id:7,
        imges:"https://unsplash.com/photos/a-white-and-black-lighthouse-surrounded-by-tall-grass-thTHFR3HFwo"
    }
]
//using query
router.get("/joke",(req,res)=>{
    console.log("login api called");
    const params=req.query    //req.query
    console.log(req.query)
    const user=data.find((u) => u.id==params.id)
    if(!params.id){
        const randomJokeIndex = Math.floor(Math.random() * data.length);

        return res.json({
            success:true,
            result:data[randomJokeIndex],
            imgr:data2[randomJokeIndex]
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