/*comeco do codigo*/
function pTuristico() {
    alert ("É xique-xique BH cara só tem um parque aquatico.");
    let opniao = prompt(" agora voce sera direcionado para o site de compra da passagem mas antes, dijite sua opniao sobre xique-xique");
    console.log("opniao sobre xique-xique", opniao);
    window.location.href = "https://www.buser.com.br/destinos/pontos-turisticos/ba/xique-xique";
}
function pTuristico2() {
    alert ("nao peça taxi la");
    let opniao = prompt(" agora voce sera direcionado para o site de compra da passagem mas antes, dijite sua opniao sobre uberlandia");
    console.log("opniao sobre uberlandia", opniao);
    window.location.href = "https://www.kayak.com.br/voos/Brasil-BR0/Uberlandia-Eduardo-Gomes-UDI?sck=SEM&skipapp=true&gclid=EAIaIQobChMIntug3Jf9iQMVCh5ECB0BrTe8EAAYAiAAEgJRevD_BwE";
}
function pTuristico3() {
    alert ("cuidado com os dinossauros");
    let opniao = prompt("agora voce sera direcionado para o site de compra da passagem mas antes, dijite sua opniao sobre o acre");
    console.log("opniao sobre o acre", opniao);
    window.location.href = "https://www.kayak.com.br/flights?lang=pt&tags=d%3Ad_r-59&skipapp=true&gclid=EAIaIQobChMIibLe-5r9iQMV6yhECB2JEhwDEAAYAyAAEgLqcvD_BwE"
}
/*fim do codigo*/

/*comeco do exercicio 6*/
function cnh() {
    let nomeDoUsuario
    while (true) {
        nomeDoUsuario = prompt("por favor dijite seu nome real: ");
        let regexNome = /^[A-Za-zÀ-ÿ\S\-]+$/;

        if (nomeDoUsuario ==="") {
            alert("por favor insira um nome real: ");
        } else if (!regexNome.test(nomeDoUsuario)) {
            alert("por favor, insira um nome valido (somente letras, espacos e hifens). ");
        } else {
            break;
        }
    }
    console.log("o nome do usuario é: " + nomeDoUsuario);

    let idadeDoUsuario
    while (true) {
        idadeDoUsuario = prompt("dijite sua idade: ");

        if (idadeDoUsuario ==="" || isNaN(idadeDoUsuario) || idadeDoUsuario <=0 ) {
            alert("porvfavor insira uma informacao valida");

        } else {
            idadeDoUsuario = parseInt(idadeDoUsuario);
            break;
        }
    }
    console.log("a idade do usuario é: " + idadeDoUsuario);

    if (idadeDoUsuario >= 18) {
        alert(nomeDoUsuario + ", voce esta apto a tirar o seu cnh ");
    } else {
        alert (nomeDoUsuario + "voce nao esta apto a tirar o seu cnh ");
    }
}
/*fim do codigo*/
/*comeco do codigo */

function jogo(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let numeroSecreto =  Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("o numero é; " + numeroSecreto);
    let palpite = prompt("escolha um numero aleatorio em um e dez: ");
    palpite = Number(palpite);

    if (isNaN(palpite)) {
        alert("voce precisa colocar um numero valido ");
    } else {
    if ( palpite === numeroSecreto) {
        alert("acerto mizerave ");
    } else{
        alert ("eerrooouuuu ");
    }
    }
}
/*comeco do codigo continuo */
function jogoV2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let numeroSecreto =  Math.floor(Math.random() * (max - min + 1)) + min;
    let tentativas = 0;
    let tentativasLimite = 10;
    do {
        numeroDijitado = parseInt(prompt("adivinhe o numero secreto entra 1 e 10. "));
        if (isNaN(numeroDijitado) || numeroDijitado < 1 || numeroDijitado > 10) {
            alert("por favor insira um numero valido de 1 ate 10 ");
            continue;
        }

        tentativas++;

        if (numeroDijitado < numeroSecreto) {
            alert("o numero é maior! tente novamente ");
        } else if (numeroDijitado > numeroSecreto) {
            alert("o numero é menor! ten5te novamente ")
        }
        else {
            alert(`parabens! voce acertou o numero secreto em ${tentativas}.`);
            break;
        }
        if (tentativas === tentativasLimite) {
            alert(`voce atinjiu o limite de tentativas, o numero secreto era ${tentativas}`);
            break;
        }
    } while (numeroDijitado !== numeroSecreto);

}
/*comeco exercicio 8 */

let numeroSecreto1 = Math.floor(Math.random() * 10) + 1;
console.log(numeroSecreto1);

function jogos1() {
    let inputPalpite = document.getElementById("palpite1");
    let mensagem = document.getElementById("texto");

    let palpite = parseInt(inputPalpite.value);

    if (palpite === numeroSecreto1) {
        mensagem.textContent = "Parabéns, você acertou!";
    } else if (palpite < numeroSecreto1) {
        mensagem.textContent = "O número é maior.";
    } else {
        mensagem.textContent = "O número é menor.";
    }

    inputPalpite.value = "";
    inputPalpite.focus();
}

// Aqui, adicionamos o ouvinte de evento apenas uma vez.
document.getElementById("btn33").addEventListener("click", jogos1);
