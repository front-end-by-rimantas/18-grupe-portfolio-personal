import { validateBlogHeader } from './validateBlogHeader.js';
import { blogData } from '../../data/blogData.js';
import { validateBlogContent } from './validateBlogContent.js';

function validateBlog() {
    return validateBlogHeader(blogData),
        validateBlogContent(blogData);
}


export { validateBlog }