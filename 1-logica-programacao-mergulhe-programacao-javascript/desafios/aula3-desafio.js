// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let contador1 = 1;

while (contador1 <= 10){    
    // console.log(contador1)
    alert(`contagem progressiva -> o numero atual é ${contador1}`)
    contador1++;
}


// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let contador2 = 10;

while (contador2 > 0){    
    // console.log(contador2)
    alert(`contagem regressiva -> o numero atual é ${contador2}`)
    contador2--;
}


// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let numContagemReg = prompt('Digite um numero para contagem regressiva');

while(numContagemReg >= 0){
    // console.log(numContagemReg)
    alert(`contagem regressiva -> o numero atual é ${numContagemReg}`)
    numContagemReg--;
}


// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numContagemProg = prompt('Digite um numero para contagem progressiva');
let contador = 0;

while (numContagemProg >= contador){    
    // console.log(contador);
    alert(`contagem progressiva -> o numero atual é ${contador}`)
    contador++;
}