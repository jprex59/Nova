const container = document.querySelector(".section-tile");
const nav = document.querySelector(".navbar-menu-own");

let stickycomponent = container.offsetTop;

window.onscroll = function () {
	sticky();
};

function sticky() {
	console.log(window.pageYOffset);
	if (window.pageYOffset > stickycomponent) {
		nav.classList.add("sticky");
	} else {
		nav.classList.remove("sticky");
	}
}
