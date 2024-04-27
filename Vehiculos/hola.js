
function hola(callback) {
    console.log("hola");
    // Llamar a la función de callback después de mostrar "hola"
    adios(callback);
}

function adios(callback) {
    console.log("adios");
    // Llamar al callback después de mostrar "adios"
    callback();
}

// Llamar a la función hola
hola(() => {
    console.log("finaliza conversacion");
});