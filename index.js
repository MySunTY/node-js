const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://thejinx133:a9713853@cluster0.fdzqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(()=>console.log('MongoDB Connected..'))
  .catch(err => console.log(err)) 

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
