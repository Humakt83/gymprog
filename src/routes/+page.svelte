<script lang="ts">
	import gymprogs from '$lib/resources/gymprogs.json';
	import ProgramList from './ProgramList.svelte';
	import type { ProgramPeriod } from '../types';

	const currentGymProg: ProgramPeriod | undefined = gymprogs.find(prog => prog.current);
</script>

<svelte:head>
	<title>Voimassa</title>
	<meta name="description" content="Personal gym programs app" />
</svelte:head>

<section>
	<h1>
		<div class="dumbbell dumbbell--left">🔩</div>
		<div class="hand hand--left">💪🏻</div> Voimissaan oleva ohjelma 
		<div class="hand hand--right">💪🏻</div><div class="dumbbell">🔩</div>
	</h1>

	<p>Alkaen -> {currentGymProg?.periodStart}</p>

	{#if currentGymProg}
		<ProgramList program={currentGymProg.program}></ProgramList>
	{/if}

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		position: relative;
	}

	@keyframes raise {
		from {
			padding-top: 0;
		}
		to {
			padding-top: 0.7rem;
		}
	}

	@keyframes pump {
		from {
			transform: scale(-1, 1) rotate(45deg);
		}
		to {
			transform: scale(-1, 1) rotate(0);
		}
	}

	@keyframes pump--left {
		from {
			transform: rotate(45deg);
		}
		to {
			transform: rotate(0);
		}
	}

	@media only screen and (max-width: 768px) {
		.hand,
		.dumbbell {
			display: none;
		}
	}

	@media only screen and (min-width: 768px) {
		.hand {
			display: inline-block;
		}

		.hand--right {
			display: inline-block;
			transform: scale(-1, 1);
			animation: 3s infinite alternate pump;		
		}

		.hand--left {
			transform: none;
			animation: 3s infinite alternate pump--left;		
		}

		.dumbbell {
			position: absolute;
			animation: 3s infinite alternate raise;	
			display: inline-block;
		}

		.dumbbell--left {
			left: -38px;
		}
	}

</style>
