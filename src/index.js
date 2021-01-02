import {home} from './home.js';
import {menu} from './menu.js';
import {contact} from './contact.js';


function renderNav(module, activetab) {
    const content = document.getElementById('content');
    
    const nav = document.createElement('nav');
    nav.setAttribute('class', 'tablist');
    
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'tabs');
    
    ul.appendChild(createMenuItem('Home'));
    ul.appendChild(createMenuItem('Menu'));
    ul.appendChild(createMenuItem('Contact'));

    nav.appendChild(ul);
    content.appendChild(nav);
    
    content.appendChild(module);

    document.getElementById(activetab).classList.add('active');


    nav.addEventListener('click',event => {
       switchTab(event);
    });
}


function createMenuItem(itemname) {
    const li = document.createElement('li');
    li.setAttribute('id', itemname.toLowerCase());
    li.textContent = itemname;

    return li;
}
function clear() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

function switchTab(event) {
    clear();
    let item = event.target.getAttribute('id');

    switch (item) {
        case 'home': renderNav(home(), 'home'); break;
        case 'menu': renderNav(menu(), 'menu'); break;
        case 'contact': renderNav(contact(), 'contact'); break;
    }
 

}

renderNav(home(), 'home');

