const mongoose= require('mongoose')
const adminSchema= mongoose.Schema({
    userName:String,
    password:String,
})

module.exports= mongoose.model('admin',adminSchema)