<script>
    import Employees from '$lib/components/Employees.svelte'
    import data from '$lib/stores.js'
    import update from '$lib/update.js'
    import Schedule from '$lib/components/Schedule.svelte'
    import toggleAvailable from '$lib/toggleAvailable.js'
    $: toggleAvailable($data.employees)
    function reset() {
        localStorage.clear()
        location.reload()
    }
</script>
<Employees /><br>
<button on:click={() => update($data)}>Update</button><br>
<Schedule />
<br><br><br><br>
<button style='color:red;' type='button' on:click={() => reset()}>reset</button>