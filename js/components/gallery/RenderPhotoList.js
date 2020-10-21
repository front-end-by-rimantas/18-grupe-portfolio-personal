
class RenderPhotoList {
    constructor(params) {
        this.DOM = params.DOM;
        this.data = params.data;
        this.imgPath = params.imgPath;
        this.defaultImg = params.defaultImg;

        this.init();
    }

    init() {
        this.render();
    }

    generateHTML() {
        let HTML = '';
        for (let item of this.data) {
            HTML += `<div class="img">
                        <img class="image" src="./img/gallery/${item.photo}" alt="Gallery picture">
                        <div class="overlay">
                            <img class="ziuronai" src="./img/gallery/ziuronai.png" alt="Hover picture">
                        </div>      
                        <div class="gallery-names">
                            <h3>${item.name}</h3>
                            <p>${item.subname}</p>
                        </div>
                    </div>`

        }
        return HTML;
    }

    render() {
        this.DOM.innerHTML = this.generateHTML();
    }
}

export { RenderPhotoList }


