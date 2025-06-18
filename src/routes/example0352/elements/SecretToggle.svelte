<script>
	let show = $state(false);
</script>

<button onclick={() => (show = !show)}>{show ? 'Hide' : 'Show'} Secret</button>
{#if show}
	<p class="secret">🎉 This is a secret message!</p>
{/if}

<style>
	.secret {
		color: #16a34a;
		font-weight: bold;
	}
</style>
