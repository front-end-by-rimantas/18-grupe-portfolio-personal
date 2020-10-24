import { blogsHeaderData } from '../../data/blogsHeaderData.js';

function isValidBlogsHeader(title, displayErrors = false) {
    let errors = [];
    if (typeof title !== 'object' || title === null) {
        if (displayErrors) {
            errors.push('ERROR: blog\'o antraste turi buti objektas ');
            console.error(errors);
        }
        return false;
    }

    //blogs' title validation
    if (typeof title.header !== 'string') {
        errors.push('ERROR: blog\'o pavadinimas turi buti tekstinis');
    } else {
        if (title.header === '') {
            errors.push('ERROR: blog\'o pavadinimas negali buti tuscias');
        }
        if (title.header.length > 50) {
            errors.push('ERROR: blog\'o pavadinimas negali virsyti 50 simboliu');
        }
    }
    // blogs' title description validation
    if (typeof title.description !== 'string') {
        errors.push('ERROR blog\'o aprasymas turi buti tekstas');
        return;
    }

    if (title.description === '') {
        errors.push('ERROR blog\'o aprasymas neturi buti tusciass');
    }
    if (title.description.length > 200) {
        errors.push('ERROR blog\'o aprasymas negali virsyti 200 simboliu');
    }

    if (errors.length > 0) {
        for (let i = 0; i < errors.length; i += 1) {
            console.error(errors[i]);
        }
    }
}

export { isValidBlogsHeader }