//Server taken from lab 5
//taken sample code from https://expressjs.com/en/starter/hello-world.html
//npm install express
//node is a client side java interpreter
//node .\server.js
//must be restarted every update to the code
//http://expressjs.com/en/resources/middleware/body-parser.html
//npm install body-parser

//import express
const express = require('express')
//declare express app
const app = express()
//local host port number
//different port number from the main app so the server can be seperate
const port = 4000
//another way of importing the bodyparser to parse the app and jsopn files
const bodyParser = require("body-parser");

//Code taken form lab sheet
//adding this codes allows avoidance of a CORS error when reading json data from the Node/Express server
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//APP USERS
//parse application/x-www-form-urlencoded
//app.use called everytime not just in the method
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


//APP GETTERS
//UNEEDED CODE FROM LAB 5
//req = http request res = http response
// //when conditions are fuffiled displays to local host
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
// //http://localhost:3000/datarep will display the message
// app.get("/datarep", (req, res) => {
//     res.send("Welcome to Data Representation & Querying")
// })
// //http://localhost:3000/hello will display the message
// //anything after hello/ will be passed up from the url as name
// app.get("/hello/:name", (req, res) => {
//     //will log name to the console running the node
//     console.log(req.params.name);
//     res.send("Hello!");
// })
// app.get("/api/books", (req, res) => {
//     //declare a book array to hard code an api
//     const books = [
//         {
//             "title": "Learn Git in a Month of Lunches",
//             "isbn": "1617292419",
//             "pageCount": 0,
//             "thumbnailUrl":
//                 "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
//             "status": "MEAP",
//             "authors": ["Rick Umali"],
//             "categories": []
//         },
//         {
//             "title": "MongoDB in Action, Second Edition",
//             "isbn": "1617291609",
//             "pageCount": 0,
//             "thumbnailUrl":
//                 "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
//             "status": "MEAP",
//             "authors": [
//                 "Kyle Banker",
//                 "Peter Bakkum",
//                 "Tim Hawkins",
//                 "Shaun Verch",
//                 "Douglas Garrett"
//             ],
//             "categories": []
//         },
//         {
//             "title": "Getting MEAN with Mongo, Express, Angular, and Node",
//             "isbn": "1617292036",
//             "pageCount": 0,
//             "thumbnailUrl":
//                 "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
//             "status": "MEAP",
//             "authors": ["Simon Holmes"],
//             "categories": []
//         }
//     ];
//     //return the book array in the form of a json
//     res.json({
//         mybooks: books
//     })

// })
// app.get("/test", (req, res) => {
//     //sends the index.html file in the current directory as a response when the page is loaded
//     res.sendFile(__dirname + '/index.html');
// })
// app.get("/name", (req, res) => {
//     //Listens to /name for the requests sent by the form index.html
//     //log fname from the request to the console running node
//     console.log(req.query.fname);
//     //Sends response to the page using the fname and lname from the request
//     res.send("Hello " + req.query.fname + " " + req.query.lname);
// })
//Create a getter for the books api from the lab sheet
app.get("/api/books", (req, res) => {
    //store the book api as a variable books   
    const books = [
            {
                "title": "Learn Git in a Month of Lunches",
                "isbn": "1617292419",
                "pageCount": 0,
                "thumbnailUrl":
                    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg", "authors": ["Rick Umali"],
                "categories": []
            },
            {
                "title": "MongoDB in Action, Second Edition",
                "isbn": "1617291609",
                "pageCount": 0,
                "thumbnailUrl":
                    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
                "status": "MEAP",
                "authors": [
                    "Kyle Banker",
                    "Peter Bakkum",
                    "Tim Hawkins",
                    "Shaun Verch",
                    "Douglas Garrett"
                ],
                "categories": []
            },
            {
                "title": "Getting MEAN with Mongo, Express, Angular, and Node",
                "isbn": "1617292036",
                "pageCount": 0,
                "thumbnailUrl":
                    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
                "status": "MEAP",
                "authors": ["Simon Holmes"],
                "categories": []
            }
        ];
        
        //Have the response return the books as mybooks
        res.json({
            mybooks:books,
            message: "Hello from the server"
        })
    })

//APP POSTERS
//UNEEDED CODE FROM LAB 5
// //post method from Post form in index
// //takes the request from the body and is not shown in the url
// app.post("/name", (req, res) => {
//     console.log(req.body);
//     res.send("Hello From Post " + req.body.fname + " " + req.body.lname);
// })
//Posts body and acknowledges it in it's response 
app.post('/api/books',(req,res) => {   
    console.log(req.body);
    res.send("Data Recieved")
})

//APP LISTENER
//informs the console when the node is activated the port that is listening
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})