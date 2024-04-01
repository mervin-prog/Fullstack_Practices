import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let bmi=0;
let value="noweight";

app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.get('/home', (req, res) => {
    res.render("index.ejs");
});

app.get('/bmi',(req,res)=>{
    res.render("bmi.ejs");
});


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
