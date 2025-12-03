const Book=require("../models/books")
exports.getbook=async(req,res)=>
{
    try
    {
       const b=await Book.find().sort({price:-1});
       res.status(200).json({success:true,data:b});
    }
    catch(err)
    {
       res.json({success:false,message:err.message})
    }
}
exports.getsinglebook=async (req,res)=>
{
    
    try
    {
        const b=await Book.findById(req.params.id);
        if(!b){return res.status(404).json({message:"book not found",success:false})}
        res.status(200).json({success:true,data:b});
    }
    catch(err)
    {
        res.json({message:err.message,success:false})
    }
}
exports.addbook=async(req,res)=>
{
    try{
    const {title,author,year,price}=req.body;
    const image=req.file?req.file.filename:'';
    const nb=new Book({
        title,author,year,price,image
    });
    await nb.save();
    res.status(200).json({message:'added book',success:true,data:nb})
    }
    catch(err)
    {
        res.status(500).json({message:err.message,success:false})
    }
}
exports.deletebook=async(req,res)=>
{
    try
    {
        const b=await Book.findByIdAndDelete(req.params.id);
        if(!b){
            return res.status(404).json({message:"not found",success:false})
        }
    }
    catch(err)
    {
        res.status(500).json({message:err.message,success:false})
    }
}
