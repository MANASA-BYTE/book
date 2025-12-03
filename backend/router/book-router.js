const multer =require("multer")
const path=require("path")
const express=require("express")

const{
    getbook,
    getsinglebook,
    addbook,
    deletebook

}=require("../controllers/book-controllers");
const routes=express.Router();
const storage=multer.diskStorage({
    destination:function(req,file,cb)
    {
        cb(null,path.join(__dirname,'../uploads'))
    },
    filename:function(req,file,cb)
    {
        cb(null,Date.now()+path.extname(file.originalname))
    }
})
const upload=multer({storage:storage})


routes.get('/get',getbook)
routes.get('/get/:id',getsinglebook)
routes.post('/add',upload.single('image'),addbook)
routes.delete('/delete/:id',deletebook)

module.exports=routes;


