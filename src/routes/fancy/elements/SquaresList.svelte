<script>
	let n = 5;
	$: squares = Array.from({length: n}, (_, i) => (i+1)*(i+1));
</script>
<input type="range" min="1" max="10" bind:value={n} />
<p>Squares up to {n}:</p>
<ul>
	{#each squares as sq (sq)}
		<li>{sq}</li>
	{/each}
</ul>
