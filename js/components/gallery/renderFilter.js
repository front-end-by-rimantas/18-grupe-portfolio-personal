
class RenderFilter {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;
        this.DOM = params.DOM;

        this.init();
    }

    init() {
        this.render();
    }

    generateHTML() {
        let HTML = '';
        for (let item of this.data) {
            HTML += `<div>${item.title}</div>`
        }
        return HTML;
    }

    render() {
        this.DOM.innerHTML = this.generateHTML();
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


