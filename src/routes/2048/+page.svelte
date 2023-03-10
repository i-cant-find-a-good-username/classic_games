<script lang="ts">
// @ts-nocheck
/**
 * 
 * 
 * 	function left(){
		for (let i = 3; i >= 0; i--) {
			for (let j = 3; j >= 0; j--) {
				if(blocks_scores[i][j] !== null && blocks_scores[i][j-1] ===null  && j !== 0){
					blocks_scores[i][j-1] = blocks_scores[i][j]
					blocks_scores[i][j] = null
				}
			}
		}
	}
	function right(){
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				if(blocks_scores[i][j] !== null && blocks_scores[i][j+1] ===null  && j !== 3){
					blocks_scores[i][j+1] = blocks_scores[i][j]
					blocks_scores[i][j] = null
				}
			}
		}
	}
	function top(){
		for (let i = 3; i >= 0; i--) {
			for (let j = 3; j >= 0; j--) {
				if(blocks_scores[i][j] !== null && blocks_scores[i-1][j] ===null  && i !== 0){
					blocks_scores[i-1][j] = blocks_scores[i][j]
					blocks_scores[i][j] = null
				}
			}
		}
	}
	function bottom(){
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				if(blocks_scores[i][j] !== null && blocks_scores[i+1][j] ===null  && i !== 3){
					blocks_scores[i+1][j] = blocks_scores[i][j]
					blocks_scores[i][j] = null
				}
			}
		}
	}
 */
    let random1, random2, random3, random4
    let block1 ,block2 ,block3 ,block4 ,block5 ,block6 ,block7 ,block8 ,block9 ,block10 ,block11 ,block12 ,block13 ,block14 ,block15 ,block16
	let tempo 
	let blocks_scores = [
		[null, null, null, null],
		[null, null, null, null],
		[null, null, null, null],
		[null, null, null, null],
	]




	function left(){
		console.log('hello')
		for (let i = 3; i >= 0; i--) {
			for (let j = 3; j >= 0; j--) {
				if(blocks_scores[i][j-1] === null  && j !== 0){
					blocks_scores[i][j-1] = blocks_scores[i][j]
					blocks_scores[i][j] = null
				}
			}
		}
	}
	function right(){
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				if(blocks_scores[i][j+1] === null  && j !== 3){
					blocks_scores[i][j+1] = blocks_scores[i][j]
					blocks_scores[i][j] = null
				}
			}
		}
	}
	function top(){
		for (let i = 3; i >= 0; i--) {
			for (let j = 3; j >= 0; j--) {
				if(blocks_scores[i-1][j] === null  && i !== 0){
					blocks_scores[i-1][j] = blocks_scores[i][j]
					blocks_scores[i][j] = null
				}
			}
		}
	}
	function bottom(){
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				if(blocks_scores[i+1][j] === null  && i !== 3){
					blocks_scores[i+1][j] = blocks_scores[i][j]
					blocks_scores[i][j] = null
				}
			}
		}
	}


	function start_game (){
		blocks_scores = [
			[null, null, null, null],
			[null, null, null, null],
			[null, null, null, null],
			[null, null, null, null],
		]
		random1 = Math.floor(Math.random() * 4)
		random2 = Math.floor(Math.random() * 4)
    	random3 = Math.floor(Math.random() * 4)
		random4 = Math.floor(Math.random() * 4)
		while( [random1, random2] === [random3, random4] ){
			random1 = Math.floor(Math.random() * 4)
			random2 = Math.floor(Math.random() * 4)
		    random3 = Math.floor(Math.random() * 4)
			random4 = Math.floor(Math.random() * 4)
		}
		blocks_scores[random1][random2] = 2
		blocks_scores[random3][random4] = 8
	}

	console.log(blocks_scores)
    function go_side(e){
        if(e.keyCode === 37){
			console.log(blocks_scores)
			//left
			left()
			left()
        }else if(e.keyCode === 38){
            top()
            top()
        }else if(e.keyCode === 39){
			right()
			right()
        }else if(e.keyCode === 40){
            bottom()
            bottom()
        }
    }

	
	start_game()
	
	
	import { onMount } from 'svelte';
    onMount(async () => {
		block1.classList.add('added')

    })
            
</script>

<svelte:window on:keydown={go_side} />
<div id="container">
	<div id='score_board'>
		<button on:click={start_game} >new game</button>
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


			{#each blocks_scores as blocks,i }
				{#each blocks as block,j }
					{#if block !== null }
						 <div bind:this={block1} class={'inside_block block_'+block} id='' style={"top: "+(i*25)+"%; left: "+(j*25)+"%"} > {block} </div>		
					{/if}
	   			{/each}
			{/each}

            <!--
				<div bind:this={block1} class='inside_block block_2' id='block_1' >2</div>
				<div bind:this={block2} class='inside_block block_2' id='block_2' style="top: 25%; left: 25%" >2</div>
				<div bind:this={block2} class='inside_block block_32' id='block_2' style="top: 25%; left: 50%" >32</div>
				<div bind:this={block2} class='inside_block block_64' id='block_2' style="top: 25%; left: 75%" >64</div>
			-->

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

		transition: all 300ms cubic-bezier(.05,.43,.25,.95);

        
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

	button{
		cursor: pointer;
	}



</style>
