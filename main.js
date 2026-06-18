// Paso 1: Primera línea
console.log("Iniciando laboratorio...");

// Paso 2: Variables y literales
let edad = 20;
let esEstudiante = true;

console.log("Edad:", edad);
console.log("Tipo de edad:", typeof edad);

console.log("Es estudiante:", esEstudiante);
console.log("Tipo de esEstudiante:", typeof esEstudiante);

const universidad = "UNTRM";
console.log("Universidad:", universidad);

// Paso 3: Plantillas literales
let nombre = "Juan";

let saludo = `Hola ${nombre}, tienes ${edad} años y estudias en la ${universidad}.`;
console.log(saludo);

// Cadena multilínea
let mensaje = `Bienvenido al laboratorio.
Estamos aprendiendo JavaScript.
Usando plantillas literales.`;

console.log(mensaje);

// Paso 4: Condicional if...else
let sabor = "chocolate";

if (sabor === "chocolate") {
    console.log("Elegiste chocolate.");
} else {
    console.log("Elegiste otro sabor.");
}

// Paso 5: Switch
let opcion = 2;

switch (opcion) {
    case 1:
        console.log("Opción 1 seleccionada");
        break;
    case 2:
        console.log("Opción 2 seleccionada");
        break;
    case 3:
        console.log("Opción 3 seleccionada");
        break;
    default:
        console.log("Opción no válida");
}

// Paso 6: Bucle for
for (let i = 1; i < 10; i++) {
    console.log(`Iteración número: ${i}`);
}