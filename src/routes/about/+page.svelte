<svelte:head>
	<title>Muuta</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section>
	<h1>Muuta</h1>

	<p>Saitti saliohjelmilleni. Tehty käyttäen <a href="https://kit.svelte.dev">SvelteKit</a>.</p>

	<h2>Saliaiheisia linkkejä</h2>

	<div class="links">
		<a href="https://www.youtube.com/@athleanx">ATHLEAN-X</a>

		<a href="https://www.treeniohjelma.org/liikepankki/">Liikepankki</a>
	</div>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 0.6;
	}

	.links {
		display: flex;
		flex-direction: column;
		row-gap: 0.4rem;
	}


</style>
