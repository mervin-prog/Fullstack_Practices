import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import pg from "pg";
import bcrypt from "bcrypt";
import crypto from "crypto";
import nodemailer from "nodemailer";


dotenv.config();

const app=express();
const port=process.env.PORT;
const saltRounds=process.env.NO_OF_SALT_ROUNDS;
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

// Route to initiate password reset
app.post('/forgot-password', async (req, res) => {
  const email = req.body.email;
  const result = await db.query("SELECT * FROM details WHERE email = $1", [email]);
  if (result.rows.length > 0) {
    const user = result.rows[0];
    const token = crypto.randomBytes(20).toString('hex');
    const tokenExpiry = Date.now() + 3600000; // 1 hour from now

    await db.query("UPDATE details SET reset_token = $1, reset_token_expiry = $2 WHERE email = $3", [token, tokenExpiry, email]);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mervinrenie@gmail.com',
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: 'mervinrenie@gmail.com',
      to: email,
      subject: 'Password Reset',
      text: `Click the following link to reset your password: http://localhost:3000/reset-password/${token}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error sending email');
      } else {
        console.log(`Email sent: ${info.response}`);
        res.status(200).send('Check your email for instructions on resetting your password');
      }
    });
  } else {
    res.status(404).send('Email not found');
  }
});

// Route to handle the reset token
app.get('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const result = await db.query("SELECT * FROM details WHERE reset_token = $1 AND reset_token_expiry > $2", [token, Date.now()]);

  if (result.rows.length > 0) {
    res.send(`
      <form method="post" action="/reset-password/${token}">
        <input type="password" name="password" required placeholder="New password" />
        <input type="submit" value="Reset Password" />
      </form>
    `);
  } else {
    res.status(400).send('Invalid or expired token');
  }
});

// Route to update the password
app.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  const result = await db.query("SELECT * FROM details WHERE reset_token = $1 AND reset_token_expiry > $2", [token, Date.now()]);

  if (result.rows.length > 0) {
    const email = result.rows[0].email;
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.query("UPDATE details SET password = $1, reset_token = NULL, reset_token_expiry = NULL WHERE email = $2", [hashedPassword, email]);
    res.status(200).send('Password updated successfully');
  } else {
    res.status(400).send('Invalid or expired token');
  }
});

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});
