<script lang="ts">
	let value = $state('');

	let reversed = $derived(value.split('').reverse().join(''));

	type Props = {
		submit: VoidFunction;
	};

	let props: Props = $props();
</script>

<h1>Welcome to SvelteKit</h1>

<p>
	Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
</p>

<input bind:value />

{props.submit}
{reversed}
