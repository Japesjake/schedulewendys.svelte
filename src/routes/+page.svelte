<script>
    import Employees from '$lib/components/Employees.svelte'
    import EmployeePositions from '$lib/components/EmployeePositions.svelte'
    import data from '$lib/stores.js'
    import update from '$lib/update.js'
    $: update($data)
</script>

<!-- <EmployeePositions /> -->
<Employees />