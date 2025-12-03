const mongoose=require('mongoose')

const connect=async()=>
{
  try
  {
       await mongoose.connect("mongodb://127.0.0.1:27017/books2")
       console.log("connect succesfully");
  }
  catch(err)
  { 
    console.log("error while connecting",err);
    process.exit(1);
  }
}
module.exports=connect;