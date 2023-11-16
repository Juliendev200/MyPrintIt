const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.jpg",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
const img = document.querySelector(".banner-img");
const txt = document.querySelector("p");

let i = 0

leftArrow.addEventListener("click", () => {
	i--;
	if (i === -1) {
		i = slides.length - 1;
	}
	img.src = slides[i].image;
	txt.innerHTML = slides[i].tagLine;
});

rightArrow.addEventListener("click", () => {
	i++;
	if (i === slideles.length) {
		i = 0;
	}
	img.src = slides[i].image;
	txt.innerHTML = slides[i].tagLine;
});