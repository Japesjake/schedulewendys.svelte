import minutesToTime from "./minutesToTime"
import timeToMinutes from "./timeToMinutes"

export default function isOver(emp) {
    for (let day of emp.days) {
        let start = timeToMinutes(day.startTime)
        let end = timeToMinutes(day.endTime)
        let minutes = end - start
        let time = minutesToTime(minutes)
    }
}