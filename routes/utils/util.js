function convertDayToStr (day) {
    let dayStr;
    switch (day) {
        case 0:
            dayStr = 'Sunday';
            break;
        case 1:
            dayStr = 'Monday';
            break;
        case 2:
            dayStr = 'Tuesday';
            break;
        case 3:
            dayStr = 'Wednesday';
            break;
        case 4:
            dayStr = 'Thursday';
            break;
        case 5:
            dayStr = 'Friday';
            break;
        case 6:
            dayStr = 'Saturday';
            break;
        default:
            dayStr = "Error can't get valid day " + day;
            break;
    }
    return dayStr;
}

function convertMonthToStr (month) {
    let monthStr;
    switch (month) {
        case 1:
            monthStr = 'January';
            break;
        case 2:
            monthStr = 'February';
            break;
        case 3:
            monthStr = 'March';
            break;
        case 4:
            monthStr = 'April';
            break;
        case 5:
            monthStr = 'May';
            break;
        case 6:
            monthStr = 'June';
            break;
        case 7:
            monthStr = 'July';
            break;
        case 8:
            monthStr = 'August';
            break;
        case 9:
            monthStr = 'September';
            break;
        case 10:
            monthStr = 'October';
            break;
        case 11:
            monthStr = 'November';
            break;
        case 12:
            monthStr = 'December';
            break;
        default:
            monthStr = "Error can't get valid month";
            break;
    }
    return monthStr;
}

function getDateInStr(today) {
    if (typeof today === 'undefined') {
        today = new Date();
    }
    const dayStr = convertDayToStr(today.getDay());
    const monthStr = convertMonthToStr(today.getMonth());
    const date = dayStr + ' ' + today.getDate() + ' ' + monthStr + ' ' + today.getFullYear();
    return date;
}
module.exports.convertDayToStr = convertDayToStr;
module.exports.convertMonthToStr = convertMonthToStr;
module.exports.getDateInStr = getDateInStr;

function checkAndExtend(val) {
    if (val < 10) {
        val = '0' + val;
    }
    return val;
}

function getTime(today) {
    if (typeof today === 'undefined') {
        today = new Date();
    }
    let hours = checkAndExtend(today.getHours());
    let minutes = checkAndExtend(today.getMinutes());
    let seconds = checkAndExtend(today.getSeconds());
    return hours + ':' + minutes + ':' + seconds;
}

module.exports.getTime = getTime;