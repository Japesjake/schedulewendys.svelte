<script>
    import Employees from '$lib/components/Employees.svelte'
    import EmployeePositions from '$lib/components/EmployeePositions.svelte'
    import data from '$lib/stores.js'
    import update from '$lib/update.js'
    import calculateHours from '$lib/calculateHours';
    $: update($data)
    function reset() {
        localStorage.clear()
        location.reload()
    }
</script>
Everything is saved locally on your computer. Using another computer will have new data.<br><br>
<!-- <EmployeePositions /> -->
<Employees />
Warning! This button resets everything to default data:
<button type='button' on:click={reset}>reset</button>
<button type='button' on:click={calculateHours(1, 2)}>test</button>
