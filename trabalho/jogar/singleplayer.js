var cartaBranca = {
        nome: "",
        imagem: "",
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
                  imagem: array[0].images.lg,
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
                  imagem: array[1].images.lg,
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
                  imagem: array[2].images.lg,
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
                  imagem: array[3].images.lg,
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
                  imagem: array[4].images.lg,
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
                  imagem: array[5].images.lg,
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
                  imagem: array[6].images.lg,
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
                  imagem: array[7].images.lg,
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
                  imagem: array[8].images.lg,
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
                  imagem: array[9].images.lg,
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
var vencedorRodada = true;

function iniciar(){
    divideCartas();
    console.log(deckJogador)
    console.log(deckMaquina)
    proximaRodada();
    document.getElementById("mensagem").innerHTML = "Escolha um atributo";
    document.getElementById("iniciar").disabled = true;
    document.getElementById("joga").disabled = false;
    exibirAtributos();
    document.getElementById("placar").innerHTML = `Placar ${deckJogador.length} x ${deckMaquina.length}`;
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

function proximaRodada(){
    ganhador = vencedor();
    if(ganhador == 0){
        cartaJogador = deckJogador[0];
        cartaMaquina = deckMaquina[0];
        exibirCartaJogador();
        exibirAtributos();
        limpaCartaMaquina();
        document.getElementById("proximaRodada").disabled = true;
        document.getElementById("joga").disabled = false;
        if(!vencedorRodada){
            jogar()
        }else{
            document.getElementById("mensagem").innerHTML = "Escolha um atributo";
        }
    }else{
        cartaJogador = null;
        cartaMaquina = null;
    }
}

function exibirCartaJogador(){
    let carta = document.getElementById("areaJogador");
    carta.style.backgroundImage = `url(${cartaJogador.imagem})`;
}

function exibirCartaMaquina(){
    let maquina = document.getElementById("areaMaquina");
    let nome = `<p class="nomeCarta">${cartaMaquina.nome}</p>`;
    maquina.style.backgroundImage = `url(${cartaMaquina.imagem})`; 
    let opcoes = document.getElementById("atributos-maquina");
    let texto = "";
    for(let atributo in cartaMaquina.atributos){
        texto+= "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaMaquina.atributos[atributo] + "</p>";
    }
    opcoes.innerHTML = nome + texto;
}

function limpaCartaMaquina(){
    let revelar = document.getElementById("areaMaquina");
    revelar.style.backgroundImage = `${cartaBranca.imagem}`;
    let maquina = document.getElementById("areaMaquina");
    let nome = `<p class="nomeCarta">${cartaBranca.nome}</p>`;
    maquina.style.backgroundImage = `url(${cartaBranca.imagem})`;
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
    if(vencedorRodada){
        for(let i = 0; i < pegaAtributo.length; i++){
            if(pegaAtributo[i].checked){
                return pegaAtributo[i].value;
            }
        }
    }else{
        let i = Math.floor(Math.random() * 6)
        return pegaAtributo[i].value;
    }  
}

function jogar(){
    exibirCartaMaquina();
    let atributo = atributoSelecionado();
    let resultado = document.getElementById("mensagem");
    let valorCartaJogador = cartaJogador.atributos[atributo];
    let valorCartaMaquina = cartaMaquina.atributos[atributo];
    document.getElementById("proximaRodada").disabled = false;
    document.getElementById("joga").disabled = true;

    if(valorCartaJogador > valorCartaMaquina){
        vencedorRodada = true
        resultado.innerHTML = "Você venceu";
        deckJogador.push(deckMaquina[0])
        deckMaquina.splice(0,1)
    }else if(valorCartaJogador < valorCartaMaquina){
        vencedorRodada = false
        resultado.innerHTML = "Você perdeu";
        deckMaquina.push(deckJogador[0])
        deckJogador.splice(0,1)
    }else if(valorCartaJogador === valorCartaMaquina){
        resultado.innerHTML = "Empate!"
    }
    document.getElementById("placar").innerHTML = `Placar ${deckJogador.length} x ${deckMaquina.length}`;
    trocarCartas()
    console.log(deckJogador)
    console.log(deckMaquina)
}

function trocarCartas(){
    let aux = []
    if(vencedorRodada){
        aux[0] = deckJogador[0]
        for(let i = 0; i < deckJogador.length; i++){
            if(deckJogador.length !== i+1){
                deckJogador[i] = deckJogador[i+1]
            }else{
                deckJogador[i] = aux[0] 
            }
        }
    }else{
        aux[0] = deckMaquina[0]
        for(let i = 0; i < deckMaquina.length; i++){
            if(deckMaquina.length !== i+1){
                deckMaquina[i] = deckMaquina[i+1]
            }else{
                deckMaquina[i] = aux[0] 
            }
        }
    }
}

function vencedor(){
    if(deckJogador.length == 10){
        document.getElementById("mensagem").innerHTML = "Parabéns você venceu!"
        document.getElementById("joga").disabled = true;
        document.getElementById("proximaRodada").disabled = true;
        document.getElementById("iniciar").disabled = false;
        return true;
    }else if(deckMaquina.length == 10){
        document.getElementById("mensagem").innerHTML = "Infelizmente você perdeu!"
        document.getElementById("joga").disabled = true;
        document.getElementById("proximaRodada").disabled = true;
        document.getElementById("iniciar").disabled = false;
        return true;
    }else{
        return false;
    }
}