(function(ext) {
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.do_domething = function(str) {
      return str;
    };

    var descriptor = {
        blocks: [
            ['r', 'do_something %s', 'do_something', 'sample text'],
        ]
    };

    ScratchExtensions.register('Add one extension', descriptor, ext);
})({});
