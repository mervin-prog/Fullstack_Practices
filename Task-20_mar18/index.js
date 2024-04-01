import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";

const app = express();
const port=3000;
const saltRounds=10;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "user",
    password: "mervin",
    port: 5432,
  });
db.connect();

  app.get("/", (req, res) => {
      res.render("register.ejs");
    });
  
  app.get("/login", (req, res) => {
    res.render("login.ejs");
  });

  app.get("/logout",(req,res)=>{
    res.render("register.ejs");
  });


  app.post("/register", async (req, res) => {
    const fname=req.body.fname;
    const lname=req.body.lname;
    const email = req.body.email;
    const password = req.body.password;
  
    try {
      const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
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
              "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
              [fname, lname, email, hash]
            );
            const user = result.rows[0];
            console.log(user);
            
            res.render("dashboard.ejs", {user});     
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  });


  app.post("/login", async (req, res) => {
    const email = req.body.email;
    const loginPassword = req.body.password;
  
    try {
      const result = await db.query("SELECT * FROM users WHERE email = $1", [
        email,
      ]);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const storedHashedPassword = user.password;
        //verifying the password
        bcrypt.compare(loginPassword, storedHashedPassword, (err, result) => {
          if (err) {
            console.error("Error comparing passwords:", err);
          } else {
            if (result) {
              res.render("dashboard.ejs", {user});
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


// // GET route for rendering the edit form
// app.get("/edit:/user_Id", async (req, res) => {
//     const userId = req.params.user_Id;
  
//     try {
//       const result = await db.query("SELECT * FROM users WHERE id = $1", [
//         userId,
//       ]);
  
//       if (result.rows.length > 0) {
//         const user = result.rows[0];
//         res.render("edit.ejs", { user });
//       } else {
//         res.send("User not found");
//       }
//     } catch (err) {
//       console.log(err);
//       res.status(500).send("Internal Server Error");
//     }
// });

// // POST route for updating user information
// app.post("/edit/:user_Id", async (req, res) => {
//     const userId = req.params.user_Id;
//     const fname = req.body.fname;
//     const lname = req.body.lname;
  
//     try {
//       const result = await db.query("UPDATE users SET first_name = $1, last_name = $2 WHERE id = $3", [
//         fname, lname, userId
//       ]);
  
//       res.render("dashboard.ejs"); // Redirect to dashboard or any other page after updating
//     } catch (err) {
//       console.log(err);
//       res.status(500).send("Internal Server Error");
//     }
// });



app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})