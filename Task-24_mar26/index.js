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

app.get('/exercise',(req,res)=>{
    res.render("exercise.ejs");
});

app.get('/yoga',(req,res)=>{
    res.render("yoga.ejs");
});
app.post('/calculateBMI', (req, res) => {
    const height = parseFloat(req.body.height);
    const weight = parseFloat(req.body.weight);
    bmi = weight / (height * height);

    res.render("mealPlans.ejs", { bmi });
});

app.get('/exercisePlans',(req,res)=>{

    
    if(bmi==0){
        //If bmi is zero
        res.redirect('/bmi');
    }
    else if(bmi<18.5)
    value="Underweight";
    else if(bmi >= 18.5 && bmi <= 24.9)
    value="Normal weight";
    else if(bmi >= 25 && bmi <= 29.9)
    value="Overweight";
    else if(bmi>=30)
    value="Obese";

    res.render("exercisePlans.ejs",{heading:value,bmi});
});

app.get('/yogaPlans',(req,res)=>{
    
    if(bmi==0){
        //If bmi is zero
        res.redirect('/bmi');
    }
    else if(bmi<18.5)
    value="Underweight";
    else if(bmi >= 18.5 && bmi <= 24.9)
    value="Normal weight";
    else if(bmi >= 25 && bmi <= 29.9)
    value="Overweight";
    else if(bmi>=30)
    value="Obese";

    res.render("yogaPlans.ejs",{heading:value,bmi});
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
