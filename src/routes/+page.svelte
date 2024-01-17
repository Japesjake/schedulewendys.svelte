<script>
    import Employees from '$lib/components/Employees.svelte'
    import data from '$lib/stores.js'
    import update from '$lib/update.js'
    import Schedule from '$lib/components/Schedule.svelte'
    // $: update($data)
    function reset() {
        localStorage.clear()
        location.reload()
    }
</script>
<Employees />
<Schedule />
<br><br><br><br>
<button style='color:red;' type='button' on:click={() => reset()}>reset</button>
<!-- <button>Update</button> -->