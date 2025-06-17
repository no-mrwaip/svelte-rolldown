<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, slide } from 'svelte/transition';
	type Weather = { temp: number; desc: string; city: string };
	let weather = $state<Weather | null | undefined>(undefined);

	let loading = $state(true);
	let error = $state('');

	const CITY = 'London';

	onMount(async () => {
		try {
			weather = null; // Reset weather state before fetching

			await new Promise((resolve) => setTimeout(resolve, 1000));

			const res = await fetch(
				`https://api.open-meteo.com/v1/forecast?latitude=51.5072&longitude=-0.1276&current_weather=true`
			);
			if (!res.ok) throw new Error('Failed to fetch weather');
			const data = await res.json();

			weather = {
				temp: data.current_weather.temperature,
				desc: data.current_weather.weathercode === 0 ? 'Clear' : 'Cloudy',
				city: CITY
			};
		} catch (e) {
			console.error('Weather fetch error:', e);
			error = 'Could not load weather.';
		} finally {
			loading = false;
		}
	});
</script>

{#if weather !== undefined}
	<div class="weather-widget" in:fly={{ y: 100, duration: 400 }}>
		{#if loading}
			<div class="weather-main">
				<div class="weather-loading">Loading weather...</div>
			</div>
		{:else if error}
			<div class="weather-main">
				<div class="weather-error">{error}</div>
			</div>
		{:else if weather}
			<div class="weather-main" in:slide={{ duration: 400 }}>
				<div class="weather-city">{weather.city}</div>
				<div class="weather-temp">{weather.temp}°C</div>
				<div class="weather-desc">{weather.desc}</div>
			</div>
		{/if}
	</div>
{/if}

<style>
	.weather-widget {
		position: fixed;
		right: 2em;
		bottom: 2em;
		background: #fff;
		color: #222;
		border-radius: 12px;
		box-shadow: 0 2px 16px rgba(0, 0, 0, 0.13);
		padding: 1.2em 1.5em;
		min-width: 160px;
		z-index: 2000;
		font-family: inherit;
		font-size: 1em;
		display: flex;
		flex-direction: column;
		align-items: center;
		min-width: 200px;
	}
	.weather-main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.2em;
	}
	.weather-city {
		font-weight: 600;
		font-size: 1.1em;
		margin-bottom: 0.2em;
	}
	.weather-temp {
		font-size: 2em;
		font-weight: 700;
		color: #0070f3;
	}
	.weather-desc {
		font-size: 1em;
		color: #555;
	}
	.weather-loading,
	.weather-error {
		color: #888;
		font-size: 1em;
	}
</style>
