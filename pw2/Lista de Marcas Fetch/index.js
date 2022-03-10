var carros = []
var modelos = []
var datalist = document.querySelector("#listaMarcas");

var api = fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')


var dado = api.then(function(api) {
    return api.json()
})

dado.then(function(marcas){

    for(i = 0; i < marcas.length; i++) {
        carros.push(marcas)
        var marcasDataList = document.createElement("option")
        marcasDataList.textContent = marcas[i].nome;
        marcasDataList.value = marcas[i].codigo;
        datalist.appendChild(marcasDataList);
    }
})


function getModelos(value) {
    let codigo = value;
    console.log(codigo)
    var apiModeloCarro = fetch('https://parallelum.com.br/fipe/api/v2/carros/brands/'+ codigo + '/models')
    var lista = document.getElementById("idListaModelos")
    lista.innerHTML = ''
    
    apiModeloCarro.then(function(apiModeloCarro) {
       var dado = apiModeloCarro.json()
        dado.then(function (carro) {
            
            for(let i in carro){
                var modelosDataList = document.createElement("li")
                modelosDataList.textContent = carro[i].name;
                lista.appendChild(modelosDataList)
                
            }
        })
    })
    dado.then(function(modelos){
})
}
