import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

let events = [
    {
        id: 1,
        date: "2024-04-16",
        name: "Event 1",
        description: "Description of Event 1"
    },
    {
        id: 2,
        date: "2024-04-17",
        name: "Event 2",
        description: "Description of Event 2"
    },
    {
        id: 3,
        date: "2024-04-18",
        name: "Event 3",
        description: "Description of Event 3"
    }
];

let lastId = 3;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/events", (req, res) => {
    console.log(events);
    res.json(events);
});

// Start the server
app.listen(port, () => {
    console.log(`API is running on ${port}`);
});