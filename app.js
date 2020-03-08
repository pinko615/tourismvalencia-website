var http = require('http');
var url = 'http://api.openweathermap.org/data/2.5/weather?id=6362115&appid=2c14aef3c58e0e37ff3461095a3611a0&units=metric';

var server = http.createServer(function(request,response){
    var request = require('request');
    request(url, function(err,res, body){
        var data = JSON.parse(body);
        response.write("<html><body><div id='container'>");
        response.write("<h1>" + data.main['temp']+ 'C | Humedad ' + data.main['humidity']+'%' + '<br>' + "</h1>");
        response.write("</div></body></html>");
        response.end();

    }); 
}).listen(8081);

// fetch('http://api.openweathermap.org/data/2.5/weather?id=6362115&appid=2c14aef3c58e0e37ff3461095a3611a0&units=metric')
//   .then(function(response) {
//     return response.json();
//     response.write("<h1>" + data.main['temp']+ 'C | Humedad ' + data.main['humidity']+'%' + '<br>' + "</h1>");
//   })
//   .then(function(myJson) {
//     console.log(myJson);
//   });

// for(let i = 0; i < )

        
// console.log("HOLA ESTOY AQUI",data.main['temp']);
// response.write("<html><body><div id='container'>");
// response.write("<h1>" + data.main['temp']+ 'C | Humedad ' + data.main['humidity']+'%' + '<br>' + "</h1>");
// response.write("</div></body></html>");
// response.end();  

// 6362115 Valencia
// 6355394 Altea
// 2521088 Benidorm
// 6355423 Calp
// 2509564 Castellon
// 6355390 Alicante
// 2518878 Denia

// grid_pretitle blue

// let s=data.main['temp'];
// console.log(s);
// let num = [];
// let a;
// for (let i = 0; i < s.length; i++) {
//   if(s[i]===',')
//   {
//       for (let j = 0;  j < i+2; j++) {
//          num[j]=s[j] ;
//       }
//   }  
// }
