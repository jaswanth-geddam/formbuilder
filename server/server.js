const express= require("express")
const mongoose=require("mongoose")
var cors = require('cors')


const app=express()
app.use(
    cors({
        origin:"*"
    })
)
app.use(express.json())

//conneting data base
const connect=()=>{
    return mongoose.connect("mongodb+srv://flipkartproject:flipkart@cluster0.fo2l4.mongodb.net/Form?retryWrites=true&w=majority")
}

app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');
//app.use(express.static('public'))


//crud cronrolls







const products= new mongoose.Schema({
    email:{type:String,required:false},
    password:{type:String,required:false},
    number:{type:String,required:false},
    text:{type:String,required:false},
    radio:{type:String,required:false},
    date:{type:String,required:false},
   


})
const Details=mongoose.model("Details",products)





app.post("/post",async(req,res)=>{
    const data= await Details.create(req.body)
    res.send(data)

})
app.get("/post",async(req,res)=>{
    const data= await Details.findOne({})
    res.send(data)

})
const port =process.env.PORT||2233




app.listen(port,async()=>{
    //http://localhost:2233/home
    await connect()
    console.log("jaswant"+port)
})