const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const Alluser = require('./Controller/Alluser');
const Member = require('./Controller/Member');
const Showmember = require('./Controller/Showmember');
const userdetail = require('./Controller/Userdetail');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  credentials: true,
  origin: ['https://internproject2-1.onrender.com']
}));
app.use(cookieParser());

const port = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://gabbarbhaiya:Shubham123@gabbarbhaiya.2lvenhx.mongodb.net/Intern', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => { console.log('Connected to MongoDB') })
  .catch((err) => { console.log(err) });

// User controller 
app.use('/Alluser', Alluser);
app.use('/member', Member);
app.use('/showmember', Showmember);
app.use('/userdetail',userdetail)

app.use(express.static('Frontend/public'))
    
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'Frontend','public','Index.html'))
    })
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
