const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const download = require('image-downloader')
var shell = require('shelljs');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
// app.use(cookieParser());
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));


app.post('/upload', (req, res, next) => {
  // convert image.jpg - crop 100 x100 + 150 + 150 crop.jpg to crop
  let imageFile = req.files.file;
  const filename = 'image.jpg'
  imageFile.mv(`${__dirname}/public/${filename}`, function (err) {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({
      file: `public/${filename}`
    });
  });
})

app.post('/faceswap', (req, res, next) => {
  const { divPositioning } = req.body;
  const { top, left, height, width } = divPositioning;
  shell.exec(`convert public/image.jpg -crop ${width+40}x${height+40}+${left-20}+${top-20} public/crop.jpg`)

  const options = {
    url: 'https://thispersondoesnotexist.com/image',
    dest: './public/faceswap.jpg',               // Save to /path/to/dest/image.jpg
    timeout: 5000
  }

  download.image(options)
    .then(({ filename, image }) => {
      console.log('Saved to', filename)  // Saved to /path/to/dest/image.jpg
    })
    .then(()=>{
     
      // shell.exec('cd FaceSwap && source env/bin/activate && python main.py --src ../public/test1.jpg --dst ../public/test2.jpg --out results/result.jpg --correct_color')
      shell.exec('cd FaceSwap && source env/bin/activate && python main.py --src ../public/faceswap.jpg --dst ../public/crop.jpg --out results/result.jpg --correct_color')
    })
    .catch((err) => console.error(err))

})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('Error 500');
});

app.listen(3001, () => {
  console.log('3001');
});

module.exports = app;
