
class RenderFilter {
    constructor(params) {
        this.selector = params.selector;
        this.filterButtons = params.filter;
    }

    generateFilter() {
        let filterHTML = '';

        for (let i = 0; i < this.filterButtons.length; i++) {
            const filterItem = this.filterButtons[i];
            filterHTML += filterItem.title;
        }
        return filterHTML;
    }

    formatFilter() {

        return `<div>${this.generateFilter()}</div>`;

    }


    render() {
        const filterDOM = document.querySelector(this.selector);
        filterDOM.innerHTML = this.formatFilter();
    }

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
}

export { RenderFilter }