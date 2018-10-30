describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat()
  });

  describe('starts at 20 degrees', function(){
    it ('always starts at 20', function() {
      expect(thermostat.temp()).toEqual(20);
    });
  });

  describe('increases temp by 1 degree', function() {
    it ('increases the temp', function(){
      expect(thermostat.increaseTemp()).toEqual(21);
    });
  });
  describe('decreases temp by 1 degree', function() {
    it ('decreases the temp', function(){
      expect(thermostat.decreaseTemp()).toEqual(19);
    });
  });
  describe('does not decrease temp below 10', function() {
    it ('leaves the temp at 10', function(){
      for (var i = 0; i < 11; i++) {
      thermostat.decreaseTemp();
    }
      expect(thermostat.decreaseTemp()).toEqual(10)
    });
  });

});
