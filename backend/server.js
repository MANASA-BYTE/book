const express=require("express")
const path=require("path")
const dotenv=require("dotenv")
const connect=require("./database/db")
const books=require('./router/book-router')
dotenv.config();

const app=express();
app.use(express.json())

connect();

app.use(express.static(path.join(__dirname,'../frontend')))
app.use('/uploads',express.static(path.join(__dirname,'./uploads')))

app.use('/api/books',books);

app.get('/',(req,res)=>
{
    res.sendFile(path.join(__dirname,'../frontend',"index.html"))
})
const PORT=process.env.PORT || 3010

app.listen(PORT,()=>
console.log(`server is runnign on the port http://localhost:${PORT}`));

