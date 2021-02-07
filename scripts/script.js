// bgi

function bgi() {
	let bgi = document.querySelectorAll(".bgi");
	for (var i = 0; i < bgi.length; i++) {
		if (bgi[i].querySelector('img')) {
			bgi[i].style.backgroundImage = 'url(' + bgi[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
bgi();

// AOS

AOS.init({
	once: true
});

// POPUP

const openPPs = document.querySelectorAll('.pp');
const popup = document.querySelector('.popup');
const popupBody = document.querySelectorAll('.popup__body');
const body = document.querySelector('body');
const closePP = document.querySelector('.close-popup');
let paddingToFixBody = (window.innerWidth - body.offsetWidth) + 'px';

for (let index = 0; index < openPPs.length; index++) {

	const openPP = openPPs[index];

	openPP.addEventListener('click', function () {
		popup.classList.add('_active');
		body.style.overflow = 'hidden';
		body.style.paddingRight = paddingToFixBody;
	});
}

closePP.addEventListener('click', function () {
	popup.classList.remove('_active');
	body.style.overflow = 'visible';
	body.style.paddingRight = '0px';
});

popup.addEventListener('click', function (e) {
	if (popup.classList.contains('_active') && e.target == popup) {
		popup.classList.remove('_active');
		body.style.overflow = 'visible';
		body.style.paddingRight = '0px';
	}
});