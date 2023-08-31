<script>
    import data from '$lib/stores'
    export let id;
    export let schedule;
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
{#if !schedule}
<select bind:value={$data.employees[id].startTime}>
    {#each times as time}
        <option>{time}</option>
    {/each}
</select>
<select bind:value={$data.employees[id].endTime}>
    {#each times as time}
        <option>{time}</option>
    {/each}
</select>
{:else}
<select bind:value={$data.employees[id].actualStartTime}>
    {#each times as time}
        <option>{time}</option>
    {/each}
</select>
<select bind:value={$data.employees[id].actualEndTime}>
    {#each times as time}
        <option>{time}</option>
    {/each}
</select>
{/if}

