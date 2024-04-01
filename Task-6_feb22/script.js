import express from "express";
import axios from "axios";

const app=express();
const port=3000;
//Random quote generator --> https://api.quotable.io/random.
app.use(express.static("public"));

app.get("/", async(req,res)=>{

    try{
        const result=await axios.get("https://v2.jokeapi.dev/joke/Any"); 
        res.render("index.ejs",{
           person1: JSON.stringify(result.data.setup),
           person2 : JSON.stringify(result.data.delivery),
        });
    }
    catch(error){
        console.log(error.result.data);
        res.status(500);
    }
});


app.listen(port,()=>{
    console.log(`Server is listening on port : ${port}`);
});