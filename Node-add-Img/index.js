const { Timestamp } = require('bson');
const express = require('express');
const port = 4500;
const app = express();

// multer work is going to happen from here

const multer = require('multer');

const upload = multer(
    {
        storage: multer.diskStorage(
            {
                destination: function (req, file, cb) {
                    cb(null, './uploads');
                },
                filename: function (req, file, cb) {
                    cb(null, file.filedname + '.jpg');
                }
            }
        )
    }
)

app.post('/upload', upload.single('file'), (req, res) => {
    res.send('file uploaded');
});

app.listen(port);