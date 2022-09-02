/*
  install node npm
  npm init
  - > entry point: (index.js)
  npm install express
*/

//hello world
const express = require('express')
const app = express
const port = 3000
let users = []

//route definition
//app.METHOD(PATH, HANDLER)

/*This app starts a server and listens on port 3000 for connections. The app responds with “Hello World!” for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.*/
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post('/', (req, res) => {
    res.send(`It's posting time`)
})
app.put('/user', (req, res) => {
    res.send(`It's posting time`)
})
app.delete('/user', (req, res) => {
    res.send(`It's posting time`)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//run the app localy
//node app.js
