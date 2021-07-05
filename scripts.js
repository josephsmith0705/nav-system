const navlinks = document.querySelectorAll('.navlink');
for (i=0; i<navlinks.length;i++){
    navlinks[i].addEventListener('mouseover', e=>{
        e.target.style.animation = 'hover 0.3s linear';
        e.target.style.color = 'var(--dark-accent)';
        console.log("test: element "+e.target.textContent);
    })
    navlinks[i].addEventListener('mouseout', e=>{
        e.target.style.animation = 'unhover 0.15s linear';
        setTimeout(() => {e.target.style.color = 'var(--main-white)';}, 140);
    })
    navlinks[i].addEventListener('click', e=>{
        e.target.style.transform = scale(0.2);
    })
}

const ddnavlinks = document.querySelectorAll('.dd-navlink');
for (i=0; i<navlinks.length;i++){
    navlinks[i].addEventListener('mouseover', e=>{
        console.log("test: element "+e.target.textContent);
    })
}

const dropdownButton = document.querySelector('#menu-button');
const dropdown = document.querySelector('#dropdown-navbar');
let hidden = true;
dropdownButton.addEventListener('click', e=>{
    if (hidden === true){
        dropdownButton.style.transitionDuration = '0.2s';
        dropdownButton.style.transform = 'rotate(90deg)';
        dropdown.style.opacity = '1';
        dropdown.style.animation = 'drop 0.5s ease';
        hidden = false;
    } else {
        dropdownButton.style.transitionDuration = '0.2s';
        dropdownButton.style.transform = 'rotate(0deg)';
        dropdown.style.animation = 'fold 0.2s ease-in-out';
        setTimeout(() => {dropdown.style.opacity = '0';}, 190);
        
        hidden = true;
    }
})