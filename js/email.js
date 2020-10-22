function verifyEmail() {
    console.log(document.getElementById('email').value);    
    document.getElementById('alert-message').innerHTML = document.getElementById('email').value;

}
export { verifyEmail };