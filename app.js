const express= require('express')
const app= express()
app.use(express.urlencoded({extended:false}))
const adminRouter= require('./routers/admin.js')
const mongoose= require('mongoose')
const session= require('express-session')
mongoose.connect('mongodb://127.0.0.1:27017/adminlogin',()=>{
    console.log("database is connting")
})
app.use(session({
    secret: 'ravi',
    saveUninitialized: false,
    resave: false,
    
}));








app.use(adminRouter)
app.set('view engine','ejs')
app.listen(5000,()=>{
    console.log("serveer is running is port 5000")
})