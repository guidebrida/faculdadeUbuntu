var api =  fetch("https://akabab.github.io/superhero-api/api/all.json")

var dado = api.then(function(api) {
    return api.json()
})

dado.then(function(superHerois) {
console.log(superHerois)
})
