const mongoose = require('mongoose');

const SelecteduserSchema = new mongoose.Schema({
    members: 
    [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Userdetail',
    },],


})
const Selecteduserdata =mongoose.model('selecteduser',SelecteduserSchema);
module.exports = Selecteduserdata