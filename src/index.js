const Express=require('express')
require('./Db/mongoose')
const Usrs=require('./models/Model')
const Task=require('./models/Task')
const app=Express()
const Port = process.env.PORT || 3000;
app.use(Express.json())


app.post('/users',(req,res)=>{
   
    const user=new Usrs(req.body);

    user.save().then(()=>{
        res.send(user);
        console.log("Data Save")

    }).catch((error)=>{
        res.status(400);
        res.send(error)
         console.log("Error in data Saving");
    })



})


app.get('/users',(req,res)=>{

   Usrs.find({}).then((data)=>{
       res.status(200).send(data)

   }).catch((e)=>{
       console.log(e)
       res.status(400).send(e)

   })

})


app.get('/users/:id',(req,res)=>{

    var _Id=req.params.id;

Usrs.findById(_Id).then((data)=>{

    if(!data)
    {
        return res.status(500).send()
    }
         
    res.send(data);
     

}).catch((e)=>{

res.status(500).send()

})

})



app.get('/tasks',(req,res)=>{

    Task.find({}).then((data)=>{
        console.log("Enters");
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(400).send(err);
    })

})

app.get("/tasks/:id",(req,res)=>
{
   const _id=req.params.id;

    Task.findById(_id).then((data)=>{

        if(!data)
        {
            console.log("Data No Found");
            res.status(500).send();
        }

        res.send(data);

    }).catch((error)=>{
        res.status(400).send(error);
    })

})




app.post('/Tasks',(req,res)=>{
    const tasks=new Task(req.body)
    console.log(req.body);

    tasks.save().then(()=>{

        res.send(tasks);
        console.log("Save Data");
      
    }).catch((error)=>{
        res.status(400);
        res.send(error);
        console.log("Errro While Saving Data"+error)
    })

})

app.listen(Port,()=>{
    console.log("Server Started With "+Port)
})