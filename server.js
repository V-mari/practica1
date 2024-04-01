//importar express bodyparser
const express = require('express');
const bodyParser = require('body-parser');
// inicializa
const app = express();

app.use(bodyParser.json());
//ruta de ejemplo

//app.get('/', (req, res) =>{
//  res.send("Hola con node.js")
//});
 
app.get('/', (req, res) =>{
res.send("Hola con node.js")
});

//escuchar en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log('Servidor en funcionamiento en el puerto: ${PORT}') });