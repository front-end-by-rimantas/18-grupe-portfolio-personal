import { renderBlogHeader } from './renderBlogHeader.js';
import { renderBlogContent } from './renderBlogContent.js';
import { blogData } from '../../data/blogData.js';

function renderBlog() {
    return renderBlogHeader(blogData),
        renderBlogContent(blogData);
}

export { renderBlog }