const mongoose = require('mongoose');

// const mongoURI = "mongodb+srv://MFood:Madhusudan123@cluster0.ej1qirp.mongodb.net/LovedAtabAse?retryWrites=true&w=majority"

const mongoURI = "mongodb+srv://MFood:Madhusudan123@cluster0.ej1qirp.mongodb.net/LovedAtabAse?retryWrites=true&w=majority"

// const mongoDb = ()=>{
//     mongoose.connect(mongoURI,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
//         console.log("Connected to MongoDB");
//         const fetched_data = mongoose.connection.db.collection("LoveCollection");
        
        
//         fetched_data.find({}).toArray(function(err,data){
//             if(err) console.error(err);
//             else{console.log(data)};
            
//         })      

//     })
//     .catch((err)=>{
//         console.error("Error connecting to MongoDB:",err);
//     });  

// }

const mongoDb=()=>{
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
        .then(() => {
          console.log('Connected to MongoDB');
          const data = mongoose.connection.db.collection("LoveCollection");
          data.find({}).toArray()
            .then((data) => {
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.error('Error connecting to MongoDB:', err);
        })    
      
      
      
      
}

module.exports = mongoDb();


