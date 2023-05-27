<script lang="ts">


	interface block_data {
		value: number,
		//index: number,
		top: number,
		left: number,
	}


	let timeout_delay = 300
    let q: number
	let r: number
	let random1: number = 0
	

	//{value: 32, top:75, left:50} 
	let states: (block_data|null)[] = [
		null, null, null, null,
		null, null, null, null,
		null, null, null, null,
		null, null, null, null,	
	]


	// left function
	/*
		for (let i = 2; i >= 0; i--) {
			if (states[i % 4] === null && states[i+1 % 4] !== null){
				states[i % 4] = {
					value: states[i+1 % 4].value,
					top: states[i+1 % 4].top,
					left: states[i+1 % 4].left-25
				}
				states[i+1 % 4] = null
				break
			}
			if (states[i % 4+4] === null && states[i+1 % 4+4] !== null){
				states[i % 4+4] = {
					value: states[i+1 % 4+4].value,
					top: states[i+1 % 4+4].top,
					left: states[i+1 % 4+4].left-25
				}
				states[i+1 % 4+4] = null
			}
			if (states[i % 4+8] === null && states[i+1 % 4+8] !== null){
				states[i % 4+8] = {
					value: states[i+1 % 4+8].value,
					top: states[i+1 % 4+8].top,
					left: states[i+1 % 4+8].left-25
				}
				states[i+1 % 4+8] = null
			}
			if (states[i % 4+12] === null && states[i+1 % 4+12] !== null){
				states[i % 4+12] = {
					value: states[i+1 % 4+12].value,
					top: states[i+1 % 4+12].top,
					left: states[i+1 % 4+12].left-25
				}
				states[i+1 % 4+12] = null
			}
		}
	
	*/

	/**
	 
			if (states[0] === null && states[1] === null && states[2] === null && states[3] !== null){
			states[3].left -= 75
			setTimeout(() => {
				states[0] = {
					value: states[3].value,
					top: states[3].top,
					left: states[3].left
				}
				states[3] = null
			}, 300);
		}
	 */
	const move = (move: {state: number, side: "left"|"top", percentage: number}[]) => {
		setTimeout(() => {
		for (let i = 0; i < move.length; i++) {
			if (move[i].side === "left"){
					states[move[i].state].left += move[i].percentage
					//states[move[i].state].left += move[i].percentage
				}else if (move[i].side === "top"){
					states[move[i].state].top += move[i].percentage
					//states[move[i].state].top += move[i].percentage
				}
			}
		}, 0);
	}
	function left(){
		// 1 ===> 0
		let arr: {state: number, side: "left"|"top", percentage: number}[] = []
		if (states[0] === null && states[1] !== null){
			arr.push({
				state: 0,
				side: 'left',
				percentage: -25
			})
			states[0] = states[1]
			states[1] = null
		}
		// 2 ===> 0
		if (states[0] === null && states[1] === null && states[2] !== null){
			arr.push({
				state: 0,
				side: 'left',
				percentage: -50
			})
			states[0] = states[2]
			states[2] = null
		}
		// 2 ===> 1
		if (states[0] !== null && states[1] === null && states[2] !== null){
			arr.push({
				state: 1,
				side: 'left',
				percentage: -25
			})
			states[1] = states[2]
			states[2] = null
		}
		// 3 ===> 0
		if (states[0] === null && states[1] === null && states[2] === null && states[3] !== null){
			arr.push({
				state: 0,
				side: 'left',
				percentage: -75
			})
			states[0] = states[3]
			states[3] = null
		}
		// 3 ===> 1
		if (states[0] !== null && states[1] === null && states[2] === null && states[3] !== null){
			arr.push({
				state: 1,
				side: 'left',
				percentage: -50
			})
			states[1] = states[3]
			states[3] = null
		}
		// 3 ===> 2
		if (states[0] !== null && states[1] !== null && states[2] === null && states[3] !== null){
			arr.push({
				state: 2,
				side: 'left',
				percentage: -25
			})
			states[2] = states[3]
			states[3] = null
		}
		move(arr)
	}
	function right(){
		for (let i = 0; i <= 2; i++) {
			if (states[i+1 % 4] === null && states[i % 4] !== null){
				states[i+1 % 4] = {
					value: states[i % 4].value,
					top: states[i % 4].top,
					left: states[i % 4].left+25
				}
				states[i % 4] = null
			}
			if (states[i+1 % 4+4] === null && states[i % 4+4] !== null){
				states[i+1 % 4+4] = {
					value: states[i % 4+4].value,
					top: states[i % 4+4].top,
					left: states[i % 4+4].left+25
				}
				states[i % 4+4] = null
			}
			if (states[i+1 % 4+8] === null && states[i % 4+8] !== null){
				states[i+1 % 4+8] = {
					value: states[i % 4+8].value,
					top: states[i % 4+8].top,
					left: states[i % 4+8].left+25
				}
				states[i % 4+8] = null
			}
			if (states[i+1 % 4+12] === null && states[i % 4+12] !== null){
				states[i+1 % 4+12] = {
					value: states[i % 4+12].value,
					top: states[i % 4+12].top,
					left: states[i % 4+12].left+25
				}
				states[i % 4+12] = null
			}
		}
	}
	function top(){
		for (let i = 2; i >= 0; i--) {
			if (states[Math.floor(i+1/4)*4] === null && states[Math.floor(i+1/4)*4+4] !== null){
				states[Math.floor(i+1/4)*4] = {
					value: states[Math.floor(i+1/4)*4+4].value,
					top: states[Math.floor(i+1/4)*4+4].top-25,
					left: states[Math.floor(i+1/4)*4+4].left
				}
				states[Math.floor(i+1/4)*4+4] = null
			}
			if (states[Math.floor(i+1/4)*4+1] === null && states[Math.floor(i+1/4)*4+1+4] !== null){
				states[Math.floor(i+1/4)*4+1] = {
					value: states[Math.floor(i+1/4)*4+1+4].value,
					top: states[Math.floor(i+1/4)*4+1+4].top-25,
					left: states[Math.floor(i+1/4)*4+1+4].left
				}
				states[Math.floor(i+1/4)*4+1+4] = null
			}
			if (states[Math.floor(i+1/4)*4+2] === null && states[Math.floor(i+1/4)*4+2+4] !== null){
				states[Math.floor(i+1/4)*4+2] = {
					value: states[Math.floor(i+1/4)*4+2+4].value,
					top: states[Math.floor(i+1/4)*4+2+4].top-25,
					left: states[Math.floor(i+1/4)*4+2+4].left
				}
				states[Math.floor(i+1/4)*4+2+4] = null
			}
			if (states[Math.floor(i+1/4)*4+3] === null && states[Math.floor(i+1/4)*4+3+4] !== null){
				states[Math.floor(i+1/4)*4+3] = {
					value: states[Math.floor(i+1/4)*4+3+4].value,
					top: states[Math.floor(i+1/4)*4+3+4].top-25,
					left: states[Math.floor(i+1/4)*4+3+4].left
				}
				states[Math.floor(i+1/4)*4+3+4] = null
			}
		}
	}
	function bottom(){
		for (let i = 0; i <= 2; i++) {
			if (states[Math.floor(i+1/4)*4+4] === null && states[Math.floor(i+1/4)*4] !== null){
				states[Math.floor(i+1/4)*4+4] = {
					value: states[Math.floor(i+1/4)*4].value,
					top: states[Math.floor(i+1/4)*4].top+25,
					left: states[Math.floor(i+1/4)*4].left
				}
				states[Math.floor(i+1/4)*4] = null
			}
			if (states[Math.floor(i+1/4)*4+1+4] === null && states[Math.floor(i+1/4)*4+1] !== null){
				states[Math.floor(i+1/4)*4+1+4] = {
					value: states[Math.floor(i+1/4)*4+1].value,
					top: states[Math.floor(i+1/4)*4+1].top+25,
					left: states[Math.floor(i+1/4)*4+1].left
				}
				states[Math.floor(i+1/4)*4+1] = null
			}
			if (states[Math.floor(i+1/4)*4+2+4] === null && states[Math.floor(i+1/4)*4+2] !== null){
				states[Math.floor(i+1/4)*4+2+4] = {
					value: states[Math.floor(i+1/4)*4+2].value,
					top: states[Math.floor(i+1/4)*4+2].top+25,
					left: states[Math.floor(i+1/4)*4+2].left
				}
				states[Math.floor(i+1/4)*4+2] = null
			}
			if (states[Math.floor(i+1/4)*4+3+4] === null && states[Math.floor(i+1/4)*4+3] !== null){
				states[Math.floor(i+1/4)*4+3+4] = {
					value: states[Math.floor(i+1/4)*4+3].value,
					top: states[Math.floor(i+1/4)*4+3].top+25,
					left: states[Math.floor(i+1/4)*4+3].left
				}
				states[Math.floor(i+1/4)*4+3] = null
			}
		}
	}




	function start_game (){
		random1 = 1//Math.floor(Math.random() * 16)
		q = Math.floor(random1/4)
		r = random1 % 4
		//states[random1] = {value: 2, top: q*25, left: r*25}
		states[1] = {value: 2, top: 0, left: 25}
		states[2] = {value: 8, top: 0, left: 50}
	
	}

	function spawn (){
		// if 16 occupied game over
		random1 = Math.floor(Math.random() * 16)
		while( states[random1] !== null ){
			random1 = Math.floor(Math.random() * 16)
		}
		// col
		q = Math.floor(random1/4)
		// row
		r = random1 % 4
		setTimeout(() => {
			states[random1] = {value: 2, top: q*25, left: r*25}
		}, timeout_delay);
	}



    function go_side(e: KeyboardEvent){
        if(e.keyCode === 37){
			left()
			spawn()
        }else if(e.keyCode === 38){
            top()
			spawn()
        }else if(e.keyCode === 39){
			right()
			spawn()
        }else if(e.keyCode === 40){
            bottom()
			spawn()
        }
    }

	
	
	
	
	import { onMount } from 'svelte';
    onMount(async () => {
		setTimeout(()=>{
			start_game()
		}, 100)
    })
            
</script>

{JSON.stringify(states)}
<svelte:window on:keydown={go_side} />
<div id="container">
	<div id='score_board'>
		<button on:click={start_game} >new game</button>
		<div>SCORE: 0</div>
		<div>BEST: 0</div>
	</div>
	<div id="main">

            <div class="blocks " id="block_1" ></div>
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


			{#each Array(16) as _, i }
				{#if states[i] !== null}
					<div class='inside_block block_{states[i].value}' style={'top: '+states[i].top+'%; left: '+states[i].left+'%'} > {states[i].value} </div>
				{/if}
			{/each}
			 
			 
        

    </div>
</div>

<style global>


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
		aspect-ratio: 1/1;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
    
	:global(.inside_block) {
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

	:global(.block_2) {
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
