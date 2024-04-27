const readline = require("readline");
const Vehiculo = require('./vehiculo');
const CarroDeLujo = require('./CarrosDeLujo');

const vh = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log("Seleccione un vehículo:");
  console.log("1. Toyota Corolla (Vehículo normal)");
  console.log("2. Honda Civic (Vehículo normal)");
  console.log("3. Ferrari (Carro de lujo)");
  console.log("4. Tesla (Carro de lujo)");
  console.log("5. Salir");
  vh.question('Ingrese su selección: ', (opcion) => {
    opcion = parseInt(opcion);
    switch (opcion) {
      case 1:
        manejarVehiculo(new Vehiculo("Toyota", "Corolla"));
        break;
      case 2:
        manejarVehiculo(new Vehiculo("Honda", "Civic"));
        break;
      case 3:
        manejarVehiculo(new CarroDeLujo("Ferrari", "Modelo X"));
        break;
      case 4:
        manejarVehiculo(new CarroDeLujo("Tesla", "Model S"));
        break;
      case 5:
        console.log("¡Hasta luego!");
        vh.close();
        break;
      default:
        console.log("Selección inválida. Por favor, ingrese un número válido.");
    }
  });
}

// Función para manejar las acciones del vehículo seleccionado
function manejarVehiculo(vehiculo) {
  console.log(`Ha seleccionado el vehículo ${vehiculo.marca} ${vehiculo.modelo}`);
  console.log("Seleccione una acción:");
  console.log("1. Encender");
  console.log("2. Apagar");
  console.log("3. Volver al menú principal");
  vh.question('Ingrese su selección: ', (accion) => {
    accion = parseInt(accion);

    switch (accion) {
      case 1:
        vehiculo.encender();
        break;
      case 2:
        vehiculo.apagar();
        break;
      case 3:
        console.log("Volviendo al menú principal...");
        mostrarMenu();
        break;
      default:
        console.log("Selección inválida. Por favor, ingrese un número válido.");
    }
  });
}

// Mostrar el menú principal
mostrarMenu();
