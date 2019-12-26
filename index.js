const express=require('express')
const app=express()
port= process.env.PORT||3000
app.use(express.static('public'))
app.get('/',(req,res)=>res.sendFile(__dirname+"/public/htmls/index.html"))
app.listen(port,()=>console.log(`Listening to port ${port}!`))
