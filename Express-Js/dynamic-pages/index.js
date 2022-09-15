const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/profile',(req,res)=>{
    const user = {
        'name':'abhinav jha',
        'place':'bihar',
        'passion':'coding',
        'learning':'node-js',
        'skills':['java','python','git','node-js','android-dev','linux']
    };
    res.render('profile',{user});
});

app.listen(4500);