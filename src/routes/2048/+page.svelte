<script>
// @ts-nocheck

    var random1, random2
    var block1 ,block2 ,block3 ,block4 ,block5 ,block6 ,block7 ,block8 ,block9 ,block10 ,block11 ,block12 ,block13 ,block14 ,block15 ,block16

    
    function go_side(e){
        if(e.keyCode === 37){
            //left
        }else if(e.keyCode === 38){
            //top
        }else if(e.keyCode === 39){
            //right
        }else if(e.keyCode === 40){
            //bottom
        }
    }


    random1 = Math.floor(Math.random() * 17)
    random2 = Math.floor(Math.random() * 17)



    import { createEventDispatcher } from "svelte"
	import { onMount } from 'svelte';
    onMount(async () => {
        block1.classList.add('added')
	});

</script>

<svelte:window on:keydown={go_side}/>
<div id='dd'>

    <div id='main'>
        <div class='blocks' bind:this={block1} id='block_1' >efefef</div>
        <div class='blocks' bind:this={block2} id='block_2' ></div>
        <div class='blocks' bind:this={block3} id='block_3' ></div>
        <div class='blocks' bind:this={block4} id='block_4' ></div>
        <div class='blocks' bind:this={block5} id='block_5' ></div>
        <div class='blocks' bind:this={block6} id='block_6' ></div>
        <div class='blocks' bind:this={block7} id='block_7' ></div>
        <div class='blocksQ' bind:this={block8} id='block_8' ></div>
        <div class='blocks' bind:this={block9} id='block_9' ></div>
        <div class='blocks' bind:this={block10} id='block_10' ></div>
        <div class='blocks' bind:this={block11} id='block_11' ></div>
        <div class='blocks' bind:this={block12} id='block_12' ></div>
        <div class='blocks' bind:this={block13} id='block_13' ></div>
        <div class='blocks' bind:this={block14} id='block_14' ></div>
        <div class='blocks' bind:this={block15} id='block_15' ></div>
        <div class='blocks' bind:this={block16} id='block_16' ></div>
    </div>

</div>


<style>

    #main{
        width: 400px;
        height: 400px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 2px;
        padding: 100px;
    }
    #main > *{
        background-color: #1f242dff;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    


</style>