<script>
	let show = false;
</script>

<button on:click={() => (show = !show)}>{show ? 'Hide' : 'Show'} Secret</button>
{#if show}
	<p class="secret">🎉 This is a secret message!</p>
{/if}

<style>
	.secret {
		color: #16a34a;
		font-weight: bold;
	}
</style>
