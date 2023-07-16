var moment = require('moment-timezone');
import 'bootstrap';

function updateTime() {
    // Local TZ
    $("#ctLocal").text(moment().subtract(5, 'minutes').format("HH:mm:ss") + " CT-" + moment.tz(moment.tz.guess()).format('z'));
    $("#tzLocal").text(moment().format("HH:mm:ss") + " " + moment.tz(moment.tz.guess()).format('z'));

    // Regional CT TZ
    $("#ctEST").text(moment().tz("America/New_York").subtract(5, 'minutes').format("HH:mm:ss"));
    $("#ctGMT").text(moment().tz("Europe/London").subtract(5, 'minutes').format("HH:mm:ss"));
    $("#ctUTC").text(moment().utc().subtract(5, 'minutes').format("HH:mm:ss"));
    $("#ctHKT").text(moment().tz("Asia/Hong_Kong").subtract(5, 'minutes').format("HH:mm:ss"));

    // Regional Real TZ
    $("#EST").text(moment().tz("America/New_York").format("HH:mm:ss"));
    $("#GMT").text(moment().tz("Europe/London").format("HH:mm:ss"));
    $("#UTC").text(moment().utc().format("HH:mm:ss"));
    $("#HKT").text(moment().tz("Asia/Hong_Kong").format("HH:mm:ss"));
};
function initPage() {
    $("#localTZ").text(moment.tz(moment.tz.guess()).format('z'));

    // Regional CT names
    $("#ctESTName").text("CT-" + moment.tz("America/New_York").format('z'));
    $("#ctGMTName").text("CT-" + moment.tz("Europe/London").format('z'));
    $("#ctUTCName").text("CT-" + moment.tz("UTC").format('z'));
    $("#ctHKTName").text("CT-" + moment.tz("Asia/Hong_Kong").format('z'));

    // Regional Real names
    $("#ctESTName").text(moment.tz("America/New_York").format('z'));
    $("#ctGMTName").text(moment.tz("Europe/London").format('z'));
    $("#ctUTCName").text(moment.tz("UTC").format('z'));
    $("#ctHKTName").text(moment.tz("Asia/Hong_Kong").format('z'));

    updateTime();
    setInterval(function () {
        updateTime();
    }, 1000);
}

initPage()