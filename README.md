# The Many-Faced God

## Replace strangers with AI-generated faces

- load image (potentially from Facebook)
- see faces detected (indicated with a square)
- be able to click on a face to generate a new face
- save the new (doctored) photo (e.g. download image, post to facebook, etc.)
- No login!!

Stretch:

- do it as a React Native app!
- do it as a progressive web app

Tech Stack:

- React with hooks
- Facebook API for getting/uploading photos
- styled components
- Express

Things to think about:

- the image manipulation could be done on the front end OR the back end! We'll have to decide
- for the AI faces we could have a bunch of pre-generated faces, or we could generate the faces on the fly
- fun! we could even use the face that we're trying to replace to generate a new face HAHAHHAAHA that would be crazy

## Mockups

![](/mockups/1.png)
![](/mockups/2.png)
![](/mockups/3.png)

## Getting Started

- make sure you have imagemagick installed. On Mac you can run `brew install imagemagick`, given that you have Homebrew installed.

- make sure you have Anaconda installed: https://medium.com/ayuth/install-anaconda-on-macos-with-homebrew-c94437d63a37

- Install virtualenv to manage Python dependencies easily
  `python3 -m pip install --user --upgrade pip`
  `python3 -m pip install --user virtualenv`
- INSIDE the FaceSwap folder
  `python3 -m venv env`
  THEN `source env/bin/activate` to "activate" the virtualenv
  `pip install -r requirements.txt` to install dependencies
  `pip install opencv-python` to install opencv

- `npm i` on both `/server` and `/client` to install dependencies
- using two terminals `npm start` to run both server and client
