export default function toggleAvailable(employees) {
    for (let emp of employees) {
        for (let day of emp.days) {
            if (day.available == false) {
                day.startTimeStore = day.startTime
                day.endTimeStore = day.startTime
                day.startTime = 'off'
                day.endTime = 'off'
            }
            if (day.available == true && day.startTimeStore != false) {
                day.startTime = day.startTimeStore
                day.endTime = day.endTimeStore
                day.startTimeStore = false
                day.endTimeStore = false
            }
        }
    }
}