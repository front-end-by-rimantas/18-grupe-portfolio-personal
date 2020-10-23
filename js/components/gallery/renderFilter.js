
class RenderFilter {
    constructor(params) {
        this.data = params.data;
        this.DOM = params.DOM;
        this.PARENT = params.PARENT;


        this.init();
    }

    init() {
        this.render();
        this.addEvents();
        // this.changeColor();
    }

    generateHTML() {
        let HTML = '';

        // isrinkta is visu darbu tagu sarasai i viena bendra
        const tags = [];
        for (let item of this.data) {
            tags.push(item.tags);
        }

        // surinkti tik unikaliu tagu sarasa
        const uniqueTags = [];
        for (let i = 0; i < tags.length; i++) {
            const vidinisArray = tags[i];

            for (let k = 0; k < vidinisArray.length; k++) {
                const tag = vidinisArray[k];

                if (!uniqueTags.includes(tag)) {
                    uniqueTags.push(tag);
                }
            }
        }
        // generuojame HTML
        HTML += `<div class="tag active">ALL</div>`;
        for (let tag of uniqueTags) {
            HTML += `<div class="tag">${tag}</div>`;
        }

        return HTML;
    }

    render() {
        this.DOM.innerHTML = this.generateHTML();
    }


    addEvents() {
        const tagsDOM = this.DOM.querySelectorAll('.tag');

        for (let tag of tagsDOM) {
            tag.addEventListener('click', (e) => {
                this.PARENT.contentUpdate(tag.innerText);

                document.querySelector('.tag.active').classList.remove('active');
                e.target.classList.add('active');
            })
        }
    }

}

export { RenderFilter }





