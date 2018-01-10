var PlayerPrefsState = function()
{
	function preload()
	{
		//game.load.image('loading','assets/images/loading.png');
		game.load.image('avatarSteve', 'assets/images/avatar_steve.png');
		game.load.image('avatarDcat', 'assets/images/avatar_dcat.png');
		game.load.spritesheet('spriteSteve', 'assets/sprites/steve_500x500.png', 500, 500);
		game.load.spritesheet('spriteDcat', 'assets/sprites/dcat_500x500.png', 500, 500);
		game.load.spritesheet('fight', '/assets/sprites/fight_200x75.png', 200, 75);
	}

	var avatars;
	var selectedHero;
	var text;

	function create()
	{

		avatars = game.add.group();


		//avatar steve
		avatar = avatars.create(368, 100, 'avatarSteve');
		avatar.anchor.set(0.5);
		avatar.heroName = 'steve';
		avatar.inputEnabled = true;
		avatar.events.onInputDown.add(clickAvatar, this);
		//avatar.input.priorityID = 0;

		//avatar dcat
		avatar = avatars.create(432, 100, 'avatarDcat');
		avatar.anchor.set(0.5);
		avatar.heroName = 'dcat';
		avatar.inputEnabled = true;
		avatar.events.onInputDown.add(clickAvatar, this);
		//avatar.input.priorityID = 0;
	
		var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

		text = game.add.text(game.world.centerX, 30, 'Select a Hero', style);
		text.anchor.set(0.5);

		selectedHero = game.add.sprite(game.world.centerX, game.world.centerY, 'spriteSteve');
		selectedHero.anchor.set(0.5);

		fightButton = game.add.button(game.world.centerX, 525, 'fight', fight, this, 1, 0, 2);
		fightButton.anchor.set(0.5);
	}

	function fight()
	{
		game.state.start('LoadState');
	}

	function update()
	{
		
	}

	function clickAvatar(avatar)
	{
		switch(avatar.heroName)
		{
			case 'steve':
					selectedHero.loadTexture('spriteSteve', 0);
					_user.hero = 'steve';
					//console.log(_user.hero);
				break;
			case 'dcat':
					selectedHero.loadTexture('spriteDcat', 0);
					_user.hero = 'dcat';
					//console.log(_user.hero);
				break;
		}
	}

	return { preload: preload, create:create, update:update}
};