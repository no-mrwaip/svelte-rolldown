<script>
	let a = $state(3),
		b = $state(4);
	let sum = $derived(a + b);
</script>

<input type="number" bind:value={a} min="0" /> +
<input type="number" bind:value={b} min="0" /> =
<strong>{sum}</strong>
