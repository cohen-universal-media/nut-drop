/*
 * This file is automatically loaded from state/load.js
 * to change default state - change state/load.js at line: 34
 */
"use strict";
var player;
var squirrelImage;
window.NutDrop.state.demo = {
	s: {},
	update: function() {

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        this.s.x -= 4;
    }
    else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        this.s.x += 4;
    }

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        this.s.y -= 4;
    }
    else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        this.s.y += 4;
    }

},

render: function() {
   this.game.debug.spriteInfo(this.s, 20, 32);

},
	preload: function() {
		  this.game.load.spritesheet('squirrel',  'assets/squirrel_color_front_2_frame_spritesheet_blur_opacity.png', 24, 24, 2);

    //  37x45 is the size of each frame
    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
	//this.game.load.image('squirrel', 'assets/squirrel_color_front_2_frame_spritesheet.png');
	},
	emitter : {},
	create: function(){
		console.info('create phase of demo state');
		// create all objects
		
		this.emitter = this.game.add.emitter(this.game.world.centerX, 0, 100);

    this.emitter.makeParticles('squirrel');

    this.emitter.minParticleSpeed.setTo(-300, 30);
    this.emitter.maxParticleSpeed.setTo(300, 100);
    this.emitter.minParticleScale = 0.1;
    this.emitter.maxParticleScale = 0.5;
    this.emitter.gravity = 250;

    //  This will emit a quantity of 5 particles every 500ms. Each particle will live for 2000ms.
    //  The -1 means "run forever"
    this.emitter.flow(2000, 500, 5, -1);

    //  This will emit a single particle every 100ms. Each particle will live for 2000ms.
    //  The 100 means it will emit 100 particles in total and then stop.
    // emitter.flow(2000, 100, 1, 100);
		
		this.s = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'squirrel');
	//	sprite.scale = {x:20,y:20};
     	 var style = { font: "32px Courier", fill: "#00ff44" };

    

    var text1 = this.game.add.text(mt.data.map.viewportWidth/4, mt.data.map.viewportHeight/4, "Nut Drop", style);
    var text2 = this.game.add.text(mt.data.map.viewportWidth/4, mt.data.map.viewportHeight/2, "Coming Soon", style);
    var text3 = this.game.add.text(mt.data.map.viewportWidth/4, 5*mt.data.map.viewportHeight/8, "Use arrow keys to ", style);
		var text3 = this.game.add.text(mt.data.map.viewportWidth/4, 3*mt.data.map.viewportHeight/4, "move the squirrel", style);

    
		
     this.s.animations.add('walk');

     this.s.animations.play('walk', 2, true);
		
		
		
		var all = mt.createAll();
		console.log(all);
		
		
		
		// prevent pause on focus lost
		this.game.stage.disableVisibilityChange = true;
		
		// start __main movie for all objects
		for(var i in all){
			if(all[i].mt.movies && all[i].mt.movies.__main){
				all[i].mt.movies.__main.start().loop();
			}
		}
		console.info('end of create phase');
	}
};