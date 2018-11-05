describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat()
  });

  describe('starts at 20 degrees', function(){
    it ('always starts at 20', function() {
      expect(thermostat.temp()).toEqual(20);
    });
  });

  describe('increases temp by 1 degree', function() {
    it ('increases the temp', function(){
      thermostat.increaseTemp();
      expect(thermostat.temp()).toEqual(21);
    });
  });
  describe('decreases temp by 1 degree', function() {
    it ('decreases the temp', function(){
      thermostat.decreaseTemp();
      expect(thermostat.temp()).toEqual(19);
    });
  });
  describe('does not decrease temp below 10', function() {
    it ('leaves the temp at 10', function(){
      for (var i = 0; i < 12; i++) {
      thermostat.decreaseTemp();
    }
      expect(thermostat.temp()).toEqual(10)
    });
  });
  describe('powersave defaults to on', function() {
    it ('starts with powersaving on', function() {
      expect(thermostat.powerSave()).toEqual(true);
    });
  });

  describe('powersave can be turned off', function() {
    it ('turns powersave off', function() {
      thermostat.powerSaveOff();
      expect(thermostat.powerSave()).toEqual(false);
    });
  });

  describe('powersave can be turned on', function() {
    it ('turns powersave on', function() {
      thermostat.powerSaveOff();
      thermostat.powerSaveOn();
      expect(thermostat.powerSave()).toEqual(true);
    });
  });

  describe('Max temp when powersave on', function() {
    it ('temp cannot increase beyond 25', function() {
      for (var i = 0; i < 7; i++) {
      thermostat.increaseTemp();
    }
      expect(thermostat.temp()).toEqual(25);
    });
  });

  describe('Max temp when powersave off', function() {
    it ('temp cannot increase beyond 32', function() {
      thermostat.powerSaveOff();
      for (var i = 0; i < 13; i++) {
      thermostat.increaseTemp();
    }
      expect(thermostat.temp()).toEqual(32);
    });
  });

  describe ('Reset button', function() {
    it ('resets the temperature to 20', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.increaseTemp();
      }
      thermostat.reset();
      expect(thermostat.temp()).toEqual(20);
    });
  });

  describe ('Energy Usage', function() {
    it ('returns low usage when temp is below 18', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.decreaseTemp();
      }
      expect(thermostat.energyUsage()).toEqual('Low Usage');
    });
    it ('returns medium usage when temp is between 18 & 25', function() {
      expect(thermostat.energyUsage()).toEqual('Medium Usage');
    });
    it ('returns high usage when temp is above 25', function() {
      for (var i = 0; i < 7; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.energyUsage()).toEqual('High Usage');
    });
  });

});
