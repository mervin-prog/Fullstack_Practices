import bodyParser from "body-parser";
import express from "express";


const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const events = [];

app.get("/",(req,res)=>{
    res.render("index.ejs",{ events: events });
});

app.post("/addEvent",(req,res)=>{
    console.log(req.body);
    const eventDate=req.body.eventDate;
    const eventName=req.body.eventName;
    const eventDescription=req.body.eventDescription;
    console.log(eventName+":"+eventDescription);
    events.push({ date: eventDate, name: eventName, description: eventDescription });
    res.redirect("/");
});

app.get("/events/:date", (req, res) => {
    const date = req.params.date;
    
    // Filter events for the given date
    const eventsForDate = events.filter(event => event.date === date);
    res.json(eventsForDate);
});


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}.`)
});