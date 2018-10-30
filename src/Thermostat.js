function Thermostat() {
  this._temp = 20
}

Thermostat.prototype.temp = function(){
  return this._temp;
}

Thermostat.prototype.increaseTemp = function() {
  return this._temp += 1;
}

Thermostat.prototype.decreaseTemp = function() {
  if (this._temp <= 10) {
  return this._temp = 10;
  }
  else {
    return this._temp -= 1;
  }
  
}




 var thermostat = new Thermostat();
 console.log(thermostat.increaseTemp());
