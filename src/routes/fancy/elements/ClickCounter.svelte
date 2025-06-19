<script>
	import Button from '../../../components/ui-kit/Button.svelte';
	let count = $state(0);
</script>

<Button theme="primary" onclick={() => count++}>Clicked {count} times</Button>
