import { blogsHeaderData } from '../../data/blogsHeaderData.js';

function isValidCapitalLetter(sentence) {
    sentence = sentence.header;
    const words = sentence.split(' ');
    let errors = [];
    for (let i = 0; i < words.length; i += 1) {
        let firstLetter = words[i][0];
        if (firstLetter !== firstLetter.toUpperCase()) {
            errors.push(`ERROR: the first letter of the word "${words[i]}" must be capital`);
        }
    }
    if (errors.length > 0) {
        return console.error(errors);
    } else {
        return true;
    }
}
export { isValidCapitalLetter }