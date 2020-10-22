
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

                    console.log(uniqueTags);
                }
            }
        }
        // generuojame HTML
        HTML += `<div class="tag active">All</div>`;
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
            tag.addEventListener('click', () => {
                this.PARENT.contentUpdate(tag.innerText)
            })
        }
    }
}


export { RenderFilter }



// addEvents() {
//     // registruojame scroll event listener
//     // priklausomai nuo aukscio, kuriame esu: prideda/atima .scroll klase nuo/ant header elemento
//     addEventListener('scroll', () => {
//         if (scrollY > 100) {
//             this.DOM.closest('header').classList.add('scroll');
//         } else {
//             this.DOM.closest('header').classList.remove('scroll');
//         }
//     })

//     // hamburgerio click'ai
//     const hamburger = this.DOM.querySelector('.hamburger');
//     const nav = this.DOM.querySelector('nav');
//     hamburger.addEventListener('click', () => {
//         nav.classList.toggle('visible');
//     })
// }


