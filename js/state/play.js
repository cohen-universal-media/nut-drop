"use strict";
window.NutDrop.state.play = {
	preload: function(){
		console.log("playing play state");
		// we have preloaded assets required for Loading group objects in the Boot state
		var playingGroup = mt.create("Playing");
		
		// playing has been deleted?
		// continue to load rest of the textures
		if(!playingGroup){
			mt.preload();
			return;
		}
		
		// get preload sprite
		var preload = playingGroup.mt.children.squirrel;
		
		// preload has been deleted?
		// continue to load rest of the textures
		if(!preload){
			mt.preload();
			return;
		}
		
		// set it as preload sprite
		// buid loading bar
		this.load.setPreloadSprite(preload);

		// update group transform - so we can get correct bounds
		playingGroup.updateTransform();

		// get bounds
		var bounds = playingGroup.getBounds();

		// move it to the center of the screen
		playingGroup.x = this.game.camera.width*0.5 - (bounds.width) * 0.5  - bounds.x;
		playingGroup.y = this.game.camera.height*0.5 - (bounds.height) - bounds.y;
		// load all assets
		mt.preload();
	},
	
	create: function(){
		console.log("starting play state");
	},
	
	update: function(){
		
	}
};