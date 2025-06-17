<script lang="ts">
	import Input from '../components/ui-kit/Input.svelte';
	import Toggle from '../components/ui-kit/Toggle.svelte';
	import Button from '../components/ui-kit/Button.svelte';
	import WeatherWidget from '../components/WeatherWidget.svelte';
	import {
		User,
		Email,
		Phone,
		Location,
		City,
		Country,
		Company,
		Job,
		Website,
		Notes
	} from '../icons';

	let form = $state({
		name: '',
		email: '',
		phone: '',
		address: '',
		city: '',
		country: '',
		company: '',
		job: '',
		website: '',
		notes: '',
		agree: false,
		subscribe: false,
		updates: false
	});
</script>

<main class="form-main">
	<h1>Generic Form Example</h1>
	<form class="generic-form" autocomplete="off">
		<div class="form-row">
			<Input value={form.name} placeholder="Name" icon={User} />
			<Input value={form.email} placeholder="Email" type="email" icon={Email} />
		</div>
		<div class="form-row">
			<Input value={form.phone} placeholder="Phone" type="tel" icon={Phone} />
			<Input value={form.address} placeholder="Address" icon={Location} />
		</div>
		<div class="form-row">
			<Input value={form.city} placeholder="City" icon={City} />
			<Input value={form.country} placeholder="Country" icon={Country} />
		</div>
		<div class="form-row">
			<Input value={form.company} placeholder="Company" disabled={!form.agree} icon={Company} />
			<Input value={form.job} placeholder="Job Title" disabled={!form.agree} icon={Job} />
		</div>
		<div class="form-row">
			<Input
				value={form.website}
				placeholder="Website"
				type="url"
				disabled={!form.subscribe}
				icon={Website}
			/>
			<Input value={form.notes} placeholder="Notes" disabled={!form.updates} icon={Notes} />
		</div>
		<div class="checkbox-row">
			<Toggle bind:checked={form.agree} label="I agree to the terms" />
			<Toggle bind:checked={form.subscribe} label="Subscribe to newsletter" />
			<Toggle bind:checked={form.updates} label="Receive updates" />
		</div>
		<div class="form-actions">
			<Button label="Accept" type="submit" />
			<Button label="Decline" theme="negative" type="button" />
		</div>
	</form>
	<WeatherWidget />
</main>

<style>
	.form-main {
		max-width: 700px;
		min-width: 320px;
		margin: 3em auto;
		background: #fff;
		border-radius: 10px;
		box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
		padding: 2.5em 2em 2em 2em;
	}
	.generic-form {
		display: flex;
		flex-direction: column;
		gap: 1.2em;
	}
	.form-row {
		display: flex;
		gap: 1em;
	}
	.form-row > :global(.ui-input) {
		flex: 1 1 0;
	}
	@media (max-width: 600px) {
		.form-row {
			flex-direction: column;
			gap: 0.7em;
		}
	}
	.checkbox-row {
		display: flex;
		flex-direction: column;
		gap: 0.7em;
		margin: 1em 0 0.5em 0;
	}
	.form-actions {
		display: flex;
		gap: 1.5em;
		margin-top: 1.5em;
		justify-content: flex-end;
	}
</style>
