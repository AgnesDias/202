// if(condição){
// comandos
// }eslse{
//   comandos
// }

// exercício fazer um login, se o usuário digitar a senha e o usuário corretos, uma msg de login efetuado com sucesso aparece.
// se o usuário digitaro user errado, dar uma mensagem de erro.
// se digitar a senha errada aparece a mensagem de senha errada.
// user:
// senha: Aviao321 

// @ let user= prompt("Digite Usuário"); let idade = Number(prompt("Digite Usuário"));
// while (isNaN (idade)){
    // alert("Digite um número");
// idade = Number(prompt("Digite Usuário"));
// @ }
// @ let senha= prompt("Digite Senha");
// @ if( user== "joao" & senha=="aviao123"){
 // @   alert("Seja Bem-Vindo " +user);
// @}
// @ else{
   // @  alert("Usuário e/ou Senha Incorretos, tente novamente");
// @ }

// while(condição){
//    } código a ser repetido enquanto a condição for verdadeira

// ------------------------- EXEMPLO COM WHILE --------------------
let signos = [ "aries", "touro", "gemeos", "cancer", "leao", "virgem", "libra"]

let contador = 0;  // condição de true ou false
while(contador < signos.length){
    console.log(signos [contador]);
    contador++;

    }
// laços, loops - critério de parada
// contador = contador +1;
// contador +- contador;
// contador ++; --

//-------------------Exemplo de For----------------------------------
// console.log("exemplo de for");
for(início; fim; passo){}
for(let cont = 0; cont < signos.lenght; cont++){
console.log("signos[cont]");
} // enquanto contador for menor que o tamanho a lista +1 unidade da lista

for(let indice in signos ){ // passar alista que eu quero (in) nomes que fazem sentido. i de indice
console.log(signos [i];} // for in é um iterador presso a uma lita - posição na lista

    for(let signo of signos){
        console.log(signo); // assume o valor que está na lista. O elemento
    }

