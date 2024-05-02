import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import pg from "pg";
import bcrypt from "bcrypt";
import pinataSDK from "@pinata/sdk";


dotenv.config();

const app=express();
const port=process.env.PORT;
const pinata=new pinataSDK(process.env.PINATA_APIKEY, process.env.PINATA_APISECRET);
const saltRounds=10;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const db=new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

db.connect();

app.get("/",(req,res)=>{
    res.render("register.ejs");
});

app.get("/login",(req,res)=>{
    res.render("login.ejs");
});

app.get("/logout",(req,res)=>{
    res.render("register.ejs");
});


app.post("/register", async(req,res)=>{
    const fname=req.body.fname;
    const lname=req.body.lname;
    const role=req.body.role;
    const email=req.body.email;
    const password=req.body.password;

    try {
        const checkResult = await db.query("SELECT * FROM details WHERE email = $1", [
          email,
        ]);
    
        if (checkResult.rows.length > 0) {
          res.redirect('/login');
        } else {
          //hashing the password and saving it in the database
          bcrypt.hash(password, saltRounds, async (err, hash) => {
            if (err) {
              console.error("Error hashing password:", err);
            } else {
              console.log("Hashed Password:", hash);
              const result=await db.query(
                "INSERT INTO details (first_name, last_name, role_name, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *",
                [fname, lname, role, email, hash]
              );
              const user = result.rows[0];
              console.log(user);
              
              res.render("home.ejs", {user});     
            }
          });
        }
      } catch (err) {
        console.log(err);
    }
});

app.post("/login", async (req, res) => {
    const role=req.body.role;
    const email = req.body.email;
    const loginPassword = req.body.password;
    
    try {
        const result = await db.query("SELECT * FROM details WHERE email = $1", [
        email,
        ]);
        if (result.rows.length > 0) {
        const user = result.rows[0];
        const storedHashedPassword = user.password;
        const storedRole=user.role_name.toLowerCase();
        //verifying the password
        bcrypt.compare(loginPassword, storedHashedPassword, (err, result) => {
            if (err) {
            console.error("Error comparing passwords:", err);
            } else {
                const resultantRole=role.toLowerCase();
            if (result && resultantRole === storedRole) {
                res.render("home.ejs", {user});
            } else {
                res.send("Incorrect Password");
            }
            }
        });
        } else {
        res.send("User not found");
        }
    } catch (err) {
        console.log(err);
    }
});

const options = {
  pinataMetadata: {
    name: "Details",
    keyvalues: {
      key_1: "value_1",
      key_2: "value_2",
    },
  },
  pinataOptions: {
    cidVersion: 1.0,
  },
};

app.post("/upload-pinata",async (req,res)=>{
  try{
    const pinataObj={
      Department : req.body.dept,
      Age : req.body.age,
      Experience : req.body.exp,
    };
  
    const pinataResponse= await pinata.pinJSONToIPFS(pinataObj,options);
    console.log(pinataResponse);
  }
  catch(err){
    console.log(err);
  }
});

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});
