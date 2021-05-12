/*==========================================


   OPERADORES DE COMPARAÇÃO

   >      Maior
   <      Menor
   >=     Maior igual a
   <=     Menor igual a
   ==     Igual a
   ===    Igual e do mesmo tipo
   !=     Diferente de 
   !==    Diferente, inclusive do tipo



==========================================*/


console.log( 5 > 4) // true;
console.log( 5 > 4) // false; 
console.log( 5 >= 4) // true; 
console.log( 5 <= 4) // true; 

console.log( 4 == "4") // true; é igual
console.log( 4 === "4") // false; igual do mesmo tipo
console.log( 4 != "4") // true;  diferente
console.log( 4 !== "4") // true;  diferente, inclusive do tipo 




// DESAFIO 1

// verificar se a pessoa é maior de 18 anos
const idade = 16
console.log(idade > 18)


// se sim, deixar entrar, se não, bloquear a entrada
if(idade >=18) {
 console.log('deixar entrar')
}else{
 console.log('bloquear a entrada')
}

// se a pessoa tiver 17 anos
// avisar para voltar quando fizer 18 anos
if(idade === 17){
 console.log('Volte quando tiver 18')
}



/*==========================================


   OPERADORES LÓGICOS

   && "E" As duas condições dever ser verdadeiras
      para que a condiçãofinal seja verdadeira.
   
   || "OU" Uma das condições deve ser verdadeira
      para que a condição final seja verdadeira.

   !  "NÂO" Nega uma condição.



==========================================*/


console.log( 5 == 5 && 6 == 6) // true;
console.log( 5 == 5 && 6 != 6) // false;

console.log( 5 != 5 || 6 == 6) // true;
console.log( 5 == 5 || 6 != 6) // true;

console.log(!( 5 > 6)) // true;
console.log(!( 5 < 6)) // false;



/*==========================================


   OPERADORES ARITIMETICOS

   *  Multiplicação
   /  Divisão
   %  Resto da divisão
   +  Adição
   -  Subtração

==========================================*/

console.log( 2 * 2) // 4;
console.log( 2 / 2) // 1;
console.log( 2 % 2) // 0,5;
console.log( 2 + 2) // 4;
console.log( 2 - 2) // 0;


