class Vehiculo {

  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.encendido = false; 
  }

  encender() {
    this.encendido = true;
    console.log(`El vehículo ${this.marca} ${this.modelo} ha sido encendido.`);
  }

  apagar() {
    this.encendido = false;
    console.log(`El vehículo ${this.marca} ${this.modelo} ha sido apagado.`);
  }
}

module.exports = Vehiculo;