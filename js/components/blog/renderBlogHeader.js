import { blogData } from '../../data/blogData.js';

function renderBlogHeader(info) {

    document.getElementById('blog_header').innerHTML =
        `<div class="title">
                        <h1>${info.header.header}</h1>
                        <p>${info.header.description}</p>
                    </div>`;
}

export { renderBlogHeader }