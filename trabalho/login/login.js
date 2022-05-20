function myFunction(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;

  if(user == "admin" && pass == "123"){
              window.location.href="cadastrar"
          alert("correct");
     }else{
      alert("Incorrect username or password");
      }
}