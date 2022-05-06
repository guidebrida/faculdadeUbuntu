// function cadastrado(){
//     alert("Cadastro do super heroi efetuado")
//     window.location.href="../../index.html"
// }

function guardaFormulario(){
    var listaHeroi = new Object();
    listaHeroi.Nome = document.getElementById('Nome').value;
    listaHeroi.Inteligencia = document.getElementById('Inteligencia').value;
    listaHeroi.Forca = document.getElementById('Forca').value;
    listaHeroi.Velocidade = document.getElementById('Velocidade').value;
    listaHeroi.Durabilidade = document.getElementById('Durabilidade').value;
    listaHeroi.Poder = document.getElementById('Poder').value;
    listaHeroi.Combate = document.getElementById('Combate').value;

    console.log(listaHeroi);

    try{
        axios.post('/arquivo', listaHeroi)
    }catch(error){
        console.log(error)
    }
    
}

