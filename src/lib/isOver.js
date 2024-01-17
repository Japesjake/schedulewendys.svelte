import minutesToTime from "./minutesToTime"
import timeToMinutes from "./timeToMinutes"

export default function isOver(emp) {
    let totalMinutes = 0
    for (let day of emp.days) {
        let start = timeToMinutes(day.startTime)
        let end = timeToMinutes(day.endTime)
        let minutes = end - start
        totalMinutes += minutes
    }
    if (totalMinutes/60 > emp.max) {
        return true
    }
    return false
}