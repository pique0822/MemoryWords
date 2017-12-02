var Pair = function(id,word1,word2,image){
	this.id = id;
	this.word1 = word1;
	this.word2 = word2;
	this.visual = image;

	this.card1 = new Card(id,word1,image);
	this.card2 = new Card(id,word2,image);

	this.getCards = function(){
		return [this.card1,this.card2];
	}
	this.getId = function(){
		return this.id;
	}
}
