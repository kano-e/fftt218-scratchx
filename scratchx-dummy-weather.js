(function(ext) {
  ext._shutdown = function() {};

  ext._getStatus = function() {
    return {status: 2, msg: 'Ready'};
  };

  ext.weatherDummy = function(callback) {
    $.ajax({
      url: 'https://kano-e.github.io/fftt218-scratchx/dummy-weather.json',
      dataType: 'jsonp',
      success: function(data) {
        callback(data['weather']['title']);
      }
    });
  };

  var descriptor = {
    blocks: [
      ['R', 'weather dummy', 'weatherDummy']
    ]
  };

  ScratchExtensions.register('weather dummy extension', descriptor, ext);
})({});