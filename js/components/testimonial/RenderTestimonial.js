class RenderTetimonial {
    constructor(params){
        this.selector = params.selector;
        console.log(this.selector);
        this.data = params.data;
        
        this.DOM = null;
        this.init();
    }
    
    init(){
        if(!this.isValidSelector()){
            return;
        }
        this.generateHTML();
    }

    isValidSelector(){
        const DOM = document.querySelector(this.selector);
        console.log(DOM);
        if (!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    generateHTML(){
        let HTML = '' ;

        for(let feed of this.data){
            HTML += `<div class="single-testimonial">
                        <div class="s-testimonial-left">
                            <img class="testimonial-img" src="${feed.img}" alt="${feed.alt}">
                        </div>
                        <div class="s-testimonial-right">
                            <p>${feed.feedback}</p>
                            <h4>${feed.name}</h4>
                            <p>${feed.job}</p>
                        </div>
                    </div>`;
        }
        this.DOM.insertAdjacentHTML('beforeend', HTML);
    }
    // render(){
    //     console.log(this.DOM);
    //     this.DOM.insertAdjacentHTML('beforeend', this.generateHTML());
    // }
}

export {RenderTetimonial}