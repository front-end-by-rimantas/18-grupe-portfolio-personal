function verifyEmail() {
    console.log(document.getElementById('email').value);
    document.getElementById('alert-message').innerHTML = document.getElementById('email').value;
    document.getElementById("email-submit").addEventListener('click', function () {
        // ivesti el pasto adresa; 
        console.log('Enter e-mail address');

        let eMailAddress = document.getElementById('email').value;
        console.log(eMailAddress);


        if (eMailAddress === '') {
            console.log("ERROR: El pasto adresas negali buti tuscias");
            document.getElementById("alert-message").innerText = "The e-mail address can not be empty";
            return;
        }




        if (!eMailAddress.includes(".")) {
            console.log("nera tasko");
            document.getElementById("alert-message").innerText = "The e-mail address must contain dot";
            return;
        }

        if (!eMailAddress.includes("@")) {
            console.log("nera kilpeles");
            document.getElementById("alert-message").innerText = "The e-mail address must contain ampersand";
            return;
        }
    });

    // for (let i = 0; i < eMailAddress.length; i++) {

    //     if (eMailAddress[i] === '.') {
    //         isPoint = true;
    //     }


    //     if (!isPoint) {
    //         console.log("ERROR: el pasto adrese privalo buti bent vienas taskas");
    //         break;
    //     }

    // }

    // turi buti @


    /*  for (let j = 0; j < eMailAddress.lenght; j++) {
 
          if (eMailAddress[j] === '@') {
              isAmpersand = true;
          }
      }
 
      if (!isAmpersand) {
 
          console.log("ERROR: el pasto adrese privalo buti @");
 
 
      }
 
 
  });
 
  // el. pasto adresas negali buti tuscias
 
 
 
 
 
  // turi buti bent vienas taskas
 
 
 
*/

}

export { verifyEmail };