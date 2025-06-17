<script>
	export let items = [1, 2, 3, 4, 5];
</script>

<ul>
	{#each items as item (item)}
		<li>Item #{item}</li>
	{/each}
</ul>
