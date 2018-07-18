var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.json([
      {id: 1, nome: 'Supernatural', qtdTemporadas: 13, img: '/supernatural.jpg'},
      {id: 2, nome: 'Sherlock', qtdTemporadas: 5, img: '/sherlock.jpg'},
      {id: 3, nome: 'Van Helsing', qtdTemporadas: 2, img: '/vanhelsing.jpg'},
      {id: 4, nome: 'Bates Motel', qtdTemporadas: 4, img: '/bastesmotel.jpg'},
      {id: 5, nome: 'The Mist', qtdTemporadas: 1, img: '/themist.jpg'},
      {id: 6, nome: 'Under the Dome', qtdTemporadas: 6, img: '/underthedome.jpg'},
      {id: 7, nome: 'Eu, a patroa e as crianças', qtdTemporadas: 9, img: '/eupatroacrianca.jpg'},
    ]);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});