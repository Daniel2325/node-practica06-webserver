const http = require('http')
http.createServer((req, res) => {
    //res.write("Hola mundo, desde Node JS");
    //res.end();
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let contenido = {
        personaje: "Mario Bros",
        edad: 25,
        url: req.url
    }
    res.write(JSON.stringify(contenido))
    res.end();
}).listen(8080);
console.log("Escuchando en el puerto 8080");