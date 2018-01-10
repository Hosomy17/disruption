var _link = (function()
{
	var socket  = io();
	var ready = false;
	var boolPackage = false;
	var package;
	var room;

	socket.on('join room', function(data)
	{

		room = data.room;
		if(data.player != socket.id)
		{
			data.player = socket.id;
			_user.turn = 1;
			data.class = _user.hero;
			//<!--me
				data.enemyName = _user.name;
			//-->
			data.turn = 1;
			socket.emit('start game',data);
		}

	});

	socket.on('start game', function(data)
	{
		_user.enemy = data.class;
		//<!--me
			_user.enemyName = data.enemyName;
		//-->
		room = data.room;
		if(data.turn == 1)
			{
				_user.turn = 2;
				data.class = _user.hero;
				//<!--me
					data.enemyName = _user.name;
					//data.enemyName = data.enemyName;
				//-->	
				data.turn = 2;
				socket.emit('start game',data);
			}
		ready = true;
	});

	socket.on('send move', function(data)
	{
		boolPackage = true;
		package = data;
	});

	function isReady()
	{
		return ready;
	}

	function setPackage(bool)
	{
		boolPackage = bool;
	}

	function isPackage()
	{
		return boolPackage;
	}

	function getPackage()
	{
		boolPackage = false;
		return package;
	}

	function sendMove(data)
	{
		msg = {data:data, room:room};
		socket.emit('send move',msg);
	}

	function requestRoom()
	{
		var data = 	{
						player : socket.id
				 	};

		data.player = 'teste';
		socket.emit('request room',data);
	}

	return	{
				sendMove    : sendMove,
				requestRoom	: requestRoom,
				isReady		: isReady,
				isPackage	: isPackage,
				getPackage	: getPackage,
				setPackage	: setPackage
			};

})();