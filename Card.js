class Card{
	constuctor(wordEnglish,wordSpanish,visual){
		this.english = wordEnglish;
		this.spanish = wordSpanish;
		this.visual = visual;
		this.background = '~/imgs/hoyleback.jpg'
		this.faceDown = true;
	}
	get visual(){
		return this.visual;
	}
	get english_word(){
		return this.english;
	}
	get spanish_word(){
		return this.spanish;
	}
	get background(){
		return this.background;
	}
	get faceDown(){
		return this.faceDown;
	}
	flip (){
		this.faceDown = !this.faceDown;
	}
}
