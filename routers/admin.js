const router= require('express').Router()
const Admin= require('../module/adminSchema.js')

//this code this express-session create
function handlelogin(req,res,next){
    if(req.session.isAuth){
        next()
    }else{
        res.redirect('/login')
    }
}

router.get('/',(req,res)=>{
    res.send("hello word")
})
router.get('/dashbord',handlelogin,(req,res)=>{
    res.render('dashbord.ejs')
})
router.get('/reg',(req,res)=>{
    res.render('register.ejs')
})

router.post('/regdata',async(req,res)=>{
    //console.log(req.body)
    const user= req.body.username;
    const pass= req.body.password;
    const userdata = await Admin.findOne({userName:user})
    if(userdata){
        
        res.redirect('/reg')
        // alert("user already exist")
        return res.status(400)
    }
const adminData= new Admin({userName:user,password:pass})
adminData.save()
console.log(adminData)
res.redirect('/login')

})
router.get('/login',(req,res)=>{
    res.render('login.ejs')
})
router.post('/logindata', async(req,res)=>{
 
   const {username,password} = req.body;

  const Checkdata = await Admin.findOne({userName:username})
if(Checkdata !==null){
    if(Checkdata.password==password){
        req.session.isAuth=true;
    res.send("login Success full")}
    else{
        res.redirect('/login')
    }
}else{
    res.redirect("/login")
}
// console.log(Checkdata)l,

})

module.exports =router;