const soma_numero = (numeros) => {
  let soma = 0
  numeros.map((numero) => {
    if(numero%2 === 0){
      soma += numero;
    }
  })
  return soma
}

console.log(soma_numero([1,2,3,4,5,6]))