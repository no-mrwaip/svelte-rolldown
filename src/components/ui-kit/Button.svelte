<script lang="ts">
	type Props = {
		label?: string;
		disabled?: boolean;
		type?: 'button' | 'submit' | 'reset';
	};

	let { label = '', disabled = false, type = 'button' }: Props = $props();
</script>

<button {type} {disabled} class="ui-button">
	{label}
</button>

<style>
	.ui-button {
		padding: 0.5em 1.5em;
		background: #0070f3;
		color: #fff;
		border: none;
		border-radius: 4px;
		font-size: 1em;
		cursor: pointer;
		transition: background 0.2s;
	}
	.ui-button:disabled {
		background: #ccc;
		cursor: not-allowed;
	}
	.ui-button:hover:not(:disabled) {
		background: #005bb5;
	}
</style>
