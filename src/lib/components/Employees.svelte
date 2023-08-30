<script>
    import data from '$lib/stores.js'
    import Employee from '$lib/classes/Employee.js'
    function addInput (id) {
		let defaultPerson = new Employee('')
		$data.employees.splice(id + 1, 0, defaultPerson);
		$data = $data;
	}
    function removeInput (id) {
		$data.employees.splice(id,1);
		$data = $data
	}
	function toggleManager (id) {
		if ($data.employees[id].manager == false) {
			$data.employees[id].manager = true
		} else {
			$data.employees[id].manager = false
		}
	}
</script>
<div style='display: flex'>
<div style='padding-left: 52px;'>Employee:</div>
<div style='padding-left: 40px;'>Manager?</div>
</div>
{#each $data.employees as employee, id (employee.id)}
<button tabindex = -1 on:click={removeInput(id)}>-</button>
<button tabindex = -1 on:click={addInput(id)}>+</button>
<input style='width: 7em;' tabindex = 0 type="text" placeholder="name" bind:value={employee.name}>
<input type='checkbox' on:click={toggleManager(id)}>
<br>
{/each}
<button on:click={addInput($data.employees.length)}>+</button>

<style>
	.employee {

	}
</style>