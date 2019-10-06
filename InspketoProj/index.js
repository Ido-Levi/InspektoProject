const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const image2base64 = require('image-to-base64');

let inspketo_image = '';

image2base64("./imgs/inspk.jpg") // you can also to use url
    .then(
        (response) => {
            inspketo_image = response; //cGF0aC90by9maWxlLmpwZw==
        }
    )
    .catch(
        (error) => {
            inspketo_image =error; //Exepection error....
        }
    );


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
  });

app.get('/', (req, res) => {
    res.write('a');
});

let someCounter = 1;
setInterval(() => {
    const dataToSend = {
        demoText: 'This is a text and this is a counter - ' + someCounter++,
        imageB64: inspketo_image
    };
    io.emit('video',dataToSend);
}, 200);

server.listen(3000);




























// const data =  [
//     {
//       id: 1,
//       title: "lunch",
//       description: "Go for lunc by 2pm"
//     }
// ];
// //-------
// const image2base64 = require('image-to-base64');
// let inspketo_image = '';

// image2base64("./imgs/inspk.jpg") // you can also to use url
//     .then(
//         (response) => {
//             inspketo_image = response; //cGF0aC90by9maWxlLmpwZw==
//         }
//     )
//     .catch(
//         (error) => {
//             inspketo_image = 'error '; //Exepection error....
//         }
//     )


// //-------

// const express = require('express');
// const app = express();
// const http = require("http").createServer();
// const io = require("socket.io")(http);

// io.on("connection", (socket) => {
//     socket.emit("streamVideo", "hello and welcome");
// });

// http.listen(3100, () => {

//     console.log('server is on ' + 3100);
// });

// app.use(express.json());

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "GET, POST, PATCH, DELETE, OPTIONS"
//     );
//     next();
//   });

// app.get('/api/hi',((req, res) => {
//     let counterInn = 1;
//     const course = {
//         counter: counterInn,
//         img: inspketo_image

//     };

//     for(let i = 1; i <= 5; i++) {
//         // setTimeout(() => {
//             course.counter = counterInn++;
//             res.write(`<h1>${course.counter}</h1> <img src="data:image/png;base64,${course.img}"></img> `);
//         // }, 100);
      
//     }
//     // setTimeout(() => {
//         res.end();

//     // }, 1000);
// }))


// app.get('/', (req, res) => {
//     res.send(data);
// });

// app.listen(3000, () => console.log('listrning on port 3000'));


// app.get('/api/hi',((req, res) => {
//     let counterInn = 1;
//     const course = {
//         counter: counterInn,
//         img: inspketo_image

//     };
//     const htmlElem = {
//         header: `<h1>This is the response #: ' ${course.counter}'</h1>`,
//         picture: `<img src="data:image/png;base64,${course.img}"></img>`
//     };
//     // cours.push(course);

//     // for(let i = 1; i <= 5; i++) {
//         // setTimeout(() => {
//             course.counter = counterInn++;
//             res.write(JSON.stringify(htmlElem));
//         // }, 100);
      
//     // }
//     // setTimeout(() => {
//         res.end();

//     // }, 1000);
// }));