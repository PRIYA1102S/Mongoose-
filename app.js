const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/PriyaDB", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("CONNECTION SUCCESSFULL........."))
.catch((err) => console.log(err));

// Mongoose Schema
const mySchema = new mongoose.Schema(
    {
        name:
        {
            type: String,
            required: true
        },
        completed: Boolean
    }
)

//collection created
const Lecture =  new  mongoose.model("Lecture", mySchema); 

//create document or insert

const createDocument = async () => {
    try {
        const a = new Lecture({
            name: "HTML & CSS",
            completed: true
        })
        const b = new Lecture({
            name: "Node.js & Express.js",
            completed: true
        })
        const c = new Lecture({
            name: "Mongoose",
            completed: true
        })
        const d = new Lecture({
            name: "LPM Project",
            completed: false
        })
        const result = await Lecture.insertMany([a, b, c, d]);
        console.log(result);
    } catch (err) {
        console.log(err); 
    }
}

createDocument();


//read document
const getDocument = async () => {
    try {
        const result = await Lecture.find({ completed: false });
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

getDocument();


// update document
const updateDocument = async (_id) => {
    try {
        const result = await Lecture.updateOne({_id}, {
            $set: {
                completed: false
            }
        });

        console.log(result);

    } catch (err) {
        console.log(err);
    }
}

updateDocument("626a793cabc8b622fbbebbb4");


//delete document

const deleteDocument= async(_id) =>{
    try{
        const result = await Lecture.deleteOne({_id});
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

deleteDocument("626a793cabc8b622fbbebbb6");
