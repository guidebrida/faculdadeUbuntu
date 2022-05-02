function cadastrado(){
    alert("Cadastro do super heroi efetuado")
    window.location.href="../../index.html"
}

function guardaFormulario(){
    var listaHeroi = new Object();
    listaHeroi.nome = getElementById('nome');
    listaHeroi.Inteligencia = getElementById('Inteligencia');
    listaHeroi.Forca = getElementById('Forca');
    listaHeroi.Velocidade = getElementById('Velocidade');
    listaHeroi.Durabilidade = getElementById('Durabilidade');
    listaHeroi.Poder = getElementById('Poder');
    listaHeroi.Combate = getElementById('Combate');

    console.log(listaHeroi.valueOf());

}