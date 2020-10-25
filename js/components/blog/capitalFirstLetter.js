//function validates blog section's title & author's first name & last name
// if they are written with capital letter
function capitalFirstLetter(sakinys) {
    let k = 0;
    let errors = [];
    const sentence = [
        sakinys.header.header, //blog section's title
        sakinys.content.data[k].author.name, //author's first name
        sakinys.content.data[k].author.lastname, // author's last name
    ];

    for (; k < sentence.length; k += 1) {
        let words = sentence[k].split(' ');
        for (let i = 0; i < words.length; i += 1) {
            let firstLetter = words[i][0];
            if (firstLetter !== firstLetter.toUpperCase()) {
                errors.push(`ERROR: the first letter of the word "${words[i]}" must be capital`);
            }
        }
    }
    if (errors.length > 0) {
        return console.error(errors);
    } else {
        return true;
    }
}
export { capitalFirstLetter }