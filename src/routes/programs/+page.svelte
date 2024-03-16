<script lang="ts">
	import gymprogs from '$lib/resources/gymprogs.json';
	import type { ProgramPeriod } from '../../types';
    import ProgramList from '../ProgramList.svelte';

	const programs = gymprogs.filter(prog => !prog.current);
    let selectedProgram: ProgramPeriod = programs[0];

    const setSelectedProgram = (program: ProgramPeriod) => {
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

    <ProgramList program={selectedProgram?.program}></ProgramList>

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