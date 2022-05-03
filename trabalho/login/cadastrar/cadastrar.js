function cadastrado(){
    alert("Cadastro do super heroi efetuado")
    window.location.href="../../index.html"
}

function guardaFormulario(){
    var listaHeroi = new Object();
<<<<<<< HEAD
    listaHeroi.Nome = document.getElementById('Nome').value;
    listaHeroi.Inteligencia = document.getElementById('Inteligencia').value;
    listaHeroi.Forca = document.getElementById('Forca').value;
    listaHeroi.Velocidade = document.getElementById('Velocidade').value;
    listaHeroi.Durabilidade = document.getElementById('Durabilidade').value;
    listaHeroi.Poder = document.getElementById('Poder').value;
    listaHeroi.Combate = document.getElementById('Combate').value;
=======
    listaHeroi.nome = getElementById('nome');
    listaHeroi.Inteligencia = getElementById('Inteligencia');
    listaHeroi.Forca = getElementById('Forca');
    listaHeroi.Velocidade = getElementById('Velocidade');
    listaHeroi.Durabilidade = getElementById('Durabilidade');
    listaHeroi.Poder = getElementById('Poder');
    listaHeroi.Combate = getElementById('Combate');
>>>>>>> b323ab2a58a298d0a9aaa9dcfe7254880029e232

    console.log(listaHeroi.valueOf());

}