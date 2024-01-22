<script>
	import gymprogs from '$lib/resources/gymprogs.json';
    import Program from '../Program.svelte';

	const programs = gymprogs.filter(prog => !prog.current);
    let selectedProgram = programs[0];

    const setSelectedProgram = (program) => {
        selectedProgram = program;
    }
</script>

<svelte:head>
	<title>Vanhat saliohjelmat</title>
	<meta name="description" content="old gym programs" />
</svelte:head>

<section>
	<h1>
        🏃 Vanhat ohjelmat 🏃
	</h1>

	<div>
        {#each programs as prog}
			<div class={`program ${prog == selectedProgram ? 'program--active' : ''}`}>
                <span>Voimassa {prog.periodStart} - {prog.periodEnd}</span>
                <button on:click={() => setSelectedProgram(prog)}>
                    Valitse
                </button>		
            </div>
        {/each}
	</div>

    <Program program={selectedProgram?.program}></Program>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 0.6;
	}

    .program {
        display: flex;
        flex-direction: row;
        column-gap: 0.5rem;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 1rem;
        padding-left: 3px;
        padding-bottom: 3px;
        border-bottom: 2px solid aliceblue;
    }

    .program--active {
        border-bottom: 5px solid aliceblue;
        border-left: 5px solid aliceblue;
    }

    .program span {
        font-weight: bolder;
    }

	h1 {
		width: 100%;
	}

</style>