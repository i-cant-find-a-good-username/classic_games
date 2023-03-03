<script lang="ts">
// @ts-nocheck

    var random1, random2
    var block1 ,block2 ,block3 ,block4 ,block5 ,block6 ,block7 ,block8 ,block9 ,block10 ,block11 ,block12 ,block13 ,block14 ,block15 ,block16
    var block1, block2

	let blocks_scores = [
		[null, null, null, null],
		[null, null, null, null],
		[null, null, null, null],
		[null, null, null, null],
	]



    function go_side(e){
        if(e.keyCode === 37){
            //left
        }else if(e.keyCode === 38){
            //top
        }else if(e.keyCode === 39){
            //block.style.left = '25%'
            //console.log(block)
            console.log(block1, block2)
            //({ block1, block2 } = { block2, block1 })
            //console.log(block1, block2)

        }else if(e.keyCode === 40){
            //bottom
        }
    }


    random1 = Math.floor(Math.random() * 17)
    random2 = Math.floor(Math.random() * 17)



	import { onMount } from 'svelte';
    onMount(async () => {
        block1.classList.add('added')



    })
            
    console.log(random1, random2)
</script>

<svelte:window on:keydown={go_side} />
<div id="container">
	<div id='score_board'>
		<button>new game</button>
		<div>SCORE: 0</div>
		<div>BEST: 0</div>
	</div>
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

            <div bind:this={block1} class='inside_block block_2' id='block_1' >2</div>
            <div bind:this={block2} class='inside_block block_2' id='block_2' style="top: 25%; left: 25%" >2</div>
            <div bind:this={block2} class='inside_block block_32' id='block_2' style="top: 25%; left: 50%" >32</div>
            <div bind:this={block2} class='inside_block block_64' id='block_2' style="top: 25%; left: 75%" >64</div>

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

	#container{
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	#main {
		width: 400px;
		height: 400px;
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		position: relative;
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
        width: 25%;
        height: 25%;
		display: flex;
		align-items: center;
		justify-content: center;
		
        font-size: 40px;
        position: absolute;
        top: 0;
        left: 0;
		box-sizing: border-box;
		border: #1f242dff 2px solid;

		transition: all 200ms cubic-bezier(.05,.43,.25,.95);

        
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







	#score_board{
		width: 400px;
		display: flex;
		align-items: center;
		justify-content: start;
		padding-bottom: 10px;
	}
	#score_board > :first-child{
		background-color: #1f242d;
		padding: 10px;
		border-radius: 10px;
		border: none;
		color: #a6adbaff;
		font-size: 16px;
		font-weight: 600;
	}
	#score_board > *{
		margin-right: 20px;
	}



</style>
