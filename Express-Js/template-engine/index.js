const express = require('express');

const app = express();

// setting up or telling node js that we are using ejs
app.set('view engine','ejs');

// now we have created a view folder and we have create a folder with the name of views only
// install ejs using npm i ejs

app.get('/profile',(req,res)=>{
    const user = {
        'name':'abhinav',
        'dob':'0x/0x/2000',
        'email':'jha@5255mail.com',
        'phone':'1234567898'
    };
    res.render('profile',{user});
});

app.listen(4500);