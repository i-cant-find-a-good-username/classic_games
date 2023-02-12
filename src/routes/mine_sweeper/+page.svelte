<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

    let diffculty = 'easy'

    const box_clicked = (e) => {
        console.log(e.target.id)
        
    }

    const change_diff = (e) => {
        diffculty = e.target.value
    }

</script>

<div id='center'>
    
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


  
    <select name="diffculty" id="" on:change={change_diff} >
        <option value="easy">easy</option>
        <option value="normal">normal</option>
        <option value="hard">hard</option>
    </select>

</div>

<style>
    #center{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 100px;
        gap: 10px;
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
        height: 50px;
        width: 50px;
    }
    #main2 > *{
        height: 40px;
        width: 40px;
    }
    #main3 > *{
        height: 30px;
        width: 30px;
    }


    :global(.mine){
        background-color: red !important;
    }


</style>
