var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});

function preload()
{
	game.load.script('socket.io','/socket.io/socket.io.js');

	game.load.script('link','/js/link.js');
	game.load.script('user','/js/user.js');

	game.load.script('heros','/js/heros.js');

	game.load.script('menu','/js/menu.js');
	game.load.script('playerprefs', '/js/playerprefs.js');
	game.load.script('load','/js/load.js');
	game.load.script('game','/js/game.js');
}

function create()
{
	this.stage.disableVisibilityChange = true;

	game.state.add('MenuState', MenuState);
	game.state.add('PlayerPrefsState', PlayerPrefsState);
	game.state.add('LoadState', LoadState);
	game.state.add('GameState', GameState);
	
	game.state.start('MenuState');
}

function update()
{

}