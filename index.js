const express = require('express')
const app = express()
const port = 3000

const {User} = require("./models/User");
const bodyParser = require("body-parser");

const config = require('./config/key');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI)
  .then(()=>console.log('MongoDB Connected..'))
  .catch(err => console.log(err)) 
  

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요 노드몬적용되었나요')
})

app.post('/register',async (req,res)=> {
    //회원가입할때 필요한 정보들을 client에서 가져오면 그것들을 데이터베이스에 넣어준다
    const user = new User(req.body)
    await user.save().then(()=>{
        res.status(200).json({
            success : true
        })
    })
    .catch((err)=>{
        res.json({
            success : false,
            err: err,
        })
    })
        
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
