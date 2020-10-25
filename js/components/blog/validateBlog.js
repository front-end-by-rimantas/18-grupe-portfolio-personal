import { validateBlogHeader } from './validateBlogHeader.js';
import { capitalFirstLetter } from './capitalFirstLetter.js';
import { blogData } from '../../data/blogData.js';
import { validateBlogContent } from './validateBlogContent.js';

function validateBlog() {
    return validateBlogHeader(blogData),
        capitalFirstLetter(blogData),
        validateBlogContent(blogData);
}


export { validateBlog }