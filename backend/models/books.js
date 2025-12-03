const mongoose=require("mongoose")
const book=new mongoose.Schema(
{
    title:{
        type:String,
        trim:true,
        required:[true,"title is required"]
    },
    author:
    {
      type:String,
      trim:true,
      required:true
    },
    year:{
        type:Number,
        trim:true,
        required:[true,"year enter"],
        min:[100, "minmum year must be 100"],
        max:[new Date().getFullYear(),"not future year"]
    },
    price:
    {
        type:Number
    },
    image:
    {
        type:String,
        default:"default.jpg"

    },
    CreatedAt:{
        type:Date,
        defaule:Date.now
    }
}
)

module.exports=mongoose.model("BOOK",book)