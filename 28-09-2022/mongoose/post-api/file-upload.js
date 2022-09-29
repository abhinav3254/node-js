const express = require('express');
const multer = require('multer');

const app = express();

// This function is a middle-ware

const upload = multer(
    {
        storage: multer.diskStorage(
            {
                //  cb --> callback
                destination: function (req, file, cb) {
                    cb(null, "uploads")
                },
                filename: function (req, file, cb) {
                    cb(null, file.fieldname + "-" + Date.now() + ".jpg")
                }
            }
        )
    }
).single("user_file");

app.post('/upload', upload, (req, res) => {
    res.send('file-uploaded');
});

app.listen(4500);

// time-stamp:- 07:34:08