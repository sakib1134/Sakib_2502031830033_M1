const express = require("express");
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))

app.get('/', (req,res)=>{
    res.send("Home Page")
})

app.get('/about', (req,res)=>{
    var users = [
        {name:'sakib',age:'21',city:'ahmedabad'},
        {name:'aakib',age:'23',city:'memdabad'},
        {name:'atik',age:'25',city:'ahmedabad'}

    ];
    res.render("about",{
        title:"About Page",
        message:"Welcome to EJS",
        items: users
    
    })
})

app.get('/form',(req,res)=>{
    res.render('form',{message:null})

})

app.post('/submit',(req,res)=>{
    const name = req.body.myname
   

    const message = 'hello, ${name} your form submitted.'
    res.send(name)
    res.render('form',{message:message})


})

app.listen(3000,()=>{
    console.log("server start on port 3000")

})