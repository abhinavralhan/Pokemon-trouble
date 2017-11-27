var player,
	platform,
	blocks,
	map,
	sprite,
	layer,
	collisionMap,
	movement,
	musicTown,
	musicBattle,
	townEnabled,
	itemArray = [],
	it,
	allItem,
	ball;


var preload = function () {
	game.load.tilemap('map', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.image('Retro_Tileset_RBG', 'assets/Retro_Tileset_RBG.png', 16, 16);
 	game.load.spritesheet('red', 'assets/red.png', 32, 32);
 	game.load.audio('town', 'assets/town.mp3');
 	game.load.audio('battle', 'assets/battle.mp3');
 	game.load.spritesheet('item', 'assets/ball.png');
};

var create = function () {
	musicTown = game.add.audio('town');
	musicTown.loop = true;
	musicTown.play();
	townEnabled = true;

	musicBattle = game.add.audio('battle');
	musicBattle.loop = true;

	game.physics.startSystem(Phaser.Physics.ARCADE);

	map = game.add.tilemap('map');
	map.addTilesetImage('Retro_Tileset_RBG');

	collide = map.createLayer('collision');
	collide.resizeWorld();

	layer = map.createLayer('calque');
	layer.resizeWorld();

	danger = map.createLayer('danger');
	danger.resizeWorld();

	// allItem = game.add.group();
	// allItem.enableBody = true;

	// it = allItem.create(33*16, 25*16 + 16, 'item');
	ball = game.add.sprite(33*16, 25*16 + 32, 'item');

	sprite = game.add.sprite(33*16, 25*16, 'red');

/*	it.custom = {
		name: "pokeball"
	};
	it.height = 12;
	it.width = 12;
*/
	game.physics.enable([sprite, ball], Phaser.Physics.ARCADE);
	ball.body.velocity.x = 0;
	ball.name = "pokeball";
	//game.physics.enable(sprite);
	//game.physics.arcade.enable(ball);

	//add(name, frames, frameRate, loop, useNumericIndex)
	var down = sprite.animations.add('down', [0, 1], 8, true);
	var left = sprite.animations.add('left', [2, 3], 8, true);
	var right = sprite.animations.add('right', [4, 5], 8, true);
	var up = sprite.animations.add('up', [6, 7], 8, true);

	sprite.height = 16;
	sprite.width = 16;

	game.camera.follow(sprite);
	//game.world.scale.setTo(game.world.scale.x + 1 , game.world.scale.y + 1);
};
	height = 16;
	width = 16;

	//A simple spy helper
function createSpy(targetFunc) {
  var spy = function() {
    spy.args = arguments;
    spy.returnValue = targetFunc.apply(this, arguments);
    return spy.returnValue;
  };

  return spy;
}

//Let's spy on a simple function:
function exist(a, b) 
{ 
	if((a && b)!=0)
	return true;
}


var spiedSum = createSpy(exist);


spiedSum(width, height);

console.log(spiedSum.args); 

if (spiedSum.returnValue == true) {console.log('Pokemon is successfully created');}
else {console.log('Pokemon does not exist :(');}
 
//spies, assertions, stubs