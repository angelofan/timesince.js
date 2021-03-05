/*
* timesince.js
* --
* Extends the JavaScript Date prototype with a
* method that returns a human readable "time ago"
* string between then and now
*/

(function () {

    Date.prototype.timeSince = function () {

        var l = locale[DEFAULT_LANG];
        var now = new Date();
        var diff = this.getTime() - now.getTime();

        // Difference in seconds
        var s = parseInt(Math.abs(diff / 1000));
        var d = Math.floor(s / (3600 * 24));

        if (d === 0) {
            if (s === 0)
                return l["now"];
            if (s === 1)
                return '1' + l["second"];
            if (s < 60)
                return Math.floor(s) + l["seconds"];
            if (s < 120)
                return '1' + l["minute"];
            if (s < 3600)
                return Math.floor(s / 60) + l["minutes"];
            if (s < 7200)
                return '1' + l["hour"]
            if (s < 86400)
                return Math.floor(parseInt(s / 3600)) + l["hours"];
        }
        if (d == 1)
            return l["yesterday"];
        if (d < 7)
            return d + l["days"];
        if (d < 14)
            return '1' + l["week"];
    }

    var DEFAULT_LANG = "ZH"
    var locale = {}
    locale.EN = {
        "now": "Now",
        "second": " second ago",
        "seconds": " seconds ago",
        "minute": " minute ago",
        "minutes": " minutes ago",
        "hour": " hour ago",
        "hours": " hours ago",
        "yesterday": "Yesterday",
        "days": " days ago",
        "week": " week ago",
        "weeks": " weeks ago",
        "month": " month ago",
        "months": " months ago",
        "year": " year ago",
        "years": " years ago"
    }
    locale.ZH = {
        "now": "现在",
        "second": "秒前",
        "seconds": "秒前",
        "minute": "分钟前",
        "minutes": "分钟前",
        "hour": "小时前",
        "hours": "小时前",
        "yesterday": "昨天",
        "days": "天前",
        "week": "周前",
        "weeks": "周前",
        "month": "个月前",
        "months": "个月前",
        "year": "年前",
        "years": "年前"
    }

})();
