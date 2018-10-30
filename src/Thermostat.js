function Thermostat() {
  this._temp = 20
  this._powerSave = true
}

Thermostat.prototype.temp = function(){
  return this._temp;
}

Thermostat.prototype.increaseTemp = function() {
  if (this._powerSave && this._temp >= 25) {
    this._temp = 25;
  }
  else if (this._powerSave === false && this._temp >= 32) {
    this._temp = 32;
  }
  else {
    this._temp += 1;
  }
}

Thermostat.prototype.decreaseTemp = function() {
  if (this._temp <= 10) {
    this._temp = 10;
  }
  else {
    this._temp -= 1;
  }
}

Thermostat.prototype.powerSave = function() {
  return this._powerSave;
}

Thermostat.prototype.powerSaveOff = function() {
  this._powerSave = false;
}

Thermostat.prototype.powerSaveOn = function() {
  this._powerSave = true;
}

Thermostat.prototype.reset = function() {
  this._temp = 20;
}

Thermostat.prototype.energyUsage = function() {
  if (this._temp < 18) {
    return 'Low Usage';
  }
  else if (this._temp < 25) {
    return 'Medium Usage';
  }
  else {
    return 'High Usage';
  }
}

 var thermostat = new Thermostat();
 console.log(thermostat.increaseTemp());
