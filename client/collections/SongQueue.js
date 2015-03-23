// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  	this.on("add", function(){
  		if(this.length === 1){
  			this.playFirst();
  		}
  	});

  	this.on("ended", function(){
  		if(this.length > 1){
  			this.removeSong();
  			this.playFirst();
  		} else{
  			this.removeSong();
  		}
  	});

  	this.on("dequeue", function(){
  		this.removeSong();
  	})


 },
  playFirst: function(){
	this.at(0).play();
  	//this.model.play();
  },

  removeSong: function(){
  	this.shift();
  }

});