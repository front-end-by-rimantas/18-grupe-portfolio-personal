
class RenderPhotoList {
    constructor(params) {
        this.DOM = params.DOM;
        this.data = params.data;
        this.imgPath = params.imgPath;
        this.defaultImg = params.defaultImg;

        this.photosDOM = null;

        this.init();
    }

    init() {
        this.render();
    }

    generateHTML() {
        let HTML = '';
        const defaultImg = this.defaultImg;
        for (let item of this.data) {
            HTML += `<div class="img">
                        <img class="image" src="./img/gallery/${item.photo}" alt="${item.name}" onerror="this.src='./img/gallery/${defaultImg}';">
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

    update(tag) {
        for (let i = 0; i < this.data.length; i++) {
            if (tag === 'ALL') {
                this.photosDOM[i].classList.remove('hidden');
                continue;
            }

            if (this.data[i].tags.includes(tag)) {
                this.photosDOM[i].classList.remove('hidden');
            } else {
                this.photosDOM[i].classList.add('hidden');
            }
        }
    }

    render() {
        this.DOM.innerHTML = this.generateHTML();

        this.photosDOM = this.DOM.querySelectorAll('.img');
    }
}

export { RenderPhotoList }

