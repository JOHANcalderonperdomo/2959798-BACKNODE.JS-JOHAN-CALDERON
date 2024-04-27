const Vehiculo = require('./vehiculo');

class CarroDeLujo extends Vehiculo {
  constructor(marca, modelo) {
    super(marca, modelo);
  }
}


module.exports = CarroDeLujo;
