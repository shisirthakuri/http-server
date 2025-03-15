//  const express = require("express")
//  const bodyParser = require ("body-parser")
//  const app = express()
// const port = 3000

  

// appp.use(bodyParser.json());

//  app.post('/backend',(req,res)=>{
//      const message = req.body.message
//    console.log(message)
//      res.json({
//          output:"2+2 is 4"       
//     })
   
//    })






// app.listen(port,()=>{

//     console.log(` sucussfull on port ${port}`)
//  })




// const express = require("express")
// const app = express()
//  const user=[{
//     name: "jhon",
//     kindeys:[{
//         healthy:false

//     }]
//  }];

//  app.get("/", function(req,res){
//    const jhonKindey = user[0].kindeys;
//   const numberOfkidney = jhonKindey.length
//   let numberOfHealthyKidney = 0;
//   for(let i =0; i<jhonKindey.length; i++){
//    if(jhonKindey[i].healthy){
//       numberOfHealthyKidney = numberOfHealthyKidney+1;
//    }
// }
//  const numberOfUnHealthyKidney = numberOfkidney- numberOfHealthyKidney
//  res.json({
//    numberOfkidney,
//    numberOfHealthyKidney,
//    numberOfUnHealthyKidney
//  })
//  })
//  app.listen,(3000)


// const express= require("express")
// const app = express();

// app.get('/health-checkup',function(req,res){
//   //do health check here
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId= req.query.kidneyId;

//   if(username !="kamal" || password !="shahi"){
//     res.status(400).json({
//       "message":"something up with your inputs"
//     })
//     return
//   }
//     if (kidneyId !=1  && kidneyId !=2){
    
//     res.status(400).json({
//      " message":"something up with your inputs"
//     })
//     return
//   }
  
//      //do something kidney here
//     res.json({
//       message:"your kidney is fine"
//     })
  


// });
// app.listen(3000)


//why need input validation

const express = require("express")
const app = express()
const zod = require('zod')
const schema = zod.array(zod.number())

app.use(express.json())
app.post('/health-checkup',function(req,res){
  //do something kidney here
  const kidneys = req.body.kidneys;
  // const  kidneyLength = kidneys.length;

  // 
  const response = schema.safeParse(kidneys)
    res.send({
      response
    })
  
});
//Global catches


// app.use(function(err,req,res,next){
//   res.json({
//     "message":"something up with your server"
//   })
// })
app.listen(3000)


