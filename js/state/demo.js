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
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.setScreenSize(true);
    },
    player : {},
    // function to be called when the game has been created
    onCreate: function() {
    // initializing physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    // adding the player on stage
    player = this.game.add.sprite(0,0,"squirrel");
        player.scale.x = player.scale.y = 2;
        this.lastKnownPosition = {x:player.x, y:player.y};
    // setting player anchor point
   player.anchor.setTo(0.5);
    // enabling physics car.body.collideWorldBounds = true;
    this.game.physics.enable(player, Phaser.Physics.ARCADE);
    // the player will collide with bounds
    player.body.collideWorldBounds = true;
    // setting player bounce
    player.body.bounce.set(0.8);

        player.animations.add('walk2');



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
       var gyroDebug = this.gyroDebug;
        var that = this;
    gyro.startTracking(function(o) {
        // updating player velocity
        // player.body.velocity.x += o.gamma/20;
        // player.body.velocity.y += o.beta/20;
        // console.log(o.gamma + ' ' + o.beta);
        gyroDebug.gamma = o.gamma;
        gyroDebug.beta = o.beta;
        if(o.gamma !== null && o.beta !== null && !this.hasStartedMoving) {
           // that.game.physics.arcade.moveToXY(player,o.gamma/20,o.beta/20, 50, 2);
            player.animations.play('walk2', 6, false);
            that.game.add.tween(player).to( { x:o.gamma/20,y: o.beta/20}, 3000, Phaser.Easing.Linear.None, true);
            that.hasStartedMoving = true;
            that.lastKnownPosition.x = player.x;
            that.lastKnownPosition.y = player.y;
        }
    });

        // ALWAYS GO FULLSCREEN LAST!!!
        this.goFullScreen();
},
    reachedLastPointerLocation: false,
    lastKnownPosition: {},
    hasStartedMoving: false,
	update: function() {

            if (this.game.input.activePointer.leftButton.isDown) {
           //     this.goFullScreen();
            //     var touchX = this.game.input.activePointer.clientX;
            //     var touchY = this.game.input.activePointer.clientY;
            //     this.game.add.tween(player).to( { x:touchX,y: touchY }, 1000, Phaser.Easing.Linear.None, true);
            //   //  var changeCoordinate = this.game.physics.arcade.moveToXY(player, touchX, touchY, 100, 5000);
            //     // console.log(changeCoordinate);
            //     this.lastKnownPosition = {x: player.x, y: player.y};
            //     this.reachedLastPointerLocation = false;
            //     this.hasStartedMoving = true;
            }


        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
        {
            this.s.animations.play('walk', 6, false);
            this.s.x -= 1;
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
        {
            this.s.animations.play('walk', 6, false);
            this.s.x += 1;
        }

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP))
        {
            this.s.animations.play('walk', 6, false);
            this.s.y -= 1;
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
        {
            this.s.animations.play('walk', 6, false);

            this.s.y += 1;

        }

},
    gofull: function() {

    if (this.game.scale.isFullScreen)
    {
        this.game.scale.stopFullScreen();
    }
    else
    {
        this.game.scale.startFullScreen(false);
    }

},
render: function() {

   this.game.debug.spriteInfo(this.s, 0, 128);

    // game.debug.text('Click / Tap to go fullscreen', 270, 16);
    this.game.debug.text('Click / Tap to go fullscreen | Move Player 2 with keyboard arrow keys', 0, 16);
    this.game.debug.text('Nut Drop Copyright 2016 Cohen Creative', 0, 64);
    this.game.debug.text('tilt gamma: ' + this.gyroDebug.gamma + ' beta: ' + this.gyroDebug.beta,0,96);

    this.game.debug.inputInfo(0, 256);
    // game.debug.pointer(game.input.activePointer);

},
	preload: function() {
		  this.game.load.spritesheet('squirrel',  'assets/spritesheets/cw.png', 24, 24, 4);
            this.game.load.image('background', 'assets/img/grass.png');
    //  37x45 is the size of each frame
    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
	//this.game.load.image('squirrel', 'assets/squirrel_color_front_2_frame_spritesheet.png');
	},
	emitter : {},
	create: function(){
		console.info('create phase of demo state');
        if(typeof this.game.mouse !== 'undefined') {
            if(typeof this.game.mouse.capture !== 'undefined') {
                this.game.mouse.capture = true;
            }
        }
		// create all objects
		
		// this.emitter = this.game.add.emitter(this.game.world.centerX, 0, 100);
    //
    // this.emitter.makeParticles('squirrel');
    //
    // this.emitter.minParticleSpeed.setTo(-300, 30);
    // this.emitter.maxParticleSpeed.setTo(300, 100);
    // this.emitter.minParticleScale = 0.1;
    // this.emitter.maxParticleScale = 0.5;
    // this.emitter.gravity = 250;

    //  This will emit a quantity of 5 particles every 500ms. Each particle will live for 2000ms.
    //  The -1 means "run forever"
   // this.emitter.flow(2000, 500, 5, -1);

    //  This will emit a single particle every 100ms. Each particle will live for 2000ms.
    //  The 100 means it will emit 100 particles in total and then stop.
    // emitter.flow(2000, 100, 1, 100);
		this.game.add.tileSprite(0,0,mt.data.map.viewportWidth,mt.data.map.viewportHeight,'background');
		this.s = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'squirrel');
	//	sprite.scale = {x:20,y:20};
        this.s.scale.x = this.s.scale.y = 2;
        this.s.animations.add('walk');

        // this.s.animations.play('walk', 3, true);


     	 var style = { font: "12px Courier", fill: "#00ff44" };

    

    // var text1 = this.game.add.text(mt.data.map.viewportWidth/4, mt.data.map.viewportHeight/4, "Nut Drop - coming soon", style);
    // var text2 = this.game.add.text(mt.data.map.viewportWidth/4, mt.data.map.viewportHeight/2, "Cohen Creative", style);
    // var text3 = this.game.add.text(mt.data.map.viewportWidth/4, 5*mt.data.map.viewportHeight/8, "Use arrow keys to move the squirrel.", style);
		// var text4 = this.game.add.text(mt.data.map.viewportWidth/4, 3*mt.data.map.viewportHeight/4, "Touch and gyroscopic movement also supported.", style);






		
		
		
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

        // Stretch to fill
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

        // Keep original size
        // game.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;

        // Maintain aspect ratio
        // game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.game.input.onDown.add(this.gofull, this);

		this.onCreate();
		console.info('end of create phase');
	}
};