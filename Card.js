var Card = function(id,word,visual){
		this.id = id;
		this.word = word;
		this.visual = visual;
		this.background = 'imgs/hoyleback.jpg'
		this.faceDown = true;
		this.paired = false;

	this.getId = function(){
		return this.id;
	}
	this.getVisual = function(){
		return this.visual;
	}
	this.getWord = function(){
		return this.word;
	}
	this.getBackground = function(){
		return this.background;
	}
	this.isFaceDown = function(){
		return this.faceDown;
	}
	this.flip = function(){
		this.faceDown = !this.faceDown;
	}
	this.isMatched = function(){
		return this.paired;
	}
	this.matchFound = function(){
		this.paired = true;
	}
}
