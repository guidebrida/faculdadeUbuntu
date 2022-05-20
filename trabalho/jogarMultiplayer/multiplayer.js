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
var deckJogador2 = [];
var cartaJogador;
var cartaJogador2;
var ganhador = 0;
var vencedorRodada = true;
var condicaoEmpate = 0

function iniciar(){
    divideCartas();
    console.log(deckJogador)
    console.log(deckJogador2)
    proximaRodada();
    document.getElementById("mensagem").innerHTML = "Escolha um atributo";
    document.getElementById("iniciar").disabled = true;
    document.getElementById("joga").disabled = false;
    exibirAtributos();
    document.getElementById("placar").innerHTML = `Placar ${deckJogador.length} x ${deckJogador2.length}`;
}

function divideCartas() {
    let baralhoAux = baralho.slice();
    let carta;
  
    deckJogador = [];
    deckJogador2 = [];
  
    while (baralhoAux.length > 0) {
        carta = parseInt(Math.random() * baralhoAux.length);
        deckJogador.push(baralhoAux[carta]);
        baralhoAux.splice(carta, 1);
    
        carta = parseInt(Math.random() * baralhoAux.length);
        deckJogador2.push(baralhoAux[carta]);
        baralhoAux.splice(carta, 1);
    }
}

function proximaRodada(){
    ganhador = vencedor();
    if(ganhador == 0){
        cartaJogador = deckJogador[0];
        cartaJogador2 = deckJogador2[0];
        if(vencedorRodada){
            exibirCartaJogador();
            exibirAtributos();
            limpaCartaJogador2()
        }else{
            exibircartaJogador2();
            exibirAtributosJogador2();
            limpaCartaJogador()
        }
        document.getElementById("proximaRodada").disabled = true;
        document.getElementById("joga").disabled = false;
        document.getElementById("mensagem").innerHTML = "Escolha um atributo";
    }else{
        cartaJogador = null;
        cartaJogador2 = null;
    }
}

function exibirCartaJogador(){
    let carta = document.getElementById("areaJogador");
    carta.style.backgroundImage = `url(${cartaJogador.imagem})`;
}

function exibircartaJogador2(){
    let maquina = document.getElementById("areaMaquina");
    maquina.style.backgroundImage = `url(${cartaJogador2.imagem})`; 
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

function exibirAtributosJogador2(){
    let opcoes = document.getElementById("atributos-maquina");
    let nome = `<p class="nomeCarta">${cartaJogador2.nome}</p>`;
    let texto = "";
    for(let atributo in cartaJogador2.atributos){
        texto+= "<input type='radio' name='atributo' value='" + atributo + "' checked>" + atributo + ": " + cartaJogador2.atributos[atributo] + "<br>";
    }
    opcoes.innerHTML = nome + texto;
}

function atributoSelecionado(){
    let pegaAtributo = document.getElementsByName("atributo");
        for(let i = 0; i < pegaAtributo.length; i++){
            if(pegaAtributo[i].checked){
                return pegaAtributo[i].value;
            }
        }
}

function limpaCartaJogador() {
    let revelar = document.getElementById("areaJogador");
    revelar.style.backgroundImage = `${cartaBranca.imagem}`;
    let jogador2 = document.getElementById("areaJogador");
    let nome = `<p class="nomeCarta">${cartaBranca.nome}</p>`;
    jogador2.style.backgroundImage = `url(${cartaBranca.imagem})`;
    let opcoes = document.getElementById("opcoes-atributos");
    let texto = "";
    for(let atributo in cartaBranca.atributos){
        texto+= "<p type='text' name='atributo' value='" + atributo + "'>" + " " + "</p>";
    }
    opcoes.innerHTML = nome + texto;
}

function limpaCartaJogador2(){
    let revelar = document.getElementById("areaMaquina");
    revelar.style.backgroundImage = `${cartaBranca.imagem}`;
    let jogador2 = document.getElementById("areaMaquina");
    let nome = `<p class="nomeCarta">${cartaBranca.nome}</p>`;
    jogador2.style.backgroundImage = `url(${cartaBranca.imagem})`;
    let opcoes = document.getElementById("atributos-maquina");
    let texto = "";
    for(let atributo in cartaBranca.atributos){
        texto+= "<p type='text' name='atributo' value='" + atributo + "'>" + " " + "</p>";
    }
    opcoes.innerHTML = nome + texto;
}

function jogar(){
    if(vencedorRodada){
        exibircartaJogador2();
        exibirAtributosJogador2();
    }else{
        exibirCartaJogador();
        exibirAtributos();
    }
    let atributo = atributoSelecionado();
    let resultado = document.getElementById("mensagem");
    let valorCartaJogador = cartaJogador.atributos[atributo];
    let valorcartaJogador2 = cartaJogador2.atributos[atributo];
    document.getElementById("proximaRodada").disabled = false;
    document.getElementById("joga").disabled = true;

    if(valorCartaJogador > valorcartaJogador2){
        vencedorRodada = true
        resultado.innerHTML = "Jogador 1 venceu";
        deckJogador.push(deckJogador2[0])
        deckJogador2.splice(0,1)
    }else if(valorCartaJogador < valorcartaJogador2){
        vencedorRodada = false
        resultado.innerHTML = "Jogador 2 Venceu";
        deckJogador2.push(deckJogador[0])
        deckJogador.splice(0,1)
    }else if(valorCartaJogador === valorcartaJogador2){
        if(vencedorRodada){
            condicaoEmpate = 1
        }else{
            condicaoEmpate = 2
        }
        resultado.innerHTML = "Empate!"
    }
    document.getElementById("placar").innerHTML = `Placar ${deckJogador.length} x ${deckJogador2.length}`;
    trocarCartas()
    console.log(deckJogador)
    console.log(deckJogador2)
}

function trocarCartasJogador(){
    let aux = []
    aux[0] = deckJogador[0]
        for(let i = 0; i < deckJogador.length; i++){
            if(deckJogador.length !== i+1){
                deckJogador[i] = deckJogador[i+1]
            }else{
                deckJogador[i] = aux[0] 
            }
        }
}
function trocarCartasJogador2(){
    let aux = []
    aux[0] = deckJogador2[0]
        for(let i = 0; i < deckJogador2.length; i++){
            if(deckJogador2.length !== i+1){
                deckJogador2[i] = deckJogador2[i+1]
            }else{
                deckJogador2[i] = aux[0] 
            }
        }
}

function trocarCartas(){
    if(vencedorRodada){
        trocarCartasJogador()
        if(condicaoEmpate == 1){
            trocarCartasJogador2()
            condicaoEmpate = 0
        }
    }else{
        trocarCartasJogador2()
        if (condicaoEmpate == 2) {
            trocarCartasJogador()
            condicaoEmpate = 0
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
    }else if(deckJogador2.length == 10){
        document.getElementById("mensagem").innerHTML = "Infelizmente você perdeu!"
        document.getElementById("joga").disabled = true;
        document.getElementById("proximaRodada").disabled = true;
        document.getElementById("iniciar").disabled = false;
        return true;
    }else{
        return false;
    }
}