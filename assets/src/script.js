function suaSina(){
    var nome = document.getElementById("nome").value;
    var acc = 0;
    let i; 

    for(i=0;i<nome.length;i++){
        acc += nome.charCodeAt(i);               
    }
    let choice = parseInt(parseInt(acc/100)*4/9);
    
    switch(choice){
        case 1:
            document.write("Criar uma página Web que leia  2 valores inteiros, respectivamente X e Y. O programa deve apresentar/mostrar todos os números pares entre estes valores.");
            break;
        case 2:
            document.write("Criar uma página Web que leia 2 valores inteiros, N e M. O programa deve calcular e apresentar/mostrar a soma de todos os números ímpares existentes estes valores.");
            break;
        case 3:
            document.write("Criar uma página Web que leia um valor inteiro N. Calcular e apresentar todos os números entre 1 e 10000 que, divididos por N dão resto igual a 2. A entrada tem a seguinte restrição (0 < N < 10000).");
            break;
        case 4:
            document.write("Criar uma página Web que leia 2 valores inteiros, respectivamente X e Y. O programa deve calcular e apresentar uma sequência de números de 1 até Y, mostrando apenas X números por linha.");
            break;
        default:
            document.write("Digitou seu sobrenome corretamente?");
            break;
    }
}

function suaSina2(){
    var nome = document.getElementById("nome").value;
    var contVogal = 0;
    
    for(let i=0;i<nome.length;i++){
        if(isVogal(nome.charAt(i))){
            console.log(nome.charAt(i));
            contVogal++;
        }
    }
    
    switch(contVogal){
        case 0:
        case 1:
        case 2:
            document.write("Criar uma página Web que leia um número inteiro N entre 50 e 100 (inclusive) e um número M entre 1 e 100. A página deve preencher um array com N valores gerados aleatoriamente entre 1 e 100 (inclusive). O número M deve ser procurado no array gerado e caso o número seja encontrado (exista) no array, a página deve mostrar o número M encontrado e a posição em que encontra no array. Caso contrário, mostrar número não encontrado.");
            break;
        case 3:
            document.write("Criar uma página Web que leia um número inteiro N, entre 7 e 1000 (inclusive). A página deve preencher um array com N valores gerados aleatoriamente entre 1 e 1000 (inclusive). Apresentar na página a quantidade de elementos do array e o valor médio dos valores armazenados.");
            break;
        case 4:
            document.write("Criar uma página Web que leia 15 números. Os números pares deverão ser armazenados em um array e os ímpares em outro. Ao final, mostrar na página o array de números ímpares e o array de números pares, bem como a média dos valores armazenados em cada array.");
            break;
        case 5:
        case 6:
            document.write("Criar uma página Web que leia 15 números entre -50 e 50 (inclusive). Os números positivos devem ser armazenados em um array e os negativos em outro. A página deve apresentar o array de números positivos e o array de números negativos, bem como a média dos valores armazenados em cada array.");
            break;
        case 7:
        case 8:
        case 9:
            document.write("Criar uma página Web que gere um array de 10 posições com números aleatórios entre 1 e 6. A página deve ler um número X (entre 1 e 6). Mostrar na página quantas vezes o número X aparece dentro do array e, caso não apareça nenhuma vez, informar que o número buscado não existe no array.");
            break;
        
        default:
            document.write("Digitou seu sobrenome corretamente?");
            break;
    }
}

function isVogal(c){
    let pattern = /[aeiouAEIOU]/g;
    return pattern.test(c);
}


function suaSina3(){
    var nome = document.getElementById("nome").value;
    var acc = 0;
    let i; 

    for(i=0;i<nome.length;i++){
        acc += nome.charCodeAt(i);               
    }
    let choice = parseInt(parseInt(acc/100)*4/9);
    
    switch(choice){
        case 1:
            document.write("<p>");
            document.write("Problema 1 (7.0) Usando HTML e Javascript, construa uma página que leia um número N. A seguir crie um array A contendo 15 valores maiores que o número digitado e um array B contendo 15 valores menores que o número digitado. O array A e B devem ser mostrados na página HTML. O número digitado não deve aparecer em nenhum dos arrays.");
            document.write("<p>");
            document.write("Problema 2 (6.0) Construa uma página Web que leia 2 números inteiros, M e N. Apresentar os números inteiros entre o primeiro e o segundo. Caso M seja maior que N, os números mostrados devem estar em ordem decrescente, caso contrário, devem estar em ordem crescente. Os números gerados devem ser apresentados no console.");
            break;
        case 2:
            document.write("<p>");
            document.write("Problema 1 (7.0) Usando HTML e Javascript, construa uma página que leia um número N. A seguir crie um array A contendo 15 valores maiores que o número digitado e um array B contendo 15 valores menores que o número digitado. O array A e B devem ser mostrados na página HTML. O número digitado não deve aparecer em nenhum dos arrays.");
            document.write("<p>");
            document.write("Problema 2 (6.0) Escreva uma página Web que leia um número inteiro N e ofereça 2 botões de ação. Um botão deve mostrar os 10 primeiros números pares a partir de N. O segundo botão deve mostrar os 10 primeiros números ímpares a partir de N. Apresentar os resultados no console.");
            break;
        case 3:
            document.write("<p>");
            document.write("Problema 1 (7.0) Usando HTML e Javascript, construa uma página que leia 20 números inteiros positivos e armazene um array A. A partir do array A, construir um array B substituindo os valores ímpares por -1 e pares por 1. ");
            document.write("<p>");
            document.write("Problema 2 (6.0) Construa uma página Web que leia 2 números inteiros, M e N. Apresentar os números inteiros entre o primeiro e o segundo. Caso M seja maior que N, os números mostrados devem estar em ordem decrescente, caso contrário, devem estar em ordem crescente. Os números gerados devem ser apresentados no console.");
            break;
        case 4:
        case 5:
        case 6:
            document.write("<p>");
            document.write("Problema 1 (7.0) Usando HTML e Javascript, construa uma página que leia 20 números inteiros positivos e armazene um array A. A partir do array A, construir um array B substituindo os valores ímpares por -1 e pares por 1. ");
            document.write("<p>");
            document.write("Problema 2 (6.0) Escreva uma página Web que leia um número inteiro N e ofereça 2 botões de ação. Um botão deve mostrar os 10 primeiros números pares a partir de N. O segundo botão deve mostrar os 10 primeiros números ímpares a partir de N. Apresentar os resultados no console.");
            break;
        default:
            document.write("Digitou seu sobrenome corretamente?");
            break;
    }
}