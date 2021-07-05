function addMouseOver(elements){
	for (i=0; i<elements.length;i++){
		elements[i].addEventListener('mouseover', e=>{
			e.target.style.animation = 'hover 0.3s linear';
			e.target.style.color = 'var(--dark-accent)';
		})
		elements[i].addEventListener('mouseout', e=>{
			e.target.style.animation = 'unhover 0.15s linear';
			setTimeout(() => {e.target.style.color = 'var(--main-white)';}, 140);
		})
		elements[i].addEventListener('click', e=>{
			e.target.style.transform = scale(0.2);
		})
	}
}

addMouseOver(document.querySelectorAll('.navlink'));

function showDropdown(){
	dropdownButton.style.transitionDuration = '0.2s';
	dropdownButton.style.transform = 'rotate(90deg)';
	dropdownMenu.style.opacity = '1';
	dropdownMenu.style.animation = 'drop 0.5s ease';
	hidden = false;	
}

function hideDropdown(){
	dropdownButton.style.transitionDuration = '0.2s';
	dropdownButton.style.transform = 'rotate(0deg)';
	dropdownMenu.style.animation = 'fold 0.2s ease-in-out';
	setTimeout(() => {dropdownMenu.style.opacity = '0';}, 190);
	hidden = true;
}

window.addEventListener('resize', hideDropdown);

const dropdownButton = document.querySelector('#menu-button');
const dropdownMenu = document.querySelector('#dropdown-navbar');
let hidden = true;
dropdownButton.addEventListener('click', e=>{
    if (hidden){
		showDropdown();
    } else {
		hideDropdown();
    }
})


