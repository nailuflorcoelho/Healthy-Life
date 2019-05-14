firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
        var email_verified = user.emailVerified;
      document.getElementById("user_para").innerHTML = "Bem-vindo :" + email_id ;
        document.getElementById("user_v").innerHTML =
          "Verificação email: " + email_verified;
    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function create_account(){
        var nome = document.getElementById('nome').value;
        var nomeu = document.getElementById('nomeu').value;
        var email = document.getElementById('email').value;
        var senha = document.getElementById('senha').value;
        var senhac = document.getElementById('senhac').value;       

        firebase.database().ref('users/'+nome).set({
            nome: nome,
            nomeu: nomeu,
            email: email,
            senha: senha,
            senhac: senhac
        });   
        
              firebase.auth().createUserWithEmailAndPassword(email, senha).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
  
            }


function logout(){
  firebase.auth().signOut();
}


function send_verification(){
    
            var user = firebase.auth().currentUser;

        user.sendEmailVerification().then(function() {
          // Email sent.
            window.alert("Verifiaction Sent");
        }).catch(function(error) {
          // An error happened.
            window.alert("Error : " + error.message);
        });
    
}