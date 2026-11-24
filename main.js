let cantidad = Number(prompt("¿Cuántos números deseas registrar?"));
let numeros = [];

for (let i = 0; i < cantidad; i++) {
    let numero = Number(prompt("Ingresa un número:"));
    numeros.push(numero);
}

function encontrarMaximo(lista) {
    // Caso base
    if (lista.length === 1) {
        return lista[0];
    }

    // Dividir el arreglo en dos mitades
    let mitad = Math.floor(lista.length / 2);

    let izquierda = lista.slice(0, mitad);
    let derecha = lista.slice(mitad);

    // Resolver recursivamente
    let maxIzq = encontrarMaximo(izquierda);
    let maxDer = encontrarMaximo(derecha);

    // Comparar los resultados
    return Math.max(maxIzq, maxDer);
}

if (numeros.length > 0) {
    console.log("Números registrados:", numeros);
    console.log("El número máximo es:", encontrarMaximo(numeros));
} else {
    console.log("No se registraron números.");
}