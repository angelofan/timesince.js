/*
* Copyright 2010, Daniel Stocks (http://webcloud.se)
* Released under the MIT, BSD, and GPL Licenses.
*
* timesince.js
* --
* Extends the JavaScript Date prototype with a
* method that returns a human readable "time ago"
* string between then and now
*/

(function() {

var DEFAULT_LANG = "EN"

var locale = {


}

Date.prototype.timeSince = function(d) {

    var now = new Date();
    var diff = this.getTime() - now.getTime();
    var s_diff = parseInt(Math.abs(diff / 1000))

    if(s_diff == 0)
        return "Now";

    return "could not compute";

}

})();
