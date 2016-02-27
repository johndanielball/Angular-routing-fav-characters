var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//this route will default to GET
app.use('/characters', function (req, res) {
  //array
  res.send([
    {
      name: 'Michael Scott',
      home: 'Scranton',
      image: 'michael_scott.jpeg',
      age: '47',
      hobby: "Lie about paying for children's college tuition"
    },
    {
      name: 'Speedy Gonzales',
      home: 'Mexico',
      image: 'speedy_gonzales.jpeg',
      age: '80',
      hobby: 'Running fast'
    },
    {
      name: 'Abominable Snowman Yeti',
      home: 'Winter Forrest',
      image: 'freeski_yeti.jpeg',
      age: '30',
      hobby: "Eating skier's"
    }
  ])
});

// Serve back static files
app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
  console.log('Listening on port: ', app.get('port'));
});