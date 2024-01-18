alert('Boas vindas ao jogo do número secreto');

let numeroMinimo = 1;
let numeroMaximo = 100;


// let numeroSecreto = 5;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
// console.log(numeroSecreto);

let chute;
let tentativas = 1;

while (chute != numeroSecreto){
    let chute = prompt(`Escolha um número entre ${numeroMinimo} e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        // alert('Isso ai! Você descobriu o número secreto' + numeroSecreto); //com operador de adicao
        // alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} na ${tentativas} tentativa` ); //com template string
        break;
    } else if(chute > numeroSecreto){
        alert(`o numero secreto é menor que ${chute}`);
    } else {
        alert(`o numero secreto é maior que ${chute}`);
    }
    //tentativas = tentativas +1;
    tentativas++;
}
// if (tentativas > 1){
//   alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} tentativas` ); //plural
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} tentativa` ); //singular
// }

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa }` ); //plural


