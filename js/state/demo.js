/*
 * This file is automatically loaded from state/load.js
 * to change default state - change state/load.js at line: 34
 */
"use strict";
var player;
var squirrelImage;
window.NutDrop.state.demo = {
	s: {},
    gyroDebug : {},
    // function to scale up the game to full screen
    goFullScreen: function(){
        // this.game.scale.pageAlignHorizontally = true;
        // this.game.scale.pageAlignVertically = true;
        // this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        // this.game.scale.setScreenSize(true);
    },
    player : {},
    // function to be called when the game has been created
    onCreate: function() {
    // initializing physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    // going full screen
    this.goFullScreen();
    // adding the player on stage
    player = this.game.add.sprite(0,0,"squirrel");
    // setting player anchor point
    player.anchor.setTo(0.5);
    // enabling physics car.body.collideWorldBounds = true;
    this.game.physics.enable(player, Phaser.Physics.ARCADE);
    // the player will collide with bounds
    player.body.collideWorldBounds = true;
    // setting player bounce
    player.body.bounce.set(0.8);

        player.animations.add('walk2');

        player.animations.play('walk', 2, true);

        // var promise = FULLTILT.getDeviceOrientation({'type': 'game'});
        //
        // promise.then(function(orientationControl) {
        //
        //     orientationControl.listen(function() {
        //
        //             var euler;
        //
        //             switch( currentControlType ) {
        //                 case 1: // Use raw DeviceOrientation event values
        //                     euler = orientationControl.getLastRawEventData();
        //                     break;
        //                 default: // Use Full Tilt values
        //                     euler = orientationControl.getScreenAdjustedEuler();
        //                     break;
        //             }
        //
        //             // Don't update CSS position if we are close to encountering gimbal lock
        //             if (euler.beta > 85 && euler.beta < 95) {
        //                 return;
        //             }
        //
        //             var tiltX = euler.gamma;
        //
        //             if (tiltX > 0) {
        //                 tiltX = Math.min(tiltX, TILT_LIMIT);
        //             } else {
        //                 tiltX = Math.max(tiltX, TILT_LIMIT * -1);
        //             }
        //
        //             var pxOffsetX = (tiltX * halfScreenWidth) / TILT_LIMIT;
        //
        //             if ( !initialBeta ) {
        //                 initialBeta = euler.beta;
        //             }
        //
        //             var tiltY = euler.beta - initialBeta;
        //
        //             if (tiltY > 0) {
        //                 tiltY = Math.min(tiltY, TILT_LIMIT);
        //             } else {
        //                 tiltY = Math.max(tiltY, TILT_LIMIT * -1);
        //             }
        //
        //             var pxOffsetY = (tiltY * halfScreenHeight) / TILT_LIMIT;
        //
        //             var pxToMoveX = Math.max(box.minBoundX, Math.min(pxOffsetX + halfScreenWidth - halfCubeWidth, box.maxBoundX));
        //             var pxToMoveY = Math.max(box.minBoundY, Math.min(pxOffsetY + halfScreenHeight - halfCubeWidth, box.maxBoundY));

                    // // setting gyroscope update frequency
    gyro.frequency = 10;
    // start gyroscope detection
    gyro.startTracking(function(o) {
        // updating player velocity
        player.body.velocity.x += o.gamma/40;
        player.body.velocity.y += o.beta/40;
    });
},
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
		  this.game.load.spritesheet('squirrel',  'assets/spritesheets/cw.png', 24, 24, 4);

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
   // this.emitter.flow(2000, 500, 5, -1);

    //  This will emit a single particle every 100ms. Each particle will live for 2000ms.
    //  The 100 means it will emit 100 particles in total and then stop.
    // emitter.flow(2000, 100, 1, 100);
		
		this.s = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'squirrel');
	//	sprite.scale = {x:20,y:20};
     	 var style = { font: "32px Courier", fill: "#00ff44" };

    

    var text1 = this.game.add.text(mt.data.map.viewportWidth/4, mt.data.map.viewportHeight/4, "Nut Drop", style);
    var text2 = this.game.add.text(mt.data.map.viewportWidth/4, mt.data.map.viewportHeight/2, "Coming Soon", style);
    var text3 = this.game.add.text(mt.data.map.viewportWidth/4, 5*mt.data.map.viewportHeight/8, "Use arrow keys to ", style);
		var text4 = this.game.add.text(mt.data.map.viewportWidth/4, 3*mt.data.map.viewportHeight/4, "move the squirrel", style);

    
		
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
		this.onCreate();
		console.info('end of create phase');
	}
};