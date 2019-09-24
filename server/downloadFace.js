const express = require('express');
const download = require('image-downloader')

const options = {
  url: 'https://thispersondoesnotexist.com/image',
  dest: './public/faceswap.jpg',               // Save to /path/to/dest/image.jpg
  timeout: 5000
}

download.image(options)
  .then(({ filename, image }) => {
    console.log('Saved to', filename)  // Saved to /path/to/dest/image.jpg
  })
  .catch((err) => console.error(err))
