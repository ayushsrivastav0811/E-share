require('dotenv').config();
module.exports=connect debugger;
const mongoose= require('mongoose');
function connectDB(){
    mongoose.connect(process.env.MONGO_CONNECTION_URL,{useNewUrlParser: true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:true});
    const connection=mongoose.connection;
    connection.once('open',()=>{
        console.log("Database connected");
    }).catch(err=>{
        connection.log('Connection fail');
    })
}