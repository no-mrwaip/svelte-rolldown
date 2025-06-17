<script lang="ts">
	type Props = {
		value?: string;
		placeholder?: string;
		type?: 'text' | 'password' | 'email' | 'search' | 'number' | 'tel' | 'url';
		disabled?: boolean;
	};

	let { value = $bindable(''), placeholder = '', type = 'text', disabled = false }: Props = $props();
</script>

<input {value} {placeholder} {type} {disabled} class="ui-input" />

<style>
	.ui-input {
		padding: 0.5em 1em;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 1em;
		outline: none;
		transition: border 0.2s;
		background: #fff;
		color: #222;
	}
	.ui-input:focus {
		border-color: #0070f3;
	}
	.ui-input[disabled] {
		background: #f3f3f3;
		color: #aaa;
		border-color: #e0e0e0;
		cursor: not-allowed;
		opacity: 0.7;
	}
</style>
