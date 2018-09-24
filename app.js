const app = (function app() {
	"use strict";

	var html = {};
	var tableau = ["./images/a.jpg", "./images/b.png", "./images/c.jpg", "./images/d.png", "./images/e.png", "./images/f.jpg", "./images/g.jpg", "./images/h.jpg", "./images/i.jpg"];
	var index = tableau.indexOf();
	var a;
	// var img; 

	const moveImgDroite = function() {
		// index = (index + 1) % tableau.length;
		if (index === tableau.length -1)

		  {
			  index = 0;

			}

		else {
			index++
		};

		

		html.img.setAttribute("src", tableau[index]);
		console.log(index);


	};

	const moveImgGauche = function() {
		// index = (index - 1) % tableau.length;
		// var moveImggauche = () => (index === 0) ? index = tableau.length -1 : index--; la premiere partie remplace le if, puis "?" signigie fait ceci puis les ":" signifie else/sinon
		if (index <= 0) {
			  index = tableau.length -1;
			}

		else {

			index--
		};

		html.img.setAttribute("src", tableau[index]);
		console.log(index);

	};


	 const autoplay = function() {

	  a = window.setInterval(moveImgDroite, 2000); // Autoplay
		
	 };

	 
	 const stopAutoPlay = function() {

	  window.clearInterval(a) // stop autoplay
	

	 };


    
    const start = function() {
		html.flecheDroite = document.getElementById('droite');
		html.flecheGauche = document.getElementById('gauche');
		html.flecheDroite.onclick = function() {
			moveImgDroite();
			stopAutoPlay(); 
		};
		html.flecheGauche.onclick = function() {
			moveImgGauche();
			stopAutoPlay(); 
		};
		html.img = document.getElementById("images");
		autoplay();

		

	};
	
	// moveImgDroite();
	// moveImgGauche();

    window.addEventListener("DOMContentLoaded", start);

}());