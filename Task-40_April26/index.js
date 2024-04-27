import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import pg from "pg";
import bcrypt from "bcrypt";
import multer from "multer";


dotenv.config();

const app=express();
const port=process.env.PORT;
const saltRounds=10;
app.use(bodyParser.urlencoded({extended:true}));

// Set up Multer for handling file uploads
//const upload = multer({ dest: 'uploads/' }); // Specify the destination directory for uploaded files
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




app.post("/register",async(req,res)=>{
    const fname=req.body.fname;
    const lname=req.body.lname;
    const role=req.body.role;
    const email=req.body.email;
    const password=req.body.password;
    const imgPath=req.body.imgPath;

    try {
        const checkResult = await db.query("SELECT * FROM results WHERE email = $1", [
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
                "INSERT INTO results (first_name, last_name, role_name, email, imgpath, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
                [fname, lname, role, email, imgPath, hash]
              );
              const user = result.rows[0];
              console.log(user);
            
            }
          });
        }
      } catch (err) {
        console.log(err);
    }
});

app.post("/login",async (req, res) => {
    const role=req.body.role;
    const email = req.body.email;
    const loginPassword = req.body.password;
    
    
    try {
        const result = await db.query("SELECT * FROM results WHERE email = $1", [
        email,
        ]);
        if (result.rows.length > 0) {
        const user = result.rows[0];
        const storedHashedPassword = user.password;
        const imgPath=user.imgPath;
        const storedRole=user.role_name.toLowerCase();
       
        //verifying the password
        bcrypt.compare(loginPassword, storedHashedPassword, (err, result) => {
            if (err) {
            console.error("Error comparing passwords:", err);
            } else {
                const resultantRole=role.toLowerCase();
            if (result && resultantRole === storedRole) {
                res.render("home.ejs", {user,imgPath});
            } else {
                res.send("Incorrect Password");
            }
            }
        });
        console.log(user);
        } else {
        res.send("User not found");
        }
    } catch (err) {
        console.log(err);
    }
});

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});
