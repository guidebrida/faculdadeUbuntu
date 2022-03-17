var carros = []
var modelos = []
var datalist = document.querySelector("#listaSuperHero");
var api = fetch('https://gist.github.com/mariodev12/a923f2b651a005ca3ca7f851141efcbc.js')


var dado = api.then(function(api) {
    return api.json()
})

dado.then(function(superHero){

    for(i = 0; i < superHero.length; i++) {
        carros.push(superHero)
        var superHeroDataList = document.createElement("option")
        superHeroDataList.textContent = superHero[i].nome;
        superHeroDataList.value = superHero[i].codigo;
        superHeroDataList.appendChild(superHeroDataList);
    }
})