<script>
    import data from '$lib/stores'
    export let id;
    export let schedule;
    export let day;
    let times = []
    for (let h = 5; h < 26; h++){
        let hour = h
        if (h < 10) {
            hour = '0' + h
        }
        for (let m = 0; m < 4; m++){
            let min = m * 15;
            if (min == 0) {min = '00'}
            let time = hour + ':' + min
            times.push(time)
        }
    }
</script>
<select bind:value={$data.employees[id].days[day]['startTime']}>
    {#each times as time}
        <option>{time}</option>
    {/each}
</select>
<select bind:value={$data.employees[id].days[day]['endTime']}>
    {#each times as time}    
        <option>{time}</option>
    {/each}
</select>

