const trap = document.querySelector(".trap");
const house = document.querySelector(".house");
const afro = document.querySelector(".afro");
const drill = document.querySelector(".drill");
const pop = document.querySelector(".pop");
const reggae = document.querySelector(".reggae");
const all = document.querySelector(".all");

function Genre(a) {
	if (a == "trap") {
		trap.style.display = "flex";
		house.style.display = "none";
		afro.style.display = "none";
		drill.style.display = "none";
		pop.style.display = "none";
		reggae.style.display = "none";
	}
	if (a == "house") {
		house.style.display = "flex";
		trap.style.display = "none";
		afro.style.display = "none";
		drill.style.display = "none";
		pop.style.display = "none";
		reggae.style.display = "none";
	}
	if (a == "afro") {
		afro.style.display = "flex";
		house.style.display = "none";
		trap.style.display = "none";
		drill.style.display = "none";
		pop.style.display = "none";
		reggae.style.display = "none";
	}
	if (a == "drill") {
		drill.style.display = "flex";
		house.style.display = "none";
		afro.style.display = "none";
		trap.style.display = "none";
		pop.style.display = "none";
		reggae.style.display = "none";
	}
	if (a == "pop") {
		pop.style.display = "flex";
		house.style.display = "none";
		afro.style.display = "none";
		drill.style.display = "none";
		trap.style.display = "none";
		reggae.style.display = "none";
	}
	if (a == "reggae") {
		reggae.style.display = "flex";
		house.style.display = "none";
		afro.style.display = "none";
		drill.style.display = "none";
		pop.style.display = "none";
		trap.style.display = "none";
	}
	if (a == "all") {
		reggae.style.display = "flex";
		house.style.display = "flex";
		afro.style.display = "flex";
		drill.style.display = "flex";
		pop.style.display = "flex";
		trap.style.display = "flex";
	}
}
