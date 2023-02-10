<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data);


    const easy = Array.from({length: 10}, () => Math.floor(Math.random() * 64));
    const medium = Array.from({length: 40}, () => Math.floor(Math.random() * 256));
    const hard = Array.from({length: 100}, () => Math.floor(Math.random() * 512));

</script>

<div id='center'>
    
	<div id="main">
		{#each Array(64) as _, i}
            <div class={easy.includes(i) ? 'mine' : ''} id={'cell_'+i}></div>
        {/each}
	</div>

	<div id="main2">
		{#each Array(256) as _, i}
            <div class={medium.includes(i) ? 'mine' : ''} id={'square_'+i}></div>
        {/each}
	</div>

    <div id="main3">
		{#each Array(512) as _, i}
            <div class={hard.includes(i) ? 'mine' : ''} id={'box_'+i}></div>
        {/each}
    </div>

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
