const mongoose = require('mongoose');



const mongoURI = "mongodb+srv://MFood:Madhusudan123@cluster0.ej1qirp.mongodb.net/LovedAtabAse?retryWrites=true&w=majority"



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
              global.food_items = data;              
            })
            .catch((err) => {
              console.log(err);
            });
          const foodCategory = mongoose.connection.db.collection("LoveNCollection");
          foodCategory.find({}).toArray()
          .then((foodCategory)=>{
            global.food_Category= foodCategory;
            
          }) 
          .catch((err)=>{
            console.log(err);
          }); 
        })
        .catch((err) => {
          console.error('Error connecting to MongoDB:', err);
        })    
      
      
      
      
}

module.exports = mongoDb();


