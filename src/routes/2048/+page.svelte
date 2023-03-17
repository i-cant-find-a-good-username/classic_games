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
	let tempo, co
	
	let rr1 = 0 //Math.floor(Math.random() * 4)
	let rr2 = 0 //Math.floor(Math.random() * 4)
	let rr3 = 0 //Math.floor(Math.random() * 4)
	let rr4 = 1 //Math.floor(Math.random() * 4)
	let blocks_scores = [
		[null, null, null, null],
		[null, null, null, null],
		[null, null, null, null],
		[null, null, null, null],	
	]

	let states = [
		[block1 ,block2 ,block3 ,block4],
		[block5 ,block6 ,block7 ,block8],
		[block9 ,block10 ,block11 ,block12],
		[block13 ,block14 ,block15 ,block16]
	]

/**
 * 
 * 
				if(blocks_scores[i][j-1] === null  && j !== 0){
					//blocks_scores[i][j-1] = blocks_scores[i][j]
					//blocks_scores[i][j] = null
 */

	function left(){
		for (let i = 3; i >= 0; i--) {
			for (let j = 3; j >= 0; j--) {
				if( states[i][j] !== undefined && states[i][j-1] === undefined && j !== 0 ){
					states[i][j].style.left = (parseInt(states[i][j].style.left, 10) - 25) +'%'
					states[i][j-1] = states[i][j]
					states[i][j] = undefined
					console.log('idk')
				}else if( states[i][j] !== undefined && states[i][j-1] !== undefined ){
					if( states[i][j-1].classList && states[i][j].classList ){
						console.log('hello')
						states[i][j] = undefined
						states[i][j-1].classList.add('block_8')
					}
				}else{
					console.log('none')

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
		try {
			for (let i = 3; i >= 0; i--) {
				for (let j = 3; j >= 0; j--) {
					if(blocks_scores[i-1][j] === null  && i !== 0){
						blocks_scores[i-1][j] = blocks_scores[i][j]
						blocks_scores[i][j] = null
					}
				}
			}
		} catch (error) {}
	}
	function bottom(){
		try {
			for (let i = 0; i < 4; i++) {
				for (let j = 0; j < 4; j++) {
					if(blocks_scores[i+1][j] === null  && i !== 3){
						blocks_scores[i+1][j] = blocks_scores[i][j]
						blocks_scores[i][j] = null
					}
				}
			}
		} catch (error) {}
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
		while( random1 === random3 && random2 === random4 ){
			random1 = Math.floor(Math.random() * 4)
			random2 = Math.floor(Math.random() * 4)
		    random3 = Math.floor(Math.random() * 4)
			random4 = Math.floor(Math.random() * 4)
		}
		blocks_scores[random1][random2] = 2
		blocks_scores[random3][random4] = 8
	}
	function spawn (){
		var bb = arr => arr.every( v => v.every( d => d === null )  ) 
    	random3 = Math.floor(Math.random() * 4)
		random4 = Math.floor(Math.random() * 4)
		while( blocks_scores[random1][random2] !==null ){
			random1 = Math.floor(Math.random() * 4)
			random2 = Math.floor(Math.random() * 4)
		}
		blocks_scores[random1][random2] = 2
	}


    function go_side(e){
        if(e.keyCode === 37){
			//left
			left()
			left()
			spawn()
        }else if(e.keyCode === 38){
            top()
            top()
			spawn()
        }else if(e.keyCode === 39){
			right()
			right()
			spawn()
        }else if(e.keyCode === 40){
            bottom()
            bottom()
			spawn()
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

            <div class="blocks " id="block_1" >  </div>
            <div class="blocks " id="block_2" ></div>
            <div class="blocks " id="block_3" ></div>
            <div class="blocks " id="block_4" ></div>
            <div class="blocks " id="block_5" ></div>
            <div class="blocks " id="block_6" ></div>
		    <div class="blocks " id="block_7" ></div>
		    <div class="blocks " id="block_8" ></div>
		    <div class="blocks " id="block_9" ></div>
		    <div class="blocks " id="block_10" ></div>
		    <div class="blocks " id="block_11" ></div>
		    <div class="blocks " id="block_12" ></div>
		    <div class="blocks " id="block_13" ></div>
		    <div class="blocks " id="block_14" ></div>
		    <div class="blocks " id="block_15" ></div>
		    <div class="blocks " id="block_16" ></div>

			<!--
				{#each blocks_scores as blocks,i }
					{#each blocks as block,j }
						{#if block !== null }
									
						{/if}
					{/each}
				{/each}
			-->
			<div bind:this={states[rr1][rr2]} class={'inside_block block_2'} id='' style={"top: "+(rr1*25)+"%; left: "+(rr2*25)+"%"} > 2 </div>
			<div bind:this={states[rr3][rr4]} class={'inside_block block_2'} id='' style={"top: "+(rr3*25)+"%; left: "+(rr4*25)+"%"} > 2 </div>
			 
			 
            <!--
				<div bind:this={block1} class='inside_block block_2' id='block_1' >2</div>
				<div bind:this={block2} class='inside_block block_2' id='block_2' style="top: 25%; left: 25%" >2</div>
				<div bind:this={block2} class='inside_block block_32' id='block_2' style="top: 25%; left: 50%" >32</div>
				<div bind:this={block2} class='inside_block block_64' id='block_2' style="top: 25%; left: 75%" >64</div>
			-->

    </div>
</div>

<style global>
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
	:global(.block_4) {
		background-color: #fed7aaff !important;
		color: black;
	}
	:global(.block_8) {
		background-color: #fdba74ff !important;
	}
	:global(.block_16) {
		background-color: #fb923cff !important;
	}
	:global(.block_32) {
		background-color: #f87171ff !important;
	}
	:global(.block_64) {
		background-color: #ef4444ff !important;
	}
	:global(.block_128) {
		background-color: #fde047ff !important;
	}
	:global(.block_256) {
		background-color: #fde047ff !important;
	}
	:global(.block_512) {
		background-color: #facc15ff !important;
	}
	:global(.block_1024) {
		background-color: #facc15ff !important;
	}
	:global(.block_2048) {
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
