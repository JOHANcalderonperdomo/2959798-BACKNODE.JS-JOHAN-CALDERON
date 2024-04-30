function iniciarChatMatematicas() {
    alert("Bienvenido al chat de matemáticas.");
  
    while (true) {
      var respuesta = prompt("¿Quieres aprender sobre sumas y restas? (Si/No)");
  
      if (respuesta.toLowerCase() === "si") {
        alert("Las sumas y restas son operaciones básicas de aritmética.");
  
        // Preguntas adicionales sobre sumas y restas
        var respuesta1 = prompt("¿Cuánto es 5 + 3?");
        var respuesta2 = prompt("¿Cuánto es 10 - 7?");
  
        alert("Respuesta 1: " + respuesta1 + "\nRespuesta 2: " + respuesta2);
  
      } else if (respuesta.toLowerCase() === "no") {
        var confirmacionSalir = confirm("¿Quieres salir del chat de matemáticas?");
        if (confirmacionSalir) {
          alert("Gracias por participar. ¡Hasta luego!");
          break; // Termina el chat
        }
      } else {
        alert("Por favor, responde con 'Si' o 'No'.");
      }
  
      // Preguntas adicionales sobre matemáticas si el usuario quiere seguir chateando
      if (!confirmacionSalir) {
        var respuestaMatematicas = confirm("¿Quieres aprender sobre otros temas de matemáticas?");
        if (!respuestaMatematicas) {
          alert("Gracias por participar. ¡Hasta luego!");
          break; // Termina el chat
        } else {
          // Aquí podrías hacer más preguntas sobre otros temas de matemáticas
          alert("¡Gracias por tu interés! Hasta luego.");
          break; // Termina el chat
        }
      }
    }
  }
  
  iniciarChatMatematicas();
  