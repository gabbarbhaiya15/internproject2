const mongoose = require('mongoose');

const userdetailSchema = new mongoose.Schema({
    avatar : {type: 'String',required: true},
    Bio : {type: 'String',required: true},
    jobTitle : {type: 'String',required: true},
    profile :{
        username : {type: 'String',required: true},
        firstname : {type: 'String',required: true},
        lastname : {type: 'String',required: true},
        email : {type: 'String',required: true},
    },
    id: {type: 'Number',required: true}




},{ timestamps: true})
const Userdetail = mongoose.model('Userdetail', userdetailSchema);
module.exports = Userdetail;