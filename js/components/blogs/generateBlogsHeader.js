import {blogsHeaderData} from '../../data/blogsHeaderData.js';

function generateBlogsHeader(info) {
    const blogsHeaderDOM = document.querySelector(info.selector);
    blogsHeaderDOM.innerHTML = `<div class="title">
                                    <h1>${info.header}</h1>
                                    <p>${info.description}</p>
                                </div>`;             
           
}

export {generateBlogsHeader}


