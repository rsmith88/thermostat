$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemp();

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
  });

  $('#current-city').change(function() {
  var city = $('#current-city').val();
  console.log(city);
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp)
    });
  });

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  })

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
