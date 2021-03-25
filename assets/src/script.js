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