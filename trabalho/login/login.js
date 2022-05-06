function myFunction(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;
    

    try{
        axios.post('/login',{user,pass})
    }catch(error){
        console.log(error)
    }
  }