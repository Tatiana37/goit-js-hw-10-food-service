import { menuItems } from "./js/menu-items";
import refs from "./js/refs";
// console.log(refs);
import createMenuList from "./templates/menu-template.hbs";
import theme from "./js/theme";
// console.log(theme);




// refs.menu.innerHTML = createMenuList(menuItems);
refs.menu.insertAdjacentHTML('beforeend',createMenuList(menuItems));


refs.body.classList.add(localStorage.getItem('theme') ? localStorage.getItem('theme') : theme.LIGHT);
refs.inputCheck.addEventListener('change', onInputChange);

function onInputChange(e) {
    if (e.target.checked) {
        refs.body.classList.add(theme.DARK);
        refs.body.classList.remove(theme.LIGHT);
        localStorage.setItem('theme', theme.DARK);
        
    }else{
    refs.body.classList.add(theme.LIGHT);
    refs.body.classList.remove(theme.DARK);
    localStorage.removeItem('theme');
    localStorage.setItem('theme', theme.LIGHT);
    }
};

const changeTheme = localStorage.getItem('theme');
if (changeTheme === theme.DARK) {
    refs.body.classList.add(theme.DARK);
    refs.inputCheck.checked = true;
};