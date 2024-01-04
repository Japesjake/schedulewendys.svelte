<script>
    import Employees from '$lib/components/Employees.svelte'
    import EmployeePositions from '$lib/components/EmployeePositions.svelte'
    import data from '$lib/stores.js'
    import update from '$lib/update.js'
    $: update($data)
    function reset() {
        localStorage.clear()
    }
</script>
<button type='button' on:click={reset}>reset</button>
<!-- <EmployeePositions /> -->
<Employees />