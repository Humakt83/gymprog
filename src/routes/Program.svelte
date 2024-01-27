<script lang="ts">
    export let program : [{moves: [{name: String, times: number}]}];
</script>

<div>
    {#each program as day, index}
        {#if program.length > 1}
            <h2>Päivä {++index}</h2>
        {/if}
        <ol>
            {#each day.moves as move}
                <li>{move.name} {move.times}</li>
            {/each}
        </ol>
    {/each}
</div>

<style>
</style>
