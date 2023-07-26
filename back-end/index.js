const express = require('express');
require('./db/Config');
const cors = require('cors');
const User = require('./db/User')
const app = express();
const Song=require('./db/Songs')
app.use(cors());
app.use(express.json());
app.post('/register', async (req, res) => {
    // console.log(req.body);
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
})


app.get('/search/:email', async (req, res) => {
    console.log(req.params.email);
    let ans = await User.find({ email: req.params.email })
    console.log(ans);
    res.send(ans);
})
app.get('/search1/:username', async (req, res) => {
    let result = await User.find({ username: req.params.username });
    console.log(result);
    res.send(result);
})

app.post('/login', async (req, res) => {
    if (req.body.email && req.body.password ) { 
        // console.log(req.body.email);
        let user = await User.findOne(req.body).select("-password");
        // console.log(ans);
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
    const song=new Song(req.body);
    let data = await song.save();
    res.send(data);
})


app.get('/songs-find/:title',async(req,res)=>{
    const ans= await Song.find({title:{$regex:req.params.title}});
    res.send(ans);
})  
app.get('/songs1/get')
app.listen(3050);