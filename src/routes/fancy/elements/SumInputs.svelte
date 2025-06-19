<script>
	import { untrack } from 'svelte';

	let a = $state(3),
		b = $state(4);
	let effected = $state(0);
	let sum = $derived(a + b);
	let doubled = $derived.by(() => sum * 2);

	$effect(() => {
		console.log('Effected', sum, doubled);
		untrack(() => effected++);
	});

	// eslint-disable-next-line svelte/no-inspect
	$inspect(doubled, sum, effected);
</script>

<div class="container">
	<input type="number" bind:value={a} min="0" /> +
	<input type="number" bind:value={b} min="0" /> =
	<strong>{sum}</strong>
	<i>Doubled: {doubled}</i>
	<p>Effected: {effected}</p>

	{#if sum % 2 === 0}
		<p>Sum is even</p>
	{:else}
		<p>Sum is odd</p>
	{/if}

	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html '<p>{@html}</p>'}
</div>

<style>
	.container {
		font-family: 'Arial', sans-serif;
		background: linear-gradient(135deg, #f3ec78, #af4261);
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		color: #fff;
		text-align: center;
		width: 300px;
		margin: auto;
	}

	input {
		width: 60px;
		padding: 5px;
		border: none;
		border-radius: 5px;
		text-align: center;
		font-size: 1rem;
		margin: 0 5px;
	}

	input:focus {
		outline: none;
		box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
	}

	strong {
		font-size: 1.5rem;
		margin-left: 10px;
	}

	i {
		display: block;
		margin-top: 10px;
		font-size: 1.2rem;
		color: #ffd700;
	}
</style>
