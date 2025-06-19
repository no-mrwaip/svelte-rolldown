<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		disabled?: boolean;
		type?: 'button' | 'submit' | 'reset';
		theme?: 'primary' | 'negative';
		onclick?: () => void;
		children?: Snippet;
	};

	let { children, disabled = false, onclick, type = 'button', theme = 'primary' }: Props = $props();
</script>

<button {type} {disabled} class="ui-button {theme}" {onclick}>
	{@render children?.()}
</button>

<style>
	.ui-button {
		padding: 0.5em 1.5em;
		border: none;
		border-radius: 4px;
		font-size: 1em;
		cursor: pointer;
		transition: background 0.2s;
	}
	.ui-button.primary {
		background: #0070f3;
		color: #fff;
	}
	.ui-button.primary:disabled {
		background: #ccc;
		color: #fff;
		cursor: not-allowed;
	}
	.ui-button.primary:hover:not(:disabled) {
		background: #005bb5;
	}
	.ui-button.negative {
		background: #fff0f0;
		color: #d32f2f;
		border: 1px solid #d32f2f;
	}
	.ui-button.negative:disabled {
		background: #f8d7da;
		color: #d32f2f;
		cursor: not-allowed;
	}
	.ui-button.negative:hover:not(:disabled) {
		background: #d32f2f;
		color: #fff;
	}
</style>
