import { capitalFirstLetter } from './capitalFirstLetter.js';

function validateBlogHeader(title) {
    let errors = [];
    if (typeof title !== 'object' || title === null) {
        errors.push('ERROR: blog\'o antraste turi buti objektas ');
        console.error(errors);
        return false;
    }
    //blogs' title validation
    if (typeof title.header.header !== 'string') {
        errors.push('ERROR: blog\'o pavadinimas turi buti tekstinis');
    } else {
        if (title.header.header === '') {
            errors.push('ERROR: blog\'o pavadinimas negali buti tuscias');
        }
        if (title.header.header.length > 50) {
            errors.push('ERROR: blog\'o pavadinimas negali virsyti 50 simboliu');
        }
        for (let i = 0; i < title.header.header.split(' ').length; i += 1) {
            if (capitalFirstLetter(title.header.header.split(' ')[i]) === false) {
                errors.push('ERROR: pavadinimo zodziai turi prasidedi is didziosios raides');
            }
        }
    }
    // blogs' title description(paragraph) validation
    if (typeof title.header.description !== 'string') {
        errors.push('ERROR blog\'o aprasymas turi buti tekstas');
        return;
    }
    if (title.header.description === '') {
        errors.push('ERROR blog\'o aprasymas neturi buti tusciass');
    }
    if (title.header.description.length > 200) {
        errors.push('ERROR blog\'o aprasymas negali virsyti 200 simboliu');
    }
    if (errors.length > 0) {
        for (let i = 0; i < errors.length; i += 1) {
            console.error(errors[i]);
        }
    }
}

export { validateBlogHeader }