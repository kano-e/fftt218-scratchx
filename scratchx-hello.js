(function(ext) {
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.hello = function(str) {
      return 'Hello ' + str;
    };

    var descriptor = {
        blocks: [
            ['r', 'hello %s', 'hello', 'Your name'],
        ]
    };

    ScratchExtensions.register('Hello extension', descriptor, ext);
})({});
