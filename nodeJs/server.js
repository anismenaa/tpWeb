
var fs = require('fs');
var http = require('http');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;





var date_actuelle = Date();
// creation of the file
var createStream = fs.createWriteStream('date.txt');
// ajouter la date du systeme au ficher
createStream.write(date_actuelle.toString(),  (e)=>{
    try{
        console.log(`date ajoutée au fichier date.txt ${date_actuelle}`)
    }catch(e){
        console.log({
            error: error
        })
    }
});
createStream.end();


//let's now create a server 
var server = http.createServer((req, res)=>{
    res.statusCode = 200; // success status
    res.setHeader('Content-type','text/plain');
    res.end(date_actuelle);

});

server.listen(port);
























/*
var util = require('util');
var events = require('events');  // we use this class to handle our events
var http = require('http');

function Serveur(port){
    var server = http.createServer((req, res)=>{
        res.statusCode = 200;
    });
    server.listen(port, ()=>{
        if(port == 3000){
            console.log("server1 is listening on port : "+ port);
        }else{
            console.log("server2 is listening on port : "+ port); 
        }
        
    });

    return server;

}

// we inhirit serveur from eventEmitter 
util.inherits(Serveur, events.EventEmitter);

// declaration of the two servers
var server1 = new Serveur(3000);
var server2 = new Serveur(3001);

// a special case
server1.on('connexion', (port)=>{
    var portEmitteur = port;

    server2.on('connexion_server1', (port)=>{
        console.log('une connexion a été effectuer sur le port' + port + 'et on recupere ca au niveau du serveur 2');
    });

    server2.emit("connexion_server1", portEmitteur);

});



// general case
server1.on('connexion', (port)=>{
    console.log(`une connexion a ete effectuer au niveau du port ${port}`);
});

server2.on('connexion', (port)=>{
    console.log(`une connexion a ete effectuer au niveau du port ${port}`);
});
// we emit the event
server1.emit('connexion',3000);
server2.emit('connexion',3001);
*/
























/*

var http = require('http');
// we will nead the fs package to manipulate the file
var fs = require('fs');

var port = process.env.PORT || 3000;

// let's create a server
var server = http.createServer((req, res)=>{
    res.statusCode = 200; // success status
    res.setHeader('Content-type','text/plain');
    // read the file now
    fs.readFile(__dirname + '/file.txt', (e, data)=>{
        console.log(data); // just show the buffer data
        try{
            res.end(data); // we read the file
        } catch{
            console.log(e.message()); // show the error message instead
        }
        
    })
});

server.listen(port, ()=>{
    console.log(`this app is running on port ${port}`);
})

*/




/*
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('bonjour le monde');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
