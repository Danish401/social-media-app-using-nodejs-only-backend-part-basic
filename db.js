const mongoose=require('mongoose');

const connectDB=async ()=>{
    try{
     await mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
      useUnifiedTopology: true,
     });
     console.log("mongodb connected success ");
    }
    catch(error){
        console.error("not connected mongoose");
     console.log(exit(1));
    }
};

module.exports=connectDB;