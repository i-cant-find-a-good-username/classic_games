<script lang="ts">
    import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	export let data: PageData;

    let diffculty = 'easy'
    let submit_form;

    const box_clicked = async (e: any) => {
        console.log(e.target.id)
        //const response = await fetch('/ff', {
        //    method: 'POST',
        //    body: JSON.stringify({ 'f':0,'ff': 10 }),
        //    headers: {
        //      'content-type': 'application/json'
        //    }
        //});
        //
        //let al = await response.json()
        //alert(al)
    }
    const on_diff_change = ({ form, data, action, cancel }) => {
        return async ({ result, update }) => {
            console.log(result)
        }
    }

 
</script>

<div id='center'>
    
    
    {#if diffculty === 'easy'}
	    <div id="main">
	    	{#each Array(64) as _, i}
                <form action="?/clicked_box" method='post' use:enhance >
                    <button on:click={box_clicked} id={'cell_'+i}></button>
                    <input type="hidden" name="cell_id" value={i}>
                </form>
            {/each}
	    </div>
    {/if}
    
    {#if diffculty === 'normal'}
	    <div id="main2">
	    	{#each Array(256) as _, i}
                <form action="?/clicked_box" method='post' use:enhance >
                    <button on:click={box_clicked} id={'cell_'+i}></button>
                    <input type="hidden" name="cell_id" value={i}>
                </form>
            {/each}
	    </div>
    {/if}
    
    {#if diffculty === 'hard'}
        <div id="main3">
	    	{#each Array(512) as _, i}
                <form action="?/clicked_box" method='post' use:enhance >
                    <button on:click={box_clicked} id={'cell_'+i}></button>
                    <input type="hidden" name="cell_id" value={i}>
                </form>
            {/each}
        </div>
    {/if}


    <form action="">

    <form action="?/changed_diff" bind:this={submit_form}  method='post' use:enhance={on_diff_change}   >
        <select name="diffculty" id="" on:change={() => submit_form.requestSubmit()} >
            <option value="easy">easy</option>
            <option value="normal">normal</option>
            <option value="hard">hard</option>
        </select>
    </form>
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


    form > button {
        background-color: transparent;
        width: 100%;
        height: 100%;
        border: none;
        cursor: pointer;
    }


</style>
