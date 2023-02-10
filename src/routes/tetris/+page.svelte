<script lang="ts">
	//import type { PageData } from './$types'

	//export let data: PageData

	//console.log(data)

</script>

<div id='center'>
    
	<div id='game_container'>
        {#each Array(180) as _, i}
            <div id={'box_'+i}></div>
        {/each}
    </div>

	<div id='score_container'>
        <div id='next_block'>
            d
        </div>
        <div id='scores'>
            <h1>Level</h1>
            <h1>Score</h1>
            <h1>Lines</h1>
        </div>
    </div>

</div>

<style>
    #center{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        background-color: grey;
        height: 72vh;
        padding: 100px;
    }

    #center > * {
        height: 100%;
    }
    #center > :first-child{
        border: 4px solid #a6adbaff;
        height: 100%;
        aspect-ratio: 10/18;
    }
    #center > :nth-child(2){
        height: 100%;
        background-color: green;
    }


    #game_container{
        display: grid;
        gap: 1px;
        grid-template-columns: repeat(10, minmax(0, 1fr));
        width: fit-content;
    }

    #game_container > * {
        height: 5.55%;
        aspect-ratio: 1/1;
        background-color: yellow;

    }






    #next_block{
        background-color: red ;
        padding: 100px;
    }

    #score_container{
        background-color: red;
    }

</style>
