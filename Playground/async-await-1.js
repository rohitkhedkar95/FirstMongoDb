require('../src/Db/mongoose')
const User=require('../src/models/Model')
const Task=require('../src/models/Task')
const Tasks = require('../src/models/Task')

const UserLits=async (Id,age)=>{

     var UserUpdt=User.findByIdAndUpdate(Id,{age})
     var CountUsr=User.countDocuments({age})
     return UserUpdt;

}

UserLits('5ef198b0ca8eca27b081541e',20).then((result)=>{
 console.log("Count is :-"+result)
}).catch((e)=>{
    console.log("Error"+e)
})


const DelTAsk=async(Id,Address)=>{
    var Dels=Tasks.findByIdAndDelete({Id})
    var Counts=Task.countDocuments({Address})
 return Counts;

}

DelTAsk('5ef3161d178e9d1d48fa9bcb','Nagpurs').then((result)=>{
    console.log("Counts:=",result);
}).catch((e)=>{
    console.log("Error",e);
})