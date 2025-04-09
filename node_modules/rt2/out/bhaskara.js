"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bhaskara {
    calcular(a, b, c) {
        let delta = Math.pow(b, 2) - (4 * a * c);
        if (delta < 0) {
            return "A equação não possui raízes reais.";
        }
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [x1, x2];
    }
}
exports.default = Bhaskara;
