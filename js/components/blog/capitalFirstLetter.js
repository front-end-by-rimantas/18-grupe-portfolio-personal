//function checks if the word starts with a capital letter
function capitalFirstLetter(sakinys) {
    if (sakinys[0] === sakinys[0].toUpperCase()) {
        return true;
    } else {
        return false;
    }
}
export { capitalFirstLetter }