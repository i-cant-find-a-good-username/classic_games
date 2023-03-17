<script lang="ts">
	import { enhance } from '$app/forms';
    import settings from '$lib/images/settings.svg';
	import type { PageData, ActionData } from './$types';

	export let data: PageData;
	export let form: ActionData;

    let diffculty = data.chosen_diff


    



    

</script>






<div id='center'>
    <div id='game_container'>
        {diffculty}
        {#if diffculty === 'easy'}
	        <div id="main">
	        	{#each Array(64) as _, i}
                    <form method="POST" action="?/pressed_cell" use:enhance={() => {return ({ update }) => {update({ reset: false })}}} >
                        <input type="hidden" name="cell" value={'cell_'+i}>
                        <button id={'cell_'+i}></button>
                    </form>
                {/each}
	        </div>
        {/if}
        
        {#if diffculty === 'normal'}
	        <div id="main2">
	        	{#each Array(256) as _, i}
                    <form method="POST" action="?/pressed_cell" use:enhance={() => {return ({ update }) => {update({ reset: false })}}} >
                        <input type="hidden" name="cell" value={'cell_'+i}>
                        <button id={'cell_'+i}></button>
                    </form>
                {/each}
	        </div>
        {/if}
        
        {#if diffculty === 'hard'}
            <div id="main3">
	        	{#each Array(512) as _, i}
                    <form method="POST" action="?/pressed_cell" use:enhance={() => {return ({ update }) => {update({ reset: false })}}} >
                        <input type="hidden" name="cell" value={'cell_'+i}>
                        <button id={'cell_'+i}></button>
                    </form>
                {/each}
            </div>
        {/if}
    </div>


    <div id='settings'>
        <form  method="POST" action="?/diffculty_change" 
            use:enhance={() => {return ({ update }) => {update()}}} 
        >
            <select name="diffculty" id="diffculty"  >
                <option value="easy">easy</option>
                <option value="normal">normal</option>
                <option value="hard">hard</option>
            </select>
            <button id='submit_change' > change </button>
        </form>

        <div>
            <img src={settings} alt="">
        </div>
    </div>

</div>

<style>
    #center{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #game_container{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #main, #main2 ,#main3{
        display: grid;
        gap: 2px;
        width: fit-content;
    }
    #main{
        grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    #main2{
        grid-template-columns: repeat(16, minmax(0, 1fr));
    }
    #main3{
        grid-template-columns: repeat(32, minmax(0, 1fr));
    }

    
    #main > form{
        height: 40px;
        width: 40px;
    }
    #main2 > form{
        height: 25px;
        width: 25px;
    }
    #main3 > form{
        height: 20px;
        width: 20px;
    }
    #main > form > *{
        height: 100%;
        width: 100%;
        border: none;
        cursor: pointer;
    }
    #main2 > form > *{
        height: 100%;
        width: 100%;
        border: none;
        cursor: pointer;
    }
    #main3 > form > *{
        height: 100%;
        width: 100%;
        border: none;
        cursor: pointer;
    }


    #settings{
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #diffculty, #submit_change{
        background-color: transparent;
        border: 2px solid #a6adbaff;
        padding: 10px;
        border-radius: 10px;
		color: #a6adbaff;
		font-size: 16px;
        cursor: pointer;
		font-weight: 600;
    }

    #settings > :nth-child(2){
        margin-left: 20px;
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: 2px solid #a6adbaff;
		border-radius: 10px;
		border: none;
		color: #a6adbaff;
        cursor: pointer;
    }
    #settings > :nth-child(2):hover{
		background-color: #1f242d;

    }

    :global(.mine){
        background-color: red !important;
    }


</style>
