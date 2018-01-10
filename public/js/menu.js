var MenuState = function()
{

	function preload()
	{
		game.load.image('splash', '/assets/images/splash.png');
		game.load.spritesheet('start', '/assets/sprites/start_200x75.png',200,75);
		game.load.audio('BGMMenu', 'assets/audios/BGM/Path to Nowhere by anvil.ogg');
	}
	var audio;
	var text;
	function create()
	{
		button = game.add.button(game.world.width * 0.5, game.world.height * 0.75, 'start', start, this, 1, 0, 2);
		button.inputEnabled = true;
		button.anchor.set(0.5);

		splashImage = game.add.sprite(game.world.centerX, game.world.centerY - 50, 'splash');
		splashImage.anchor.set(0.5);
		//splashImage.scale.set(0.5);

		style = { font: "20px impact", fill: "#4682B4", align: "center" };
		text = game.add.text(game.world.centerX, game.world.height - 50, "0", style);
		text.anchor.set(0.5);
		text.inputEnabled = true;
		text.text = _user.name;
		text.events.onInputDown.add(changeName, this);

		audio = game.add.audio('BGMMenu');
		audio.play("",0,1,true);

	}

	function update()
	{
		
	}

	function start()
	{
		audio.stop();
		game.state.start('PlayerPrefsState');
	}

	function changeName()
	{
		name = prompt("Please enter your name", "Player");
		if(name)
		{
			console.log("Hello "+name+", nice to meet you!");
			_user.name = name;
			text.text = name;
		}
	}

	return {preload: preload, create:create, update:update};
};