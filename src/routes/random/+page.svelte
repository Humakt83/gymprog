<script>
	import gymprogs from '$lib/resources/gymprogs.json';
    import Program from '../Program.svelte';

	const moves = gymprogs.flatMap(program => program.program)
        .flatMap(program => program.moves).map(move => move.name);

    const generateProgram = () => {
        const selectedMoves = [];

        while (selectedMoves.length < 8) {
            selectedMoves.push(moves[Math.floor(Math.random() * moves.length)]);
        }

        const mappedMoves = selectedMoves.map(move => {
                return {name: move, times: Math.ceil(Math.random() * 3)}
            });
        
        return [{moves: mappedMoves}];
    }

    const generatedProgram = generateProgram();

</script>

<svelte:head>
	<title>Satunnainen saliohjelma</title>
	<meta name="description" content="randomly generated gym program" />
</svelte:head>

<section>
	<h1>
        🏃 Satunnainen ohjelma 🏃
	</h1>

    <Program program={generatedProgram}></Program>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

</style>