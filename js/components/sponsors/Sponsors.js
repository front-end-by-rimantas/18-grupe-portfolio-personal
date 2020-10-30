class Sponsors {
    constructor(params) {
        this.DOM = params.DOM;
        console.log("kas yra");
        console.log(this.DOM);
        this.data = params.data;
        this.imgPath = params.imgPath;

        this.brandsDOM = null;

        this.init();
    }

    init() {
        this.render();
    }

    generateHTML() {
        let HTML = '';

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
        this.brandsDOM = this.DOM.querySelectorAll('.brand-logo');
    }
}

export { Sponsors }