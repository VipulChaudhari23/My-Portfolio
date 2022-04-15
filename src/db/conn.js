const mongoose = require("mongoose");

//creating the DB
mongoose.connect("mongodb://localhost:27017/Dynamic", {
    // useCreateIndex:true,
    // useNewUrlParser:true,
    // useUnifiedTopology:true
}).then(() => {
    console.log("Connection Successfull");
}).catch((error) => {
    console.log(error);
})
