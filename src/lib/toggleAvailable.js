export default function toggleAvailable(employees) {
    for (let emp of employees) {
        for (let day of emp.days) {
            if (day.available == false) {
                day.startTime = 'off'
                day.endTime = 'off'
            } else {
                day.startTime = '06:00'
                day.endTime = '15:00'
            }
        }
    }
}