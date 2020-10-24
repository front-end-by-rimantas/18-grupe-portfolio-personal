import { validateBlogHeader } from './validateBlogHeader.js';
import { capitalFirstLetter } from './capitalFirstLetter.js';
import { blogData } from '../../data/blogData.js';

function validateBlog() {
    return validateBlogHeader(blogData),
        capitalFirstLetter(blogData);
    //TODO 
    //validateBlogContent();
}


export { validateBlog }