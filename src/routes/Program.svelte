<script lang="ts">
    export let program : [{moves: [{name: String, times: number}]}];
</script>

<div>
    {#each program as day, index}
        <h2>Päivä {++index}</h2>
        <ol>
            {#each day.moves as move}
                <li>{move.name} {move.times}</li>
            {/each}
        </ol>
    {/each}
</div>

<style>
</style>
