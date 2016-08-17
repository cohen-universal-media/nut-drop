"use strict";
window.NutDrop = {
	
	// reference to the Phaser.Game instance
	game: null,
	
	// main function
	main: function(){
		console.info('main');
		this.game = new Phaser.Game(mt.data.map.viewportWidth, mt.data.map.viewportHeight, Phaser.AUTO, document.body, window.NutDrop.state.boot);
	},
	
	// here we will store all states
	state: {}
};

window.addEventListener('DOMContentLoaded', function(){
	// window.NutDrop.main();
}, false);