"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var readline = __importStar(require("readline"));
var rt2_1 = require("rt2");
var mensagens = new rt2_1.Mensagens();
var iniciar = function () {
    var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    leitor.question("Quais s\u00E3o seus n\u00FAmeros e a opera\u00E7\u00E3o desejada?\n", function (valor) {
        var instrucoes = valor.split(' ');
        var operacao = instrucoes[instrucoes.length - 1];
        var numeros = instrucoes.slice(0, -1).map(Number);
        if (operacao === "Sair") {
            console.log("At\u00E9 mais!");
            leitor.close();
            return;
        }
        console.log("Estas foram suas instru\u00E7\u00F5es: ".concat(instrucoes, "\n"));
        try {
            var resultado = void 0;
            switch (operacao) {
                case 'Somar':
                    resultado = new rt2_1.Soma().calcular(numeros[0], numeros[1]);
                    break;
                case 'Subtrair':
                    resultado = new rt2_1.Subtracao().calcular(numeros[0], numeros[1]);
                    break;
                case 'Multiplicar':
                    resultado = new rt2_1.Multiplicacao().calcular(numeros[0], numeros[1]);
                    break;
                case 'Dividir':
                    resultado = new rt2_1.Divisao().calcular(numeros[0], numeros[1]);
                    break;
                case 'Potenciar':
                    resultado = new rt2_1.Potenciacao().calcular(numeros[0], numeros[1]);
                    break;
                case 'Radiciar':
                    resultado = new rt2_1.Radiciacao().calcular(numeros[0], numeros[1]);
                    break;
                case 'Bhaskara':
                    if (numeros.length < 3) {
                        console.log("Você precisa informar três números para Bhaskara!");
                    }
                    else {
                        resultado = new rt2_1.Bhaskara().calcular(numeros[0], numeros[1], numeros[2]);
                    }
                    break;
                default:
                    console.log("Opera\u00E7\u00E3o n\u00E3o reconhecida.");
                    leitor.close();
                    iniciar();
                    return;
            }
            console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(resultado, "\n"));
        }
        catch (error) {
            console.log("Erro: ".concat(error.message));
        }
        leitor.close();
        iniciar();
    });
};
mensagens.boasVindas();
mensagens.listarOpcoes();
mensagens.comoUsar();
iniciar();
