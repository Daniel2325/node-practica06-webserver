const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + "/views/parciales");
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('cambiarLetras', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});

app.set('view engine', 'hbs');

const PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.render('home', {
        titulo: "Home",
        nombre: "DAnIeL DoMiNgUEZ"
    });

    // //res.send("Hola mundo, desde Express");
    // let contenido = {
    //     personaje: "Mario Bros",
    //     edad: 25,
    //     url: req.url
    // }
    // res.send(contenido)
});

app.get('/about', function(req, res) {
    res.render('about', {
        titulo: "About",
        nombre: "DAnIeL DoMiNgUEZ"
    });

});
app.listen(PORT, () => {
    console.log(`Escuchando peticiones en el puerto ${PORT}`);
});