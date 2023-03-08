require('dotenv').config()
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//midleware para servir contenido estatico
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Christian Franco',
    titulo: 'Curso de Node'
  })
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Christian Franco',
    titulo: 'Curso de Node'
  })
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Christian Franco',
    titulo: 'Curso de Node'
  })
})


app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)

  })
