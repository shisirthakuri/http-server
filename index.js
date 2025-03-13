const express = require("express")
const bodyParser = require ("body-parser")
const app = express()
const port = 3000

  

app.use(bodyParser.json());

app.post('/backend',(req,res)=>{
    const message = req.body.message
    console.log(message)
    res.json({
        output:"2+2 is 4"
    })
})

app.listen(port,()=>{
    console.log(` sucussfull on port ${port}`)
})