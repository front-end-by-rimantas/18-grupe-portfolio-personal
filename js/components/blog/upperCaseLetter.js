//function checks if all the letters written in a word are uppercase

function upperCaseLetter(sakinys) {
    let wordsArray = sakinys.split(' ');
    for (let i = 0; i < wordsArray.length; i += 1) {
        let oneWord = wordsArray[i];
        for (let k = 0; k < oneWord.length; k += 1) {
            if (oneWord[k] === oneWord[k].toUpperCase()) {
                return true;
            } else {
                return false;
            }
        }
    }
}

export { upperCaseLetter }
