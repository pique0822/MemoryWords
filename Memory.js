var Memory = function(listOfPairs){
		this.n = 2*listOfPairs.length;
		this.cards = [];
		for(var i = 0; i<listOfPairs.length; i++){
			var adding = listOfPairs[i].getCards();
			this.cards.push(adding[0]);
			this.cards.push(adding[1]);

		}
		console.log(this.n);
		console.log(this.cards);
		for (var w = Math.floor(Math.sqrt(this.n)); w >= 1; w--)
		{
			if(this.n % w == 0){
				this.width = w;
				this.height = this.n/w;
				break;
			}
		}
		//Initialize board as empty
		this.board = new Array(this.width);
	  for (var i = 0; i < this.height; i++)
	  {
	    this.board[i] = [];
	  }

	this.populate = function(){
		this.randomShuffle();
		var counter = 0;
		for(var x = 0; x<this.width; x++){
			for(var y = 0; y<this.height; y++){;
				this.board[x][y] = this.cards[counter];
				counter++;
			}
		}
	}
	this.getCard = function(x,y){
		return this.board[x][y];
	}
	this.getWidth = function(){
		return this.width;
	}
	this.getHeight = function(){
		return this.height;
	}
	this.getImage = function(x,y){
		var card = this.getCard(x,y);
		if(card.isFaceDown()){
			return card.getBackground() ;
		}
		return card.getVisual();
	}
	this.isFaceDown = function(x,y){
		return this.getCard(x,y).isFaceDown();
	}
	this.flipCard = function(x,y){
		this.getCard(x,y).flip();
	}
	this.flipAll = function(){
		for(var x = 0; x<this.width; x++){
			for(var y = 0; y<this.height; y++){
				if(!this.isFaceDown(x,y)){
					this.flipCard(x,y);
				}
			}
		}
	}
	this.cardsMatch = function(x1,y1,x2,y2){
		var card1 = this.getCard(x1,y1).getId();
		var card2 = this.getCard(x2,y2).getId();
		if(card1 == card2){
			this.getCard(x1,y1).matchFound();
			this.getCard(x2,y2).matchFound();
		}
		return card1 == card2;
	}
	this.isCardMatched = function(row,col){
		return this.getCard(row,col).isMatched();
	}
	this.randomShuffle = function(){
		var out = []
		while(this.cards.length>0)
		{
			var i = Math.floor(Math.random()*this.cards.length);
			out.push(this.cards[i]);
			this.cards.splice(i,1)
		}
		this.cards = out;
	}
	this.populate();
}
