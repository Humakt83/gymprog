<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import gymprogs from '$lib/resources/gymprogs.json';
    import Program from '../Program.svelte';

	const programs = gymprogs.filter(prog => !prog.current);
    let selectedProgram = programs[0];

    const setSelectedProgram = (program) => {
        selectedProgram = program;
    }
</script>

<svelte:head>
	<title>Vanhat</title>
	<meta name="description" content="old gym programs" />
</svelte:head>

<section>
	<h1>
        Vanhat ohjelmat
	</h1>

	<div>
        <ol>
            {#each programs as prog}
			<li>
                Voimassa {prog.periodStart} - {prog.periodEnd}
                <button on:click={() => setSelectedProgram(prog)}>
                    Valitse
                </button>
            </li>
		{/each}
        </ol>

	</div>

    <Program program={selectedProgram?.program}></Program>

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

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>