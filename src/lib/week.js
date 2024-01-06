export default function week () {
    let daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    let days = []
    for (let i = 0; i<daysOfWeek.length; i++) {
        days.push({name: daysOfWeek[i], startTime: '06:00', endTime: '17:00', assigned: false})
    }
    return days
}