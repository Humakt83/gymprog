<script>
	import gymprogs from '$lib/resources/gymprogs.json';
	import Program from './Program.svelte';

	const currentGymProg = gymprogs.find(prog => prog.current);
</script>

<svelte:head>
	<title>Voimassa</title>
	<meta name="description" content="Personal gym programs app" />
</svelte:head>

<section>
	<h1>
		🔩💪🏻 Voimissaan oleva ohjelma 💪🏻🔩
	</h1>

	<p>Alkaen -> {currentGymProg?.periodStart}</p>

	<Program program={currentGymProg?.program}></Program>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
