"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mensagens {
    constructor() {
        this.listarOpcoes = () => {
            console.log(`Aqui você pode:`);
            console.log(`Somar, Subtrair, Multiplicar, Dividir, Potenciar, Radiciar`);
            console.log(`Ou calcular a equação de segundo grau (Bhaskara)\n`);
        };
        this.comoUsar = () => {
            console.log(`Digite os números e a operação separados por espaço, ex: "5 3 Soma"`);
            console.log(`Para Bhaskara: "1 -5 6 Bhaskara"\n`);
            console.log(`Para encerrar, digite "Sair"\n`);
        };
        this.boasVindas = () => {
            console.log('\nBem-vindo à calculadora CLI!\n');
        };
    }
}
exports.default = Mensagens;
