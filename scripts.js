const dropdown = {
	button: document.querySelector('#menu-button'),
	menu: document.querySelector('#dropdown-navbar'),
	hidden: true,
	show: function(){
		this.button.style.transitionDuration = '0.2s';
		this.button.style.transform = 'rotate(90deg)';
		this.menu.style.opacity = '1';
		this.menu.style.display = 'block';
		this.menu.style.animation = 'drop 0.35s ease';
		this.hidden = false;
	},
	hide: function(){
		this.button.style.transitionDuration = '0.2s';
		this.button.style.transform = 'rotate(0deg)';
		this.menu.style.animation = 'fold 0.2s ease-in-out';
		setTimeout(() => {
			this.menu.style.opacity = '0';
			this.menu.style.display = 'none';
		}, 190);
		this.hidden = true;
	}
};

function addMouseOver(elements){
	for (i=0; i<elements.length;i++){
		if (elements[i].classList.contains('current-page')){
			elements[i].style.pointerEvents = 'none'; //Deactivate link for current page
		} else if (!elements[i].classList.contains('subtitle-trigger')){
			elements[i].addEventListener('mouseover', e=>{
				e.target.style.animation = 'hover 0.3s linear';
				e.target.style.color = 'var(--dark-accent)';
			})
			elements[i].addEventListener('mouseout', e=>{
				e.target.style.animation = 'unhover 0.15s linear';
				setTimeout(() => {e.target.style.color = 'var(--main-white)';}, 140);
			})
			elements[i].addEventListener('click', e=>{
				e.target.style.transitionDuration = '0.25s';
				e.target.style.transform = 'scale(0.9)';
				e.target.style.color = 'var(--main-white)';
			})
		}
	}
}

dropdown.button.addEventListener('click', e=>{
    if (dropdown.hidden){
		dropdown.show();
    } else {
		dropdown.hide();
    }
});

const mainImg = document.querySelector('#main-img');
if (mainImg && window.innerWidth > 780){
	mainImg.addEventListener('mouseover', e=>{
		mainImg.style.transitionDuration = '0.5s';
		mainImg.style.transform = 'scale(1.05)';
		mainImg.style.cursor = 'pointer';
	})
	mainImg.addEventListener('mouseout', e=>{
		mainImg.style.transform = 'scale(1)';
	})
	mainImg.addEventListener('click', e=>{
		mainImg.style.transform = 'scale(1.03)';
		setTimeout(() => {mainImg.style.transform = 'scale(1)';}, 250);
	})
}

window.addEventListener('resize', e=>{
	if (!dropdown.hidden && window.innerWidth > 780){
		dropdown.hide();
	}
	/*if (window.innerWidth < mainImg.width){
		mainImg.style.height = mainImg.height / 2;
	}*/
});

const subtitleTrigger = document.querySelectorAll('.subtitle-trigger');
const navlinkSubtitle = document.querySelectorAll('.navlink-subtitle');
subtitleTrigger[0].addEventListener('mouseover', e=>{
	navlinkSubtitle[0].style.opacity = '1';
});
subtitleTrigger[0].addEventListener('mouseout', e=>{
	navlinkSubtitle[0].style.opacity = '0';
});

addMouseOver(document.querySelectorAll('.navlink'));
addMouseOver(document.querySelectorAll('.contactlink'));

