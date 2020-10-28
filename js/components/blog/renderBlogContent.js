import { generateSingleBlog } from './generateSingleBlog.js';


function renderBlogContent(parameters) {
    let HTML = '';
    const blogsDOM = document.getElementById('blog_content');
    const blogContentData = parameters.content.data;

    for (let i = 0; i < blogContentData.length; i += 1) {
        const blog = blogContentData[i];
        HTML += generateSingleBlog(blog);
    }

    blogsDOM.innerHTML = HTML;
}

export { renderBlogContent }