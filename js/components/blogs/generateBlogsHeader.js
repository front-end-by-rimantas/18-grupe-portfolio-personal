import {blogsHeaderData} from '../../data/blogsHeaderData.js'; 

function generateBlogsHeader(info) {
    
    document.querySelector(info.selector).innerHTML=
                     `<div class="title">
                        <h1>${info.header}</h1>
                        <p>${info.description}</p>
                    </div>`;    
                    
}

export {generateBlogsHeader}


