//TODO
//create blog content validation
import { blogData } from '../../data/blogData.js';

function validateBlogContent(content, displayErrors = false) {
    let errors = [];
    if (typeof content !== 'object' || content === null) {
        if (displayErrors) {
            errors.push('ERROR: blog\'o turinys turi buti objektas ');
            console.error(errors);
        }
        return false;
    }
    let turinys = content.content.data;
    //blog's content validation
    if (typeof turinys.id !== 'number') {
        errors.push('ERROR: id turi buti skaicius');
    }
    if (turinys.id === '') {
        errors.push('ERROR: id negali buti tuscias');
    }
    if (typeof turinys.image !== 'object') {
        errors.push('ERROR: nuotrauka turi buti objektas');
    }
    if (turinys.image === '') {
        errors.push('ERROR: nuotrauka negali buti tuscia');
    }
    if (typeof turinys.author !== 'object' || turinys.author === '') {
        errors.push('ERROR: autoriaus duomenys turi buti objektas');
    }



    if (typeof turinys.header !== 'string') {
        errors.push('ERROR: blog\'o pavadinimas turi buti tekstinis');
    } else {
        if (turinys.header === '') {
            errors.push('ERROR: blog\'o pavadinimas negali buti tuscias');
        }
        if (turinys.header.length > 50) {
            errors.push('ERROR: blog\'o pavadinimas negali virsyti 50 simboliu');
        }
    }
    // blog's content description validation
    if (typeof turinys.description !== 'string') {
        errors.push('ERROR blog\'o aprasymas turi buti tekstas');
        return;
    }

    if (turinys.description === '') {
        errors.push('ERROR blog\'o aprasymas neturi buti tusciass');
    }
    if (turinys.description.length > 200) {
        errors.push('ERROR blog\'o aprasymas negali virsyti 200 simboliu');
    }

    if (errors.length > 0) {
        for (let i = 0; i < errors.length; i += 1) {
            console.error(errors[i]);
        }
    }
}

export { validateBlogContent }