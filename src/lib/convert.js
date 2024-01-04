export default function convert(time) {
    let hours;
    let minutes;
    let total;
    if (time.includes(':')) {
        let times = time.split(':');
        hours = removeZero(times[0])
        minutes = removeZero(times[1])
        total = hours * 60 + minutes
        return total
    }
}

function removeZero(string) {
    let num;
    if (string[0] == 0) {
        // console.log(string[0])
        num = Number(string[1])
        return num
    }
    return Number(string)
}