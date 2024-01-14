export default function timeToMinutes(time) {
    // from string to raw minutes
    if (time.includes(':')) {
        let times = time.split(':')
        let hours = removeZero(times[0])
        let minutes = removeZero(times[1])
        let total = hours * 60 + minutes
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