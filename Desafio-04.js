Desafio 1-4: Aplicação: Operações bancárias


//🚀 Sobre o desafio

//Desafios para fortalecer alguns conceitos, entre eles:

/*Booleanos;
Organização;
Padronização;
Escrita.

//Crie um programa para realizar operações bancárias na conta de um usuário.

//Comece criando um objeto com o nome do usuário, suas transações e saldo.

//As transações (transactions) devem iniciar como um array vazio [] e o saldo (balance) em 0 (zero).

const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

//Adicionar transações
/*Crie uma função createTransaction() /*para adicionar uma nova transação no array de transações de um usuário, essa função deve receber como parâmetro um objeto de transação que tem o seguinte formato:

{
  type: 'credit',
  value: 50.5
}

//O type pode ser credit para créditos e debit para débitos da conta do usuário.

//Quanto uma transação for do tipo credit ela deve também somar o valor do crédito no saldo (balance) do usuário.

//Se for uma transação do tipo debit ela deve subtrair o valor do débito no saldo (balance) do usuário.

/*Dica.: Você pode usar o método user.transactions.push(transaction) /*para adicionar um novo item no array de transações.*/

//Relatórios
//Crie uma função chamada getHigherTransactionByType que recebe como parâmetro o tipo de transação credit/debit, percorre as transações do usuário e retorna o objeto da transação de maior valor com aquele tipo:
//getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
//Crie uma função chamada getAverageTransactionValue que retorna o valor médio das transações de um usuário independente do seu tipo:
//getAverageTransactionValue(); // 83.3
//Crie uma função chamada getTransactionsCount que retorna o número de transações de cada tipo credit/debit, o retorno da função deve ser um objeto e seguir exatamente como o modelo apresentado abaixo:
//getTransactionsCount(); // { credit: 5, debit: 3 }
//resultado final do projeto:



const user = {
 name: "Mariana",
 transactions: [],
 balance: 0
};
/*Crie uma função createTransaction() para adicionar uma nova transação no array de transações de um usuário, essa função deve receber como parâmetro um objeto de transação que tem o seguinte formato:

{
  type: 'credit',
  value: 50.5
}*/

//O type pode ser credit para créditos e debit para débitos da conta do usuário.

//Quanto uma transação for do tipo credit ela deve também somar o valor do crédito no saldo (balance) do usuário.

//Se for uma transação do tipo debit ela deve subtrair o valor do débito no saldo (balance) do usuário.

function createTransaction(transaction) {
 //*Dica.: Você pode usar o método user.transactions.push(transaction) para adicionar um novo item no array de transações.*/
 user.transactions.push(transaction)
  
 if(transaction.type == 'credit'){
  user.balance = user.balance + transaction.value
 }else{
  user.balance = user.balance - transaction.value
 }
}
//Crie uma função chamada getHigherTransactionByType que recebe como parâmetro o tipo de transação credit/debit, percorre as transações do usuário e retorna o objeto da transação de maior valor com aquele tipo:
function getHigherTransactionByType(type) {

 let higherTransaction 
 let higherValue = 0
 for(let transaction of user.transactions){
  if(type == transaction.type && higherValue < transaction.value){
   higherValue = transaction.value
   higherTransaction = transaction
  }
 }
 return higherTransaction
}
//Crie uma função chamada getAverageTransactionValue que retorna o valor médio das transações de um usuário independente do seu tipo:
function getAverageTransactionValue(){
 let sum = 0
 for  (let transaction of user.transactions){
  sum += transaction.value
 }
 return sum / user.transactions.length
}

//Crie uma função chamada getTransactionsCount que retorna o número de transações de cada tipo credit/debit, o retorno da função deve ser um objeto e seguir exatamente como o modelo apresentado abaixo:

function getTransactionsCount(){
 let count ={
  Credit : 0,
  Debit : 0
 }
 for(let transaction of user.transactions){
  if(transaction.type == 'credit'){
   count.Credit ++
  }else{
   count.Debit ++
  }
 }

 return count
}


//Exemplo de resultado final do projeto:
createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

console.log(getHigherTransactionByType("credit")); // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType("debit")); // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()); // 70

console.log(getTransactionsCount()); // { credit: 2, debit: 2 }



