export default function minutesToTime (time) {
    let hours = addZero(time/60)
    let minutes = addZero(time%60)
    hours = String(hours)
    time = hours.concat(':', minutes)
    return time
}
function addZero(num) {
    if (num < 10) {
        num = String(num)
        let zero = '0'
        num = zero.concat(num)
        return num
    }
    return num
}