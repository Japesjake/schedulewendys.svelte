export default function minutesToTime (time) {
    let hours = addZero(String(time/60))
    let minutes = addZero(time%60)
    time = hours.concat(':', minutes)
    return time
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
