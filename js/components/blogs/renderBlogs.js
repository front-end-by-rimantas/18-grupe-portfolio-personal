import { generateBlog } from './generateBlog.js';

function renderBlogs(parameters) {
    let HTML = '';
    const blogsDOM = document.querySelector(parameters.selector);
    const blogsData = parameters.data;

    for (let i = 0; i < blogsData.length; i += 1) {
        const blog = blogsData[i];
        HTML += generateBlog(blog);
    }

    blogsDOM.innerHTML = HTML;
}

export { renderBlogs }