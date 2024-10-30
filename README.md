# Full Stack BG Removal Website

In this project, I will make a BG Removal app using React JS, Node JS, Express JS, Tailwind CSS, and MongoDB.

This app first allow users to upload an image. Then will process the image and remove the background using AI and then user can download the image with a transparent background.

In this full stack bg removal website I have created user authentication with the help of clerk. Clerk allows us to create user authentication and user management with few lines code. It provides beautiful and ready to use UI components like login form, registration form and user profile component that we can easily integrate in our website.


## Demo

By clicking this link you can see the demonstration of the full stack food ordering website.

Link 👉 https://drive.google.com/file/d/1hbRptda3RE044oCY831-ceFn1M7PKQ4I/view?usp=sharing 👈


## Installation

#### Clone the repository and install dependencies in both the client and server folders.
```bash
  git clone https://github.com/MrTharinduDasantha/Full-Stack-BG-Removal-App.git
  cd Full-Stack-BG-Removal-App
  npm install
```
#### Folder Setup
Navigate to each folder (client and server) to install dependencies separately.
- For the client folder.
```bash
cd client
npm install
```
- For the server folder.
#### Run the Project
Start the development server.
```bash
cd ../server
npm install
```
#### Environment Variables
You’ll need to configure environment variables in both the client and server folders.
- Create a .env file in the client folder with the following.
```bash
VITE_CLERK_PUBLISHABLE_KEY = "Enter your vite clerk publishable key"
VITE_BACKEND_URL = "http://localhost:3000"
```
- Create a .env file in the server folder with the following.
```bash
PORT = 3000
MONGODB_URI = "Enter your mongodb uri here"
CLERK_WEBHOOK_SECRET = "Enter your clerk webhook secret here"
CLIPDROP_API_KEY = "Enter your clipdrop api key here"
```
#### Run the Project
- Start the server.
```bash
cd server
npm start
```
- Start the client.
```bash
cd ../client
npm run dev
```
#### Important Notes
Each user who creates the account initially gets 5 credits. It costs one credit to remove the background of one image. After the credit is over, user can buy credit under three packages. But that part is not yet created in this project.


## Screenshots

![image alt](https://github.com/MrTharinduDasantha/Full-Stack-Real-Time-Chat-App/blob/dfb60fd417d424326a8e23f22569556cc62b551c/Img%20-%201.png)
