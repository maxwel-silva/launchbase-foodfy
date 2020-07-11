'use strict'

const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('../data.js')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server,
  autoescape: false,
})

server.get('/', function (request, response) {

  const about = {
    avatar_url: 'https://raw.githubusercontent.com/maxwel-silva/indian-food-app/master/assets/splash.png',
    name: 'Indian School',
    role: 'As melhores tecnologias em programação, direto ao ponto e do jeito certo',
    description: 'No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa <a href="https://www.google.com" target="_blank">Google</a>',

    links: [
      { name: 'Github', url: 'https://github.com/maxwel-silva/' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/maxwel-silva-6b8881102/' },
      { name: 'Twitter', url: 'https://https://twitter.com.br.com/maxwel-silva/' }
    ]
  }

  return response.render('about', { about })

})

server.get('/cursos', function (request, response) {
  return response.render('cursos', { items: videos })
})

server.use(function (request, response) {
  response.status(404).render('not-found')
})

server.listen(5000)