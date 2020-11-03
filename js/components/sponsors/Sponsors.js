"use strict";

class Sponsors {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;
        this.imgPath = params.imgPath;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return;
        }
        this.render();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (DOM) {
            this.DOM = DOM;
            return true;
        }
        return false;
    }

    generateHTML() {
        let HTML = "";

        for (let item of this.data) {
            let imgAlt = item.imgAlt;
            if (!imgAlt) {
                imgAlt = `${item.name}`;
            }
            HTML += `<div class="single-sponsor">
                        <img class="brand-logo" src="${this.imgPath + item.img}" alt="${imgAlt}">
                    </div>`;
        }
        return HTML;
    }

    render() {

        this.DOM.innerHTML = this.generateHTML();
    }
}

export { Sponsors }