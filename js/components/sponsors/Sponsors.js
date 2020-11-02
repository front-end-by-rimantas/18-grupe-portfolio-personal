class Sponsors {
    constructor(params) {
        this.DOM = params.DOM;
        this.data = params.data;
        this.imgPath = params.imgPath;

        this.photosDOM = null;

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
        const feedDOM = document.getElementById('sponsors_block');
        HTML = feedDOM;
        return HTML;
    }

    render() {
        this.generateHTML();

        //this.photosDOM = document.querySelectorAll('.brand-logo');

    }
}

export { Sponsors }