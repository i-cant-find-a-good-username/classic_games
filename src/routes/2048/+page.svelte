<script lang="ts">
// @ts-nocheck

    var random1, random2
    var block1 ,block2 ,block3 ,block4 ,block5 ,block6 ,block7 ,block8 ,block9 ,block10 ,block11 ,block12 ,block13 ,block14 ,block15 ,block16
    var block
    
    function go_side(e){
        if(e.keyCode === 37){
            //left
        }else if(e.keyCode === 38){
            //top
        }else if(e.keyCode === 39){
            block.style.left = '25%'
            console.log(block)
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

        switch (random1) {
            case 0:
                
                break
            case 1:
                
                break
            case 2:
                
                break
            case 3:
                
                break
            case 4:
                
                break
            case 5:
                
                break
            case 6:
                
                break
            case 7:
                
                break
            case 8:

                break
            case 9:

                break
            case 10:

                break
            case 11:

                break
            case 12:

                break
            case 13:

                break
            case 14:

                break
            case 15:

                break
            default:
                break
        }
    });
            
            console.log(random1, random2)
</script>

<svelte:window on:keydown={go_side} />
<div id="dd">
	<div id="main">

            <div class="blocks " bind:this={block1} id="block_1" >  </div>
            <div class="blocks " bind:this={block2} id="block_2" ></div>
            <div class="blocks " bind:this={block3} id="block_3" ></div>
            <div class="blocks " bind:this={block4} id="block_4" ></div>
            <div class="blocks " bind:this={block5} id="block_5" ></div>
            <div class="blocks " bind:this={block6} id="block_6" ></div>
		    <div class="blocks " bind:this={block7} id="block_7" ></div>
		    <div class="blocks " bind:this={block8} id="block_8" ></div>
		    <div class="blocks " bind:this={block9} id="block_9" ></div>
		    <div class="blocks " bind:this={block10} id="block_10" ></div>
		    <div class="blocks " bind:this={block11} id="block_11" ></div>
		    <div class="blocks " bind:this={block12} id="block_12" ></div>
		    <div class="blocks " bind:this={block13} id="block_13" ></div>
		    <div class="blocks " bind:this={block14} id="block_14" ></div>
		    <div class="blocks " bind:this={block15} id="block_15" ></div>
		    <div class="blocks " bind:this={block16} id="block_16" ></div>

            <div bind:this={block} class='inside_block block_2' id='block_1' >2</div>

    </div>
</div>

<style>
	/*

2
4
8
16
32
64
128
256
1024
2048

*/
	#main {
		width: 400px;
		height: 400px;
		margin: auto;
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 5px;
		position: relative;
		background-color: red;
	}
	.blocks {
		background-color: #1f242dff;
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
    
	.inside_block {
        width: calc( 25% - 4px );
        height: calc( 25% - 4px );
		display: flex;
		align-items: center;
		justify-content: center;
		
        font-size: 40px;
        position: absolute;
        top: 0;
        left: 0;
        
	}

	.block_2 {
		background-color: white !important;
		color: black;
	}
	.block_4 {
		background-color: #fed7aaff !important;
		color: black;
	}
	.block_8 {
		background-color: #fdba74ff !important;
	}
	.block_16 {
		background-color: #fb923cff !important;
	}
	.block_32 {
		background-color: #f87171ff !important;
	}
	.block_64 {
		background-color: #ef4444ff !important;
	}
	.block_128 {
		background-color: #fde047ff !important;
	}
	.block_256 {
		background-color: #fde047ff !important;
	}
	.block_512 {
		background-color: #facc15ff !important;
	}
	.block_1024 {
		background-color: #facc15ff !important;
	}
	.block_2048 {
		background-color: #facc15ff !important;
	}
</style>
