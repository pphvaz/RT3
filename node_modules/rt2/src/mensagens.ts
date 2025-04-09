export default class Mensagens {
    public listarOpcoes = () => {
        console.log(`Aqui você pode:`);
        console.log(`Somar, Subtrair, Multiplicar, Dividir, Potenciar, Radiciar`);
        console.log(`Ou calcular a equação de segundo grau (Bhaskara)\n`);
    };

    public comoUsar = () => {
        console.log(`Digite os números e a operação separados por espaço, ex: "5 3 Soma"`);
        console.log(`Para Bhaskara: "1 -5 6 Bhaskara"\n`);
        console.log(`Para encerrar, digite "Sair"\n`);
    };

    public boasVindas = () => {
        console.log('\nBem-vindo à calculadora CLI!\n');
    };
}