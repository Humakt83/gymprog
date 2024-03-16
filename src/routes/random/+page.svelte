<script lang="ts">

	import gymprogs from '$lib/resources/gymprogs.json';
    import ProgramList from '../ProgramList.svelte';
    import type { ProgramDay } from '../../types';

	const moves = gymprogs.flatMap(program => program.program)
        .flatMap(program => program.moves).map(move => move.name);

    const generateProgram = (intensityModifier: number, moveVariety: number): ProgramDay[] => {
        const selectedMoves: string[] = [];

        while (selectedMoves.length < moveVariety) {
            const moveToAdd: string = moves[Math.floor(Math.random() * moves.length)];
            if (!selectedMoves.includes(moveToAdd)) {
                selectedMoves.push(moveToAdd);
            }
        }

        let amountOfTimesToAdd = (moveVariety * intensityModifier) - moveVariety;
        const capToTimes = intensityModifier + 1;

        const moveTimes = selectedMoves.map(_ => 1);
        while (amountOfTimesToAdd > 0) {
            const modifyThis = Math.floor(Math.random() * moveTimes.length);
            if (moveTimes[modifyThis] < capToTimes) {
                moveTimes[modifyThis] += 1;
                amountOfTimesToAdd -= 1;
            }
        }

        const mappedMoves = selectedMoves.map((move, index) => {
            return {name: move, times: moveTimes[index]}
        });
        
        return [{moves: mappedMoves}];
    }

    let intensityModifier = 3;
    let moveVariety = 8;

    let generatedProgram = generateProgram(intensityModifier, moveVariety);

    const regenerateProgram = () => generatedProgram = generateProgram(intensityModifier, moveVariety);

</script>

<svelte:head>
	<title>Satunnainen saliohjelma</title>
	<meta name="description" content="randomly generated gym program" />
</svelte:head>

<section>
	<h1>
        ⚡ Satunnainen ohjelma ⚡
	</h1>

    <div class="setup">
        <h2>Liikkeitä</h2>
        <div class="buttonGroup">
            <button class={moveVariety == 4? 'selected' : ''} on:click={() => moveVariety = 4}>Vähän</button>
            <button class={moveVariety == 6? 'selected' : ''} on:click={() => moveVariety = 6}>Normaali</button>
            <button class={moveVariety == 8? 'selected' : ''} on:click={() => moveVariety = 8}>Paljon</button>
            <button class={moveVariety == 10? 'selected' : ''} on:click={() => moveVariety = 10}>Valtavasti</button>
            <button class={moveVariety == 12? 'selected' : ''} on:click={() => moveVariety = 12}>Riittää jo</button>
        </div>

        <h2>Intensiteetti</h2>
        
        <div class="buttonGroup">
            <button class={intensityModifier == 2? 'selected' : ''} on:click={() => intensityModifier = 2}>Kevyin</button>
            <button class={intensityModifier == 3? 'selected' : ''} on:click={() => intensityModifier = 3}>Kevyt</button>
            <button class={intensityModifier == 4? 'selected' : ''} on:click={() => intensityModifier = 4}>Normaali</button>
            <button class={intensityModifier == 5? 'selected' : ''} on:click={() => intensityModifier = 5}>Raskas</button>
            <button class={intensityModifier == 6? 'selected' : ''} on:click={() => intensityModifier = 6}>Raskain</button>
        </div>

        <button on:click={() => regenerateProgram()}>Generoi</button>
    </div>

    <h2>Satunnainen ohjelma</h2>

    <ProgramList program={generatedProgram}></ProgramList>

</section>

<style>

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 0.6;
	}

    .setup {
        text-align: center;
        min-width: 40vw;
        background-color: aliceblue;
        border-radius: 5px;
        padding: 0.2rem 1rem 1rem;
        border: 2px solid var(--color-bg-2);
    }

    .selected {
        background-color: var(--color-bg-2);
    }

    .buttonGroup {
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 2rem;
        padding-bottom: 0.2rem;
        border-bottom: 3px solid var(--color-bg-2);
    }

    .selected:hover, .selected:focus {
        border-color: var(--color-theme-2);
    }

	h1 {
		width: 100%;
	}

</style>