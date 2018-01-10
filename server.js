app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var express = require('express');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended : true })); // support encoded bodies

app.set('port', (process.env.PORT || 8080));
server  = app.listen(app.get('port'), function() {
  console.log('Server on port', app.get('port'));
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res)
{
	res.sendFile( __dirname + '/public/index.html');
});

var rooms =
{
	avaliable : []
}


io.on('connection', function(socket)
{

	console.log("Novo Jogador conectado "+socket.id);

	socket.on('request room', function(data)
	{
		var room = rooms['avaliable'].shift();

		if(!room)
		{
			room = new Date().getTime().toString();
			rooms['avaliable'].push(room);
			console.log("Nova sala criada "+room);
		}

		socket.join(room);
		console.log("Jogador "+socket.id+" conectou na sala "+room);

		data.room = room;

		socket.to(room).emit('join room',data);
	});

	socket.on('start game', function(data)
	{
		console.log("Start game "+data.room);
		socket.to(data.room).emit('start game',data);
	});

	socket.on('send move', function(data)
	{
		console.log(socket.id+" enviou para sala "+data.room);
		socket.to(data.room).emit('send move',data.data);
	});

	socket.on('disconnect', function(msg)
	{

	});

});
