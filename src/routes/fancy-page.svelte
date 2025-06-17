<script lang="ts">
	// Fancy page with random content
	import Button from '../components/ui-kit/Button.svelte';
	import WeatherWidget from '../components/WeatherWidget.svelte';
	import { City, Country } from '../icons';

	const quotes = [
		"The best way to predict the future is to invent it.",
		"Simplicity is the soul of efficiency.",
		"Creativity is intelligence having fun.",
		"Do not wait to strike till the iron is hot; but make it hot by striking.",
		"The only limit to our realization of tomorrow is our doubts of today."
	];
	const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

	const cities = [
		{ name: 'Tokyo', country: 'Japan', icon: City },
		{ name: 'Paris', country: 'France', icon: City },
		{ name: 'New York', country: 'USA', icon: City },
		{ name: 'Sydney', country: 'Australia', icon: City },
		{ name: 'Cairo', country: 'Egypt', icon: City }
	];
	const randomCity = cities[Math.floor(Math.random() * cities.length)];
</script>

<main class="fancy-main">
	<h1>🌟 Welcome to the Fancy Page! 🌟</h1>
	<section class="quote-section">
		<blockquote>“{randomQuote}”</blockquote>
		<footer>— Random Inspiration</footer>
	</section>

	<section class="city-section">
		<h2>Featured City</h2>
		<div class="city-card">
			<svelte:component this={randomCity.icon} class="city-icon" />
			<div>
				<strong>{randomCity.name}</strong>
				<p><svelte:component this={Country} class="country-icon" /> {randomCity.country}</p>
			</div>
		</div>
	</section>

	<section class="weather-section">
		<h2>Weather Widget</h2>
		<WeatherWidget />
	</section>

	<div class="actions">
		<Button label="Go Home" on:click={() => window.location.href = '/'} />
	</div>
</main>

<style>
.fancy-main {
	max-width: 700px;
	margin: 3em auto;
	background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
	border-radius: 16px;
	box-shadow: 0 4px 32px rgba(60, 60, 120, 0.10);
	padding: 2.5em 2em 2em 2em;
}
.quote-section {
	background: #fffbe7;
	border-radius: 8px;
	padding: 1.5em;
	margin-bottom: 2em;
	box-shadow: 0 1px 8px rgba(255, 215, 0, 0.07);
	text-align: center;
}
.quote-section blockquote {
	font-size: 1.3em;
	font-style: italic;
	color: #7c3aed;
}
.city-section {
	margin-bottom: 2em;
}
.city-card {
	display: flex;
	align-items: center;
	gap: 1.2em;
	background: #f1f5f9;
	border-radius: 8px;
	padding: 1em 1.5em;
	box-shadow: 0 1px 6px rgba(60, 60, 120, 0.05);
}
.city-icon {
	width: 48px;
	height: 48px;
}
.country-icon {
	width: 18px;
	height: 18px;
	vertical-align: middle;
	margin-right: 0.3em;
}
.weather-section {
	margin-bottom: 2em;
}
.actions {
	display: flex;
	justify-content: flex-end;
}
@media (max-width: 600px) {
	.fancy-main {
		padding: 1.2em 0.5em;
	}
	.city-card {
		flex-direction: column;
		align-items: flex-start;
	}
}
</style>
