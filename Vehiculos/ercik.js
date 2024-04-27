const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const chat = [
  "Instructor: ¿Qué hiciste ayer?",
  "Aprendiz: Fui al cine con mi familia.",
  "Instructor: ¿Qué película vieron?",
  "Aprendiz: Vimos la nueva película de superhéroes.",
  "Instructor: ¿Te gustó?",
  "Aprendiz: Sí, estuvo muy buena. Los efectos especiales eran increíbles.",
  "Instructor: ¿Quieres ir al parque este fin de semana?",
  "Aprendiz: Claro, me encantaría. Podemos jugar al frisbee."
];

function mostrarMensaje(mensajes, indice) {
  if (indice < mensajes.length) {
    const mensaje = mensajes[indice];
    console.log(mensaje);

    if (indice % 2 === 1) {
      console.log("Mensaje oculto: ", mensaje);
      mostrarMensaje(mensajes, indice + 1); // Llama a la función recursivamente para el siguiente mensaje
    } else {
      rl.question(${mensaje}\n, respuesta => {
        mostrarMensaje(mensajes, indice + 1); // Llama a la función recursivamente para el siguiente mensaje
    });
}
} else {
rl.close(); // Cierra la interfaz de lectura cuando se hayan mostrado todos los mensajes
}
}

// Iniciar la conversación
mostrarMensaje(chat, 0);