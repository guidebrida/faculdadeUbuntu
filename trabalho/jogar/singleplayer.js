var cartaBranca = {
        nome: "",
        atributos: {
            Inteligência: "",
            Força: "",
            Velocidade: "",
            Durabilidade: "",
            Poder: "",
            Combate: ""
        }
};

let baralho = []

const request = () => {
    axios
      .get('https://akabab.github.io/superhero-api/api/all.json')
      .then((res) => {
          console.log(res.data.length);
          let array = [];
          for (let index = 0; index < 10; index++) {
              let numero_aleatorio = Math.floor(Math.random() * 562);
              array.push(res.data[numero_aleatorio]);
          }
          baralho = [
              carta1 = {
                  nome: array[0].name,
                  atributos: {
                      Inteligência: array[0].powerstats.intelligence,
                      Força: array[0].powerstats.strength,
                      Velocidade: array[0].powerstats.speed,
                      Durabilidade: array[0].powerstats.durability,
                      Poder: array[0].powerstats.power,
                      Combate: array[0].powerstats.combat
                  }
              },
              carta2 = {
                  nome: array[1].name,
                  atributos: {
                      Inteligência: array[1].powerstats.intelligence,
                      Força: array[1].powerstats.strength,
                      Velocidade: array[1].powerstats.speed,
                      Durabilidade: array[1].powerstats.durability,
                      Poder: array[1].powerstats.power,
                      Combate: array[1].powerstats.combat
                  }
              },
              carta3 = {
                  nome: array[2].name,
                  atributos: {
                      Inteligência: array[2].powerstats.intelligence,
                      Força: array[2].powerstats.strength,
                      Velocidade: array[2].powerstats.speed,
                      Durabilidade: array[2].powerstats.durability,
                      Poder: array[2].powerstats.power,
                      Combate: array[2].powerstats.combat
                  }
              },
              carta4 = {
                  nome: array[3].name,
                  atributos: {
                      Inteligência: array[3].powerstats.intelligence,
                      Força: array[3].powerstats.strength,
                      Velocidade: array[3].powerstats.speed,
                      Durabilidade: array[3].powerstats.durability,
                      Poder: array[3].powerstats.power,
                      Combate: array[3].powerstats.combat
                  }
              },
              carta5 = {
                  nome: array[4].name,
                  atributos: {
                      Inteligência: array[4].powerstats.intelligence,
                      Força: array[4].powerstats.strength,
                      Velocidade: array[4].powerstats.speed,
                      Durabilidade: array[4].powerstats.durability,
                      Poder: array[4].powerstats.power,
                      Combate: array[4].powerstats.combat
                  }
              },
              carta6 = {
                  nome: array[5].name,
                  atributos: {
                      Inteligência: array[5].powerstats.intelligence,
                      Força: array[5].powerstats.strength,
                      Velocidade: array[5].powerstats.speed,
                      Durabilidade: array[5].powerstats.durability,
                      Poder: array[5].powerstats.power,
                      Combate: array[5].powerstats.combat
                  }
              },
              carta7 = {
                  nome: array[6].name,
                  atributos: {
                      Inteligência: array[6].powerstats.intelligence,
                      Força: array[6].powerstats.strength,
                      Velocidade: array[6].powerstats.speed,
                      Durabilidade: array[6].powerstats.durability,
                      Poder: array[6].powerstats.power,
                      Combate: array[6].powerstats.combat
                  }
              },
              carta8 = {
                  nome: array[7].name,
                  atributos: {
                      Inteligência: array[7].powerstats.intelligence,
                      Força: array[7].powerstats.strength,
                      Velocidade: array[7].powerstats.speed,
                      Durabilidade: array[7].powerstats.durability,
                      Poder: array[7].powerstats.power,
                      Combate: array[7].powerstats.combat
                  }
              },
              carta9 = {
                  nome: array[8].name,
                  atributos: {
                      Inteligência: array[8].powerstats.intelligence,
                      Força: array[8].powerstats.strength,
                      Velocidade: array[8].powerstats.speed,
                      Durabilidade: array[8].powerstats.durability,
                      Poder: array[8].powerstats.power,
                      Combate: array[8].powerstats.combat
                  }
              },
              carta10 = {
                  nome: array[9].name,
                  atributos: {
                      Inteligência: array[9].powerstats.intelligence,
                      Força: array[9].powerstats.strength,
                      Velocidade: array[9].powerstats.speed,
                      Durabilidade: array[9].powerstats.durability,
                      Poder: array[9].powerstats.power,
                      Combate: array[9].powerstats.combat
                  }
              }
          ]
      });
  };

  request();

var deckJogador = [];
var deckMaquina = [];
var cartaJogador;
var cartaMaquina;
var ganhador = 0;
var placar = [0,0];

function iniciar(){
    divideCartas();
    sortear();
    document.getElementById("mensagem").innerHTML = "Escolha um atributo";
    document.getElementById("iniciar").disabled = true;
    document.getElementById("joga").disabled = false;
    exibirAtributos();
    document.getElementById("placar").innerHTML = `Placar ${placar[0]} x ${placar[1]}`;
}

function divideCartas() {
    let baralhoAux = baralho.slice();
    let carta;
  
    deckJogador = [];
    deckMaquina = [];
  
    while (baralhoAux.length > 0) {
        carta = parseInt(Math.random() * baralhoAux.length);
        deckJogador.push(baralhoAux[carta]);
        baralhoAux.splice(carta, 1);
    
        carta = parseInt(Math.random() * baralhoAux.length);
        deckMaquina.push(baralhoAux[carta]);
        baralhoAux.splice(carta, 1);
    }
}

function sortear(){
    ganhador = vencedor();
    if(ganhador == 0){
        let numeroCartaJogador = parseInt(Math.random() * deckJogador.length);
        let numeroCartaMaquina = parseInt(Math.random() * deckMaquina.length);
        cartaJogador = deckJogador[numeroCartaJogador];
        cartaMaquina = deckMaquina[numeroCartaMaquina];
        exibirAtributos();
        limpaCartaMaquina();
        document.getElementById("sorteio").disabled = true;
        document.getElementById("joga").disabled = false;
        document.getElementById("mensagem").innerHTML = "Escolha um atributo";
    }else{
        placar = [0,0];
        cartaJogador = null;
        cartaMaquina = null;
    }
}


function exibirCartaMaquina(){
    let nome = `<p class="nomeCarta">${cartaMaquina.nome}</p>`;
    let opcoes = document.getElementById("atributos-maquina");
    let texto = "";
    for(let atributo in cartaMaquina.atributos){
        texto+= "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaMaquina.atributos[atributo] + "</p>";
    }
    opcoes.innerHTML = nome + texto;
}

function limpaCartaMaquina(){
    let nome = `<p class="nomeCarta">${cartaBranca.nome}</p>`;
    let opcoes = document.getElementById("atributos-maquina");
    let texto = "";
    for(let atributo in cartaBranca.atributos){
        texto+= "<p type='text' name='atributo' value='" + atributo + "'>" + " " + "</p>";
    }
    opcoes.innerHTML = nome + texto;
}

function exibirAtributos(){
    let opcoes = document.getElementById("opcoes-atributos");
    let nome = `<p class="nomeCarta">${cartaJogador.nome}</p>`;
    let texto = "";
    for(let atributo in cartaJogador.atributos){
        texto+= "<input type='radio' name='atributo' value='" + atributo + "' checked>" + atributo + ": " + cartaJogador.atributos[atributo] + "<br>";
    }
    opcoes.innerHTML = nome + texto;
}

function atributoSelecionado(){
    let pegaAtributo = document.getElementsByName("atributo");
    for(let i = 0; i < pegaAtributo.length; i++){
        if(pegaAtributo[i].checked){
            console.log(pegaAtributo[i].value)
            return pegaAtributo[i].value;
        }
    }
}

function jogar(){
    exibirCartaMaquina();
    let atributo = atributoSelecionado();
    console.log(atributo)
    let resultado = document.getElementById("mensagem");
    let valorCartaJogador = cartaJogador.atributos[atributo];
    let valorCartaMaquina = cartaMaquina.atributos[atributo];
    document.getElementById("sorteio").disabled = false;
    document.getElementById("joga").disabled = true;

    if(valorCartaJogador > valorCartaMaquina){
        resultado.innerHTML = "Você venceu";
        placar[0]++;
    }else if(valorCartaJogador < valorCartaMaquina){
        resultado.innerHTML = "Você perdeu";
        placar[1]++;
    }else if(valorCartaJogador === valorCartaMaquina){
        resultado.innerHTML = "Empate!"
    }
    document.getElementById("placar").innerHTML = `Placar ${placar[0]} x ${placar[1]}`;
}

function vencedor(){
    if(placar[0] == 10){
        document.getElementById("mensagem").innerHTML = "Parabéns você venceu!"
        document.getElementById("joga").disabled = true;
        document.getElementById("sorteio").disabled = true;
        document.getElementById("iniciar").disabled = false;
        return true;
    }else if(placar[1] == 10){
        document.getElementById("mensagem").innerHTML = "Infelizmente você perdeu!"
        document.getElementById("joga").disabled = true;
        document.getElementById("sorteio").disabled = true;
        document.getElementById("iniciar").disabled = false;
        return true;
    }else{
        return false;
    }
}