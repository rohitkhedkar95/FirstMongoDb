const mongoose=require('mongoose')
const validators=require('validator')
const { default: validator } = require('validator');


var Tasks=mongoose.model('Tasks',{

   Name:{
       type:String,
       trim:true,
        required:true
   },
   Address:{

    type:String,
    

   },
   Contact:{
       type:Number,
       
   }


})

module.exports=Tasks;