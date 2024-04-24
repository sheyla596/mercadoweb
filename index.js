const express = require ('express');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');

app.listen(port, () => {
    console.log(`El servidor está inicializado en el puerto http://localhost:${port}`);
  });

//Motor de plantilla
app.set('view engine', 'hbs');
app.engine('hbs', exphbs.engine({ extname : 'hbs'}));
app.set('views',__dirname + '/views');

app.use(express.static('assets'));
app.use('/bootstrap', express.static('/node_modules/bootstrap/dist'));

//Ruta raiz
app.get('/', (req,res)=>{
    res.render('inicio', 
    {productos: ['Banana', 'Cebollas', 'Lechuga', 'Papas', 'Pimenton', 'Tomate']})
});
