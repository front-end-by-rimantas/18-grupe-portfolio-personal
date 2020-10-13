// TODO: perkelta data
const menuDate = [
    { menuTitle: 'Home' },
    { menuTitle: 'About' },
    { menuTitle: 'Services' },
    { menuTitle: 'Works' },
    { menuTitle: 'Clients' },
    { menuTitle: 'Blog' },
    { menuTitle: 'Contact' }
]

// prideda meniu i 
window.onload = function () {
    for (let i = 0; i < menuDate.length; i++) {
        let nameThisMenu = menuDate[i].menuTitle;
        document.querySelector("nav").innerHTML += ` ${nameThisMenu}`;
    }
}