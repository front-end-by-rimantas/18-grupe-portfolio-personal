import { generateBlog } from './generateBlog.js';

function renderBlogs(parameters) {
    let HTML = '';
    const blogsDOM = document.querySelector(parameters.selector);
    const blogsContentData = parameters.data;

    for (let i = 0; i < blogsContentData.length; i += 1) {
        const blog = blogsContentData[i];
        HTML += generateBlog(blog);
    }

    blogsDOM.innerHTML = HTML;
}

export { renderBlogs }