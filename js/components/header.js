import menu from './menuData.js';

class Header {
    constructor(params) {
        this.selector = params.selector;
        this.DOM = null;
        this.menuIconsDOM = null;
        this.navBackgroundDOM = null;
        this.mainNavDOM = null;
        this.menuDropdownsDOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return;
        }
        this.render();
        this.addEvents();
    }

    // validation ---------------------------------------------------------------
    isValidSelector() {
        if (typeof this.selector !== 'string') {
            console.warn('Selector should be a "string" type.');
            return false;
        }
        if (this.selector === '') {
            console.warn('Selector should not be an empty string.');
            return false;
        }

        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.warn('Could not find any element by given selector.');
            return false;
        }

        return true;
    }

    // aditional option action added on nav ----------------------------------
    // TODO: needed arrow down -----------------------------------------------
    addEvents() {
        this.menuIconsDOM.addEventListener('click', () => {
            this.DOM.classList.add('expanded');
        });

        this.navBackgroundDOM.addEventListener('click', () => {
            this.DOM.classList.remove('expanded');
        });

        for (const dropdown of this.menuDropdownsDOM) {
            dropdown.querySelector('.label').addEventListener('click', () => {
                const currentlyExpanded = this.mainNavDOM.querySelector('.dropdown.expanded');
                if (currentlyExpanded) {
                    currentlyExpanded.classList.remove('expanded');
                }
                dropdown.classList.toggle('expanded');
            });
        }
    }

    // redering action when pressed ------------------------------------------
    renderNav(data) {
        let HTML = '';
        for (const item of data) {
            if (item.links) {
                HTML += `<div class="dropdown">
                            <span class="label">${item.name}<i class="fa fa-angle-down"></i></span>
                            <div class="list">
                                ${this.renderNav(item.links)}
                            </div>
                        </div>`;
            } else {
                HTML += `<a ${location.pathname === item.href ? 'class="active"' : ''} href="${location.origin + item.href}">${item.name}</a>`;
            }
        }
        return HTML;
    }

    // rendering background menu mobile version ------------------------------
    render() {
        this.DOM.innerHTML = `<div class="row">
                                <div class="col-12">
                                    <img class="logo" src="${location.origin}/img/logo.png" alt="Personal portfolio logo">
                                    <div class="menu-icons">
                                        <i class="fa fa-bars"></i>
                                        <i class="fa fa-times"></i>
                                    </div>
                                    <div class="nav-background"></div>
                                    <nav>${this.renderNav(menu)}</nav>
                                </div>
                            </div>`;

        this.menuIconsDOM = this.DOM.querySelector('.menu-icons');
        this.navBackgroundDOM = this.DOM.querySelector('.nav-background');
        this.mainNavDOM = this.DOM.querySelector('nav');
        this.menuDropdownsDOM = this.mainNavDOM.querySelectorAll('.dropdown');
    }
}
// scroll shadow -----------------------------------------------------------
let navBar = document.getElementById('main_header');
window.onscroll = function () {
    if (window.scrollY > 22) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
};

export { Header };