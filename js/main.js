contador = 0;

let navmob = document.getElementById("btn-mobyle");
let menumob = document.getElementById("menu-mob");
let navb = document.getElementById("navbar");


navmob.addEventListener("click",(e) => {
	if(contador == 0) {
		menumob.classList.remove('menuhidden');
		navmob.classList.remove('openmenu');
		navmob.classList.add('closemenu');
		menumob.classList.add('menuselect');
		menumob.classList.add('select-color')
		navb.classList.add('select-color');
		contador++
	}else if(contador == 1) {
		menumob.classList.remove('menuselect');
		menumob.classList.remove('select-color')
		navmob.classList.remove('closemenu');
		navmob.classList.add('openmenu');
		navb.classList.remove('select-color');
		menumob.classList.add('menuhidden');
		contador = 0;
	}
});