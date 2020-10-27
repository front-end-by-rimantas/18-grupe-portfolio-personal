import { validateBlog } from './validateBlog.js';
import { renderBlog } from './renderBlog.js';

function blogMain() {
    return validateBlog(), renderBlog();
}

export { blogMain }