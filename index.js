
const express = require('express')
const app = express()
const port = 3000

//mongodb 연결
const mongoose =require('mongoose')
mongoose.connect('mongodb+srv://euionLim:<143314>@cluster0.yos9y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() =>console.log('mongoDB Connected...'))
.catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})