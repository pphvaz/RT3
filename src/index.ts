import * as readline from 'readline';

import { Soma, Divisao, Mensagens, Subtracao, Multiplicacao, Potenciacao, Radiciacao, Bhaskara } from 'rt2';

let mensagens = new Mensagens();

let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    leitor.question(`Quais são seus números e a operação desejada?\n`, (valor) => {
        let instrucoes = valor.split(' ');
        let operacao = instrucoes[instrucoes.length - 1];
        let numeros = instrucoes.slice(0, -1).map(Number);

        if (operacao === "Sair") {
            console.log(`Até mais!`);
            leitor.close();
            return;
        }

        console.log(`Estas foram suas instruções: ${instrucoes}\n`);

        try {
            let resultado;
            switch (operacao) {
                case 'Somar':
                    resultado = new Soma().calcular(numeros[0], numeros[1]);
                    break;
                case 'Subtrair':
                    resultado = new Subtracao().calcular(numeros[0], numeros[1]);
                    break;
                case 'Multiplicar':
                    resultado = new Multiplicacao().calcular(numeros[0], numeros[1]);
                    break;
                case 'Dividir':
                    resultado = new Divisao().calcular(numeros[0], numeros[1]);
                    break;
                case 'Potenciar':
                    resultado = new Potenciacao().calcular(numeros[0], numeros[1]);
                    break;
                case 'Radiciar':
                    resultado = new Radiciacao().calcular(numeros[0], numeros[1]);
                    break;
                case 'Bhaskara':
                    if (numeros.length < 3) {
                        console.log("Você precisa informar três números para Bhaskara!");
                    } else {
                        resultado = new Bhaskara().calcular(numeros[0], numeros[1], numeros[2]);
                    }
                    break;
                default:
                    console.log(`Operação não reconhecida.`);
                    leitor.close();
                    iniciar();
                    return;
            }

            console.log(`O resultado da operação é: ${resultado}\n`);
        } catch (error: any) {
            console.log(`Erro: ${error.message}`);
        }

        leitor.close();
        iniciar();
    });
};

mensagens.boasVindas();
mensagens.listarOpcoes();
mensagens.comoUsar();
iniciar();