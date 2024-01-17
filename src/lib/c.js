export default function convert(time) {
    // from string to raw minutes
    if (time.includes(':')) {
        let times = time.split(':')
        let hours = removeZero(times[0])
        let minutes = removeZero(times[1])
        let total = hours * 60 + minutes
        return total
    // from raw minutes to string
    } else if () {
        let hours = addZero(String(time/60))
        let minutes = addZero(time%60)
        time = hours.concat(':', minutes)
        return time
    }
}

function removeZero(string) {
    let num;
    if (string[0] == 0) {
        num = Number(string[1])
        return num
    }
    return Number(string)
}

function addZero(num) {
    if (num < 10) {
        num = String(num)
        let zero = '0'
        num = zero.concat(num)
        num = Number(num)
        return num
    }
}