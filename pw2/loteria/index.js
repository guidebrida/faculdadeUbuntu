var loteriaMsg = "o sorteio dos numeros da loterias são ";
function bilhete() {
	var input = document.getElementsByName('powerball[]');

	for (var i = 0; i < input.length; i++) {
		var a = input[i];
		loteriaMsg = loteriaMsg + a.value + " ";
	}

	document.getElementById("numerosEscolhidos").innerHTML = loteriaMsg;
	return bilhete;
}

function generate(quantidadeDeNumeros ,maiorNumero) {
  
  var maiorNumero= 60;
  var quantidadeDeNumeros = 6;
	var numeros = [];
	for(var i = 0; i < quantidadeDeNumeros; i++) {
		var add = true;
		var numeroAleatorio = Math.floor(Math.random() * maiorNumero) + 1;
		for(var y = 0; y < maiorNumero; y++) {
			if(numeros[y] == numeroAleatorio) {
				add = false;
			}
		}
		if(add) {
			numeros.push(numeroAleatorio);
		} else {
			i--;
		}
	}
  
	var maiornumero = 0;
	for(var m = 0; m < numeros.length; m++) {
		for(var n = m + 1; n < numeros.length; n++) {
			if(numeros[n] < numeros[m]) {
				maiornumero = numeros[m];
				numeros[m] = numeros[n];
				numeros[n] = maiornumero;
			}
		}
	}
  
	document.getElementById("numeros").innerHTML = numeros.join(" - ");

}
function ganhador(){


		var loteriaMsg = "voce não ganhou na loteria voce esta rico!!!!!!!!!!!!! ";
		document.getElementById("gg").innerHTML = loteriaMsg;

	
}
