const express = require("express");
const path = require("path");
require("./db/conn");
const User = require("./models/user_response");

const hbs = require("hbs");
const { registerPartials } = require("hbs")

const app = express();
const port = process.env.PORT || 3000;

// setting the path
const staticpath = path.join(__dirname, "../public");
const templatespath = path.join(__dirname, "../templates/views");
const partialspath = path.join(__dirname, "../templates/partials");

// middleware
app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use("/jq", express.static(path.join(__dirname, "../node_modules/jqurey/dist")));

app.use(express.urlencoded({extended:false}))
app.use (express.static(staticpath))
app.set("view engine", "hbs");
app.set("views", templatespath);
hbs.registerPartials(partialspath);

//routing
//app.get(path, callback)
app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/Blog_home",(req,res)=>{
    res.render("Blog_home");
})

app.get("/Blog1",(req,res)=>{
    res.render("Blog1");
})

app.get("/Blog2",(req,res)=>{
    res.render("Blog2");
})

app.get("/contact",(req,res)=>{
    res.render("contact");
})

app.get("/Portfolio",(req,res)=>{
    res.render("Portfolio");
})

app.get("/Projects",(req,res)=>{
    res.render("Projects");
})

app.post("/contact", async(req, res) => {
    try {
        // res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.send(201).render("/contact");
    } catch (error) {
        res.status(500).send(error);
    }
})  



// server create
app.listen(port, ()=>{
    console.log(`Server is Running at port ${port}`);
})