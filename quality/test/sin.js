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
function equal(a, b) { return a == b; }


function create () {
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

var spiedSum = createSpy(equal);

var ball= 'pokeball';

spiedSum(ball, 'pokeball');

console.log(spiedSum.args); //Output: [10, 5]

if (spiedSum.returnValue == true) {console.log('Pokeball successfully found!');}
else {console.log('Pokeball not created by create() :(');}
 
//spies, assertions, stubs