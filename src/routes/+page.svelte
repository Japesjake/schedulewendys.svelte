<script>
    import Employees from '$lib/components/Employees.svelte'
    import data from '$lib/stores.js'
    import Schedule from '$lib/components/Schedule.svelte'
    $: $data = toggleAvailable($data)
    function reset() {
        localStorage.clear()
        location.reload()
    }
    import slots from '$lib/slots.js'
    import minutesToTime from '$lib/minutesToTime.js'
    import timeToMinutes from '$lib/timeToMinutes.js'
    function toggleAvailable($data) {
        let employees = $data.employees
        for (let emp of employees) {
            for (let day of emp.days) {
                if (day.available == false && !day.startTimeStore) {
                    day.startTimeStore = day.startTime
                    day.endTimeStore = day.endTime
                    day.startTime = 'off'
                    day.endTime = 'off'
                } else if (day.available == false && day.startTimeStore) {
                    day.startTime = 'off'
                    day.endTime = 'off'
                } else if (day.available == true && day.startTimeStore) {
                    day.startTime = day.startTimeStore
                    day.endTime = day.endTimeStore
                    day.startTimeStore = false
                    day.endTimeStore = false
                }
            }
        }
        $data.employees = employees
        return $data
    }
    function assignManagers($data) {
        let slots = $data.slots
        let employees = $data.employees
        for (let slot of slots) {
            for (let emp of employees) {
                for (let day of emp.days) {
                    if (slot.day == day.name) {
                        if (day.assigned == false) {
                            if (slot.number > 0) {
                                if (emp.position == slot.type) {
                                    let length = timeToMinutes(slot.endTime) - timeToMinutes(slot.startTime)
                                    if (length <= emp.max * 60 - emp.hours * 60) {
                                        day.assigned = true
                                        day.startTime = slot.startTime
                                        day.endTime = slot.endTime
                                        slot.number -= 1
                                        let minutes = emp.hours * 60
                                        minutes += length
                                        emp.hours = minutes / 60
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        $data.slots = slots
        $data.employees = employees
        return $data
    }

    function update($data) {
        // $data = resetTimes($data)
        resetSlots($data)
        resetEmployees($data)
        $data = assignManagers($data)
    }

    function resetSlots($data) {
        $data.slots = slots()
        return $data
    }

    function resetEmployees($data) {
        for (let emp of $data.employees) {
            emp.hours = 0
            for (let day of emp.days) {
                day.assigned = false
                day.startTime = '-'
                day.endTime = '-'
            }
        }
    }

    function resetTimes($data) {
        for (let emp = 0; emp < $data.employees.length; emp++) {
            for (let day = 0; day < $data.employees[emp].days.length; day++) {
                $data.employees[emp].days[day].startTime = '05:00'
                $data.employees[emp].days[day].endTime = '-'
            }
        }
    }
    </script>
    <Employees /><br>
    <button on:click={() => update($data)}>Assign</button><br>
    <!-- <button on:click={() => test()}>test</button> -->
    <Schedule />
    <br><br><br><br>
    <button style='color:red;' type='button' on:click={() => reset()}>reset</button>