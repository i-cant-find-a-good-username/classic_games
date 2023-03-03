<script lang="ts">
    import settings from '$lib/images/settings.svg';
	import type { PageData } from './$types';
	export let data: PageData;

    let diffculty = 'easy'

    const box_clicked = async (e: any) => {
        console.log(e.target.id)
        const response = await fetch('?/clicked_box', {
            method: 'POST',
            body: JSON.stringify({ 'f':0,'ff': 10 }),
            headers: {
              'content-type': 'application/json'
            }
        });
        
        let al = await response.json()
        alert(JSON.stringify(al))
    }

    const change_diff = async (e: any) => {
        diffculty = e.target.value
        const response = await fetch('/api/changed_diff', {
            method: 'GET',
            //body: JSON.stringify({ 'f':0,'ff': 10 }),
            headers: {
              'content-type': 'application/json'
            }
        });
        
        let al = await response.json()
        alert(JSON.stringify(al))
    }

</script>

<div id='center'>
    <div id='game_container'>

        {#if diffculty === 'easy'}
	        <div id="main">
	        	{#each Array(64) as _, i}

                    <div on:click={box_clicked} id={'cell_'+i}></div>
                {/each}
	        </div>
        {/if}
        
        {#if diffculty === 'normal'}
	        <div id="main2">
	        	{#each Array(256) as _, i}
                    <div on:click={box_clicked} id={'cell_'+i}></div>
                {/each}
	        </div>
        {/if}
        
        {#if diffculty === 'hard'}
            <div id="main3">
	        	{#each Array(512) as _, i}
                    <div on:click={box_clicked} id={'cell_'+i}></div>
                {/each}
            </div>
        {/if}
    </div>


    <div id='settings'>
        <select name="diffculty" id="diffculty" on:change={change_diff} >
            <option value="easy">easy</option>
            <option value="normal">normal</option>
            <option value="hard">hard</option>
        </select>

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

    
    #main > *, #main2 > * , #main3 > *  {
        cursor: pointer;
        background-color: #a6adbaff;
    }

    #main > *{
        height: 40px;
        width: 40px;
    }
    #main2 > *{
        height: 25px;
        width: 25px;
    }
    #main3 > *{
        height: 20px;
        width: 20px;
    }

    #settings{
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #diffculty{
        background-color: transparent;
        border: 2px solid #a6adbaff;
        padding: 10px;
        border-radius: 10px;
		color: #a6adbaff;
		font-size: 16px;
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
