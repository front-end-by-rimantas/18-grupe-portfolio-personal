import { RenderFilter } from './renderFilter.js'
import { RenderPhotoList } from './RenderPhotoList.js'

class RenderGallery {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;
        this.imgPath = params.imgPath;
        this.defaultImg = params.defaultImg;

        this.DOM = null;
        this.filterObj = null;
        this.photoListObj = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return;
        }

        this.render();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);  // false -> DOM = null
        if (DOM) {
            this.DOM = DOM;
            return true;
        }
        return false;
    }

    isValidGallery() {
        return true;
    }

    generateHTML() {
        // validation
        if (!this.isValidGallery()) {
            return '';
        }

        // output
        return `<div class="filter">
                    FILTER
                </div>
                <div class="list">
                    LIST
                </div>`;
    }

    contentUpdate(tag) {
        this.photoListObj.update(tag);
    }

    render() {
        this.DOM.innerHTML = this.generateHTML();

        const filterDOM = this.DOM.querySelector('.filter');
        const listDOM = this.DOM.querySelector('.list');

        this.filterObj = new RenderFilter({
            DOM: filterDOM,
            data: this.data,
            PARENT: this
        });
        this.photoListObj = new RenderPhotoList({
            DOM: listDOM,
            data: this.data,
            imgPath: this.imgPath,
            defaultImg: this.defaultImg
        });
    }
}

export { RenderGallery }





/*
new Gallery()
    new Filter()
        HTML + event
    new PhotosList()
        HTML
*/

/*
<div id="portfolio_block" class="gallery col-12">
    <div class="list">
        <div class="img">
            <img class="image" src="./img/gallery/${item.photo}" alt="Gallery picture">
            <div class="overlay">
                <img class="ziuronai" src="./img/gallery/ziuronai.png" alt="Hover picture">
            </div>
            <div class="gallery-names">
                <h3>${item.name}</h3>
                <p>${item.subname}</p>
            </div>
        </div>
    </div>
</div>
*/