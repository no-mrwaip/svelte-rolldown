<script lang="ts">
	import Button from '../../components/ui-kit/Button.svelte';
	import Link from '../../components/ui-kit/Link.svelte';
</script>

<header class="sticky-header">
	<nav>
		<div class="logo">MyApp</div>
		<ul>
			<li><a href="#hero">Home</a></li>
			<li><a href="#features">Features</a></li>
			<li><a href="#about">About</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
	</nav>
</header>

<section id="hero" class="hero">
	<h1>Lorem Ipsum Dolor Sit Amet</h1>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu
		consectetur.
	</p>
	<Button label="Get Started" />
</section>

<section id="features" class="section">
	<h2>Features</h2>
	<div class="card-row">
		<div class="card">
			<img src="https://picsum.photos/seed/feature1/200/120" alt="Feature 1" />
			<h3>Fast Performance</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt
				consectetur.
			</p>
			<Link href="#">Learn more</Link>
		</div>
		<div class="card">
			<img src="https://picsum.photos/seed/feature2/200/120" alt="Feature 2" />
			<h3>Modern Design</h3>
			<p>Quisque euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis.</p>
			<Link href="#">Learn more</Link>
		</div>
		<div class="card">
			<img src="https://picsum.photos/seed/feature3/200/120" alt="Feature 3" />
			<h3>Easy Integration</h3>
			<p>Morbi facilisis, justo eu convallis placerat, felis enim ornare urna, non hendrerit.</p>
			<Link href="#">Learn more</Link>
		</div>
	</div>
</section>

<section id="about" class="section">
	<h2>About Us</h2>
	<div class="about-content">
		<img src="https://picsum.photos/seed/about/180/180" alt="About" class="about-img" />
		<div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non laoreet dui. Sed nec
				facilisis enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
				ac turpis egestas.
			</p>
			<ul>
				<li>Over 10 years of experience</li>
				<li>Trusted by 1000+ clients</li>
				<li>Global reach</li>
			</ul>
			<Link href="#contact">Contact us</Link>
		</div>
	</div>
</section>

<section id="contact" class="section">
	<h2>Contact</h2>
	<div class="contact-row">
		<div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et
				faucibus.
			</p>
			<p>Email: <Link href="mailto:info@myapp.com">info@myapp.com</Link></p>
			<p>Phone: <Link href="tel:+1234567890">+1 234 567 890</Link></p>
			<Link href="#">Support Center</Link>
		</div>
		<img src="https://picsum.photos/seed/contact/180/180" alt="Contact" class="contact-img" />
	</div>
</section>

<footer class="footer">
	<div class="footer-content">
		<div class="footer-brand">
			<img src="/favicon.png" alt="MyApp Logo" class="footer-logo" />
			<span class="footer-title">MyApp</span>
		</div>
		<nav class="footer-links">
			<Link href="#">Privacy Policy</Link>
			<span class="footer-sep">|</span>
			<Link href="#">Terms of Service</Link>
			<span class="footer-sep">|</span>
			<Link href="#">Careers</Link>
		</nav>
		<div class="footer-social">
			<a href="#" aria-label="Twitter" class="footer-social-link"
				><svg width="22" height="22" fill="none" viewBox="0 0 24 24"
					><path
						fill="#1da1f2"
						d="M22.46 5.924c-.793.352-1.646.59-2.54.698a4.48 4.48 0 0 0 1.965-2.47 8.94 8.94 0 0 1-2.828 1.08A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.01-4.49 4.49 0 .352.04.695.116 1.022C7.728 9.36 4.1 7.5 1.67 4.88a4.48 4.48 0 0 0-.61 2.26c0 1.56.796 2.94 2.01 3.75a4.48 4.48 0 0 1-2.034-.563v.057c0 2.18 1.55 4 3.61 4.42-.378.104-.776.16-1.187.16-.29 0-.57-.028-.844-.08.57 1.78 2.23 3.08 4.2 3.12A8.98 8.98 0 0 1 2 19.54a12.67 12.67 0 0 0 6.86 2.01c8.23 0 12.74-6.82 12.74-12.74 0-.19-.004-.38-.013-.57A9.1 9.1 0 0 0 24 4.59a8.98 8.98 0 0 1-2.54.7z"
					/></svg
				></a
			>
			<a href="#" aria-label="GitHub" class="footer-social-link"
				><svg width="22" height="22" fill="none" viewBox="0 0 24 24"
					><path
						fill="#222"
						d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 7.43c.85.004 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
					/></svg
				></a
			>
			<a href="#" aria-label="LinkedIn" class="footer-social-link"
				><svg width="22" height="22" fill="none" viewBox="0 0 24 24"
					><path
						fill="#0077b5"
						d="M20.45 20.45h-3.55v-5.6c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.7H9.34V9h3.41v1.56h.05c.48-.91 1.65-1.86 3.39-1.86 3.63 0 4.3 2.39 4.3 5.5v6.25zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"
					/></svg
				></a
			>
		</div>
	</div>
	<div class="footer-bottom">
		<p>&copy; 2025 MyApp. Lorem ipsum dolor sit amet.</p>
	</div>
</footer>

<style>
	.sticky-header {
		position: sticky;
		top: 0;
		background: #fff;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
		z-index: 100;
	}
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 900px;
		margin: 0 auto;
		padding: 1em 2em;
	}
	.logo {
		font-weight: bold;
		font-size: 1.3em;
		color: #0070f3;
	}
	nav ul {
		display: flex;
		gap: 2em;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	nav a {
		color: #222;
		text-decoration: none;
		font-weight: 500;
		transition: color 0.2s;
	}
	nav a:hover {
		color: #0070f3;
	}
	.hero {
		background: linear-gradient(90deg, #e0e7ff 0%, #fff 100%);
		padding: 5em 2em 4em 2em;
		text-align: center;
	}
	.hero h1 {
		font-size: 2.5em;
		margin-bottom: 0.5em;
	}
	.hero p {
		font-size: 1.2em;
		margin-bottom: 1.5em;
	}
	.section {
		max-width: 800px;
		margin: 3em auto;
		padding: 2em;
		background: #f9f9f9;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
	}
	.section h2 {
		margin-bottom: 0.5em;
	}
	.card-row {
		display: flex;
		gap: 2em;
		justify-content: center;
		margin-top: 2em;
	}
	.card {
		background: #fff;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
		padding: 1.5em 1em;
		width: 250px;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.card img {
		border-radius: 6px;
		margin-bottom: 1em;
		width: 100%;
		height: auto;
	}
	.card h3 {
		margin: 0.5em 0 0.3em 0;
	}
	.card p {
		font-size: 1em;
		margin-bottom: 1em;
	}
	.card .ui-link {
		margin-top: auto;
	}
	.about-content {
		display: flex;
		gap: 2em;
		align-items: center;
	}
	.about-img {
		border-radius: 50%;
		width: 180px;
		height: 180px;
		object-fit: cover;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
	}
	.about-content ul {
		margin: 1em 0;
		padding-left: 1.2em;
	}
	.contact-row {
		display: flex;
		gap: 2em;
		align-items: center;
	}
	.contact-img {
		border-radius: 16px;
		width: 180px;
		height: 180px;
		object-fit: cover;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
	}
	.footer {
		background: #181a1b;
		color: #fff;
		padding: 2.5em 0 1.5em 0;
		margin-top: 3em;
		font-size: 1em;
		border-top: 1px solid #23272a;
	}
	.footer-content {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		max-width: 900px;
		margin: 0 auto;
		gap: 2em;
	}
	.footer-brand {
		display: flex;
		align-items: center;
		gap: 0.7em;
	}
	.footer-logo {
		width: 36px;
		height: 36px;
		border-radius: 8px;
		background: #fff;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
	}
	.footer-title {
		font-size: 1.3em;
		font-weight: 700;
		color: #fff;
	}
	.footer-links {
		display: flex;
		align-items: center;
		gap: 1em;
		font-size: 1em;
	}
	.footer-sep {
		color: #555;
		margin: 0 0.5em;
	}
	.footer-social {
		display: flex;
		gap: 1em;
	}
	.footer-social-link {
		display: flex;
		align-items: center;
		background: #23272a;
		border-radius: 50%;
		width: 36px;
		height: 36px;
		justify-content: center;
		transition: background 0.2s;
	}
	.footer-social-link:hover {
		background: #333;
	}
	.footer-bottom {
		text-align: center;
		margin-top: 2em;
		color: #bbb;
		font-size: 0.95em;
	}
	@media (max-width: 900px) {
		.card-row,
		.about-content,
		.contact-row {
			flex-direction: column;
			align-items: stretch;
		}
		.card {
			width: 100%;
		}
		.about-img,
		.contact-img {
			margin: 0 auto 1em auto;
		}
		.footer-content {
			flex-direction: column;
			align-items: stretch;
			gap: 1.5em;
		}
		.footer-brand,
		.footer-links,
		.footer-social {
			justify-content: center;
		}
	}
</style>
