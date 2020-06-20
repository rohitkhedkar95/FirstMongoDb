//Crude Operation

// const Mongodb=require("mongodb")
// const MongoClient=Mongodb.MongoClient;
// const MongodbId=Mongodb.ObjectID;


const {MongoClient,MongodbId, ObjectID}=require("mongodb")

const ConnectionUrl='mongodb://127.0.0.1:27017'
const DtatabseName='task-man'
const Id=new ObjectID();


MongoClient.connect(ConnectionUrl,{useNewUrlParser:true},(error,client)=>{
if(error)
{
    return console.log("Unable to connect to mongodb")
}

console.log("Connected to mongodb")

const Db=client.db(DtatabseName);
// Db.collection('users').insertMany([{
//     Name:'Mona',
//     Age:25
// },{
//     Name:"Kona",
//     Age:28,
//     City:"Us"
// }],(error,result)=>{
//     if(error)
//     {
//         return console.log("Unable to insert Data in MongoDb")
//     }
//     console.log(result.ops)
// })



Db.collection('users').findOne({Name:"Kona"},(eror,user)=>{


if(error)
{
    return console.log("Error in Mongo DB");
    console.log("Eror in Db Connection")
}

console.log(user)

})

})