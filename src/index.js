import jquery from "jquery";
//import moment from "moment/moment";
var moment = require('moment-timezone');

function updateTime() {
    // Local TZ
    $("#browser-default").text(moment().subtract(5, 'minutes').format("HH:mm:ss") + " CT-" + moment.tz(moment.tz.guess()).format('z'));

    // Regional TZ
    $("#ctEST").text(moment().tz("America/New_York").subtract(5, 'minutes').format("HH:mm:ss"));
    $("#ctGMT").text(moment().tz("Europe/London").subtract(5, 'minutes').format("HH:mm:ss"));
    $("#ctUTC").text(moment().utc().subtract(5, 'minutes').format("HH:mm:ss"));
    $("#ctHKT").text(moment().tz("Asia/Hong_Kong").subtract(5, 'minutes').format("HH:mm:ss"));
};
function initPage() {
    $("#localTZ").text(moment.tz(moment.tz.guess()).format('z'));

    // Regional names
    $("#ctESTName").text("CT-" + moment.tz("America/New_York").format('z'));
    $("#ctGMTName").text("CT-" + moment.tz("Europe/London").format('z'));
    $("#ctUTCName").text("CT-" + moment.tz("UTC").format('z'));
    $("#ctHKTName").text("CT-" + moment.tz("Asia/Hong_Kong").format('z'));
    updateTime();
    setInterval(function () {
        updateTime();
    }, 1000);
}

initPage()