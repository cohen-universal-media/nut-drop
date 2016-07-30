"use strict";
window.NutDrop.state.load = {
	preload: function(){
		console.info('preload phase of load state');
		//we have preloaded assets required for Loading group objects in the Boot state
		//var loadingGroup = mt.create("Loading");
		
		// loading has been deleted?
		// continue to load rest of the textures
		//if(!loadingGroup){
	//		mt.preload();
// 			return;
// 		}
		
// 		// get preload sprite
// 		var preload = loadingGroup.mt.children.preload;
		
// 		// preload has been deleted?
// 		// continue to load rest of the textures
// 		if(!preload){
// 			mt.preload();
// 			return;
// 		}
		
// 		// set it as preload sprite
// 		// buid loading bar
// 		this.load.setPreloadSprite(preload);

// 		// update group transform - so we can get correct bounds
// 		loadingGroup.updateTransform();

// 		// get bounds
// 		var bounds = loadingGroup.getBounds();

// 		// move it to the center of the screen
// 		loadingGroup.x = this.game.camera.width*0.5 - (bounds.width) * 0.5  - bounds.x;
// 		loadingGroup.y = this.game.camera.height*0.5 - (bounds.height) - bounds.y;
// 		// load all assets
// 		mt.preload();
		console.info('end of preload phase');
	},
	
	create: function(){
		console.info('create phase of load state');
		// loading has finished - proceed to demo state
		this.game.state.start("demo");
	}
};