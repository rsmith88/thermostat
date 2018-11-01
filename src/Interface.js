$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemp();

  $('#temp-up').click(function() {
    thermostat.increaseTemp();
    updateTemp();
  });

  $('#temp-down').click(function() {
    thermostat.decreaseTemp();
    updateTemp();
  });

  $('#temp-reset').click(function() {
    thermostat.reset();
    updateTemp();
  });

  $('#PSM-on').click(function() {
    thermostat.powerSaveOn();
    $('#power-saving-mode').text('on');
  });

  $('#PSM-off').click(function() {
    thermostat.powerSaveOff();
    $('#power-saving-mode').text('off');
  });

  function updateTemp() {
    $('#temperature').text(thermostat.temp());
    $('#temperature').attr('class', thermostat.energyUsage());
  };
});
