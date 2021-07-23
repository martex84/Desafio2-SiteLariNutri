export default function numerosAleatorios(final, inicial) {
    const valorFinal = Math.floor(final);
    const valorInicial = Math.ceil(inicial);
    return Math.floor(Math.random() * (valorFinal - valorInicial + 1)) + valorInicial
}