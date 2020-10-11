const gkm = require('gkm');

$(document).ready(function() {

    gkm.events.on('key.*', function(data) {
        // console.log(this.event + ' ' + data);
    });

    gkm.events.on('mouse.*', function(data) {
        // console.log(this.event + ' ' + data);
    });

});