const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const Users = require('./db/User')
const app = express();
const Songs =require('./db/Songs');
require('dotenv').config();
mongoose.connect(
    process.env.MONGODB_URL,
    
    { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((e) => {
        console.log("Couldn't connect to MongoDB", e);
    });
app.use(cors());
app.use(express.json());
app.post('/register', async (req, res) => {
    let user = new Users(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
})
app.get('/tester',async(req,res)=>{
    let result = await Users.findMany();
    res.send(ans);
});
app.get('/search/:email', async (req, res) => {
    let ans = await Users.find({ email: req.params.email })
    res.send(ans);
})
app.get('/search1/:username', async (req, res) => {
    let result = await Users.find({ username: req.params.username });
    res.send(result);
})

app.post('/login', async (req, res) => {
    if (req.body.email && req.body.password ) { 
        let user = await Users.findOne(req.body).select("-password");
        if(user)
        {
            res.send(user);
        }
        else{
            res.send({result:"No user found"});
        }
    }
    else {
        res.send({result:"Please enter both the details"});
    }
})

app.post('/songs', async(req,res)=>{
    const song=new Songs(req.body);
    let data = await song.save();
    res.send(data);
})


app.get('/songs-find/:title',async(req,res)=>{
    const ans= await Songs.find({title:{$regex:req.params.title}});
    res.send(ans);
})  
app.listen(3050);
