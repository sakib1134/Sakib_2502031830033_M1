const express = require('express')
const app = express()

app.listen(3000,()=>{
    console.log("successfully connected port 3000")


})
/*
app.get('/',(req,res) => {
   res.send("Hello welcome to python")

})

app.get('/about',(req,res) => {
   res.send("Hello welcome to About Page")

})

app.get('/user/:userid',(req,res) => {
   res.send(req.params)

})

app.get('/serach',(req,res) => {
    res.send(req.query)

})
    */

app.get('/',(req,res) => {
   res.json({age:10,name:'sakib'})

})

app.get('/about',(req,res) => {
  res.redirect('/user');
})

app.get('/user',(req,res) => {
   res.render("index.ejs")

})