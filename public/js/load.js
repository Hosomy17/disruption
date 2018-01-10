var LoadState = function()
{
	function preload()
	{
		//game.load.image('loading','assets/images/loading.png');
		game.load.image('splash', '/assets/images/splash.png');
	}

	function create()
	{
		var bg = game.add.sprite(game.world.centerX,game.world.centerY - 20,'splash');
		bg.anchor.set(0.5);
		bg.scale.set(0.7);

		style = { font: "21px impact", fill: "#FFFFFF", align: "center" };
		var waiting = game.add.text(game.world.centerX, game.world.height - 80, 'Waiting for an opponent...', style);
		waiting.anchor.set(0.5);
		
		_link.requestRoom();
	}

	function update()
	{

		if(_link.isReady())
			game.state.start('GameState');
	}

	return { preload: preload, create:create, update:update}

};