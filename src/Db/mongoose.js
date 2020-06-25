const mongose=require('mongoose')
const Validator=require('validator');
const { default: validator } = require('validator');
mongose.connect('mongodb://127.0.0.1:27017/Task-Man-API',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology: true
});


// var Valids=mongose.model('tasks',{
 
//     Name:{
//         type:String,
//         trim:true,
//         required:true
//     },
//     Email:{
//         type:String,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value))
//             {
//                      throw new Error("Error");
//             }
//         }    
//     },
//     password:{
//                type:String,
//                required:true,
//                minlength:7,
//                trim:true,
//                validate(value)
//                {
//                    if(value.includes('password'))
//                    {
//                        throw new Error('you can not use password keyword in password')
//                    }
//                }
//     },
//    age:{
//           type:Number,
//           default:0,
//           validate(value){

//             if(value<0)
//             {
//                 throw new erorr("Age Musb Be in Positive Number")
//             }

//           }
//     }

// })


// var Me=new Valids({
//     Name:"Macs",
//     password:"Gostname1",
//     Email:"newmail@gmail.com",
//     age:15

// })

// Me.save().then(()=>{
//     console.log(Me);
// }).catch((error)=>{
//     console.log("Enter in Error"+error)
// })