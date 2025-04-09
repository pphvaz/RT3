export default class Bhaskara {
    public calcular(a: number, b: number, c: number): number[] | string {
        let delta = Math.pow(b, 2) - (4 * a * c);

        if (delta < 0) {
            return "A equação não possui raízes reais.";
        }

        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);

        return [x1, x2];
    }
}
