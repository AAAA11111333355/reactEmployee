const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    tasksGiven:{
        type:String,
        default:'n/a'
    },
    phoneNumber:{
        type:String,
        default:'n/a',
        min:10,
        max:12
    },
    performance:{
        type:Number,
        required:true,
        min:1,
        max:5
    },
    salary:{
        type:String,
        default:'n/a'
    },
    ownerId:{
        type:String,
        required:true
    }
},{timestamps:true})

const Employee = mongoose.model('Employee',employeeSchema )

module.exports = { Employee }
