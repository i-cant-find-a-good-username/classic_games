<script lang="ts">

	let cell_id = 0

	interface block_data {
		index: number,
		value: number,
		top: number,
		left: number,
	}


	let timeout_delay = 300
    let q: number
	let r: number
	let random1: number = 0
	

	//{value: 32, top:75, left:50} 
	let grid: block_data[][][] = [
		[[], [], [], []],
		[[], [], [], []],
		[[], [], [], []],
		[[], [], [], []],
	]





	
	function init_grid (){
		grid = [
			[[], [], [], []],
			[[], [], [], []],
			[[], [], [], []],
			[[], [], [], []],
		]
		cell_id = 0
		spawn()
		spawn()
	}	


	function start_game (){

	}
	function valid_move (): boolean{
		return false
	}

	function spawn (){
		let empty_slots: number[][] = []
		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[i].length; j++) {
				if (grid[i][j].length == 0){
					empty_slots.push([i, j])
				}
			}
		}
		const random_empty_slot = empty_slots[Math.floor(Math.random() * empty_slots.length)];
		grid[random_empty_slot[0]][random_empty_slot[1]].push({
			index: cell_id,
			value: 2,
			top: 0,
			left: 0,
		})
		console.log(grid)
		cell_id++
	}



    function go_side(e: KeyboardEvent){
        if(e.keyCode === 37){
			if(valid_move()){}
			spawn()
		}else if(e.keyCode === 38){
			if(valid_move()){}
			spawn()
		}else if(e.keyCode === 39){
			if(valid_move()){}
			spawn()
		}else if(e.keyCode === 40){
			if(valid_move()){}
			spawn()
		}
	}

	
	
	
	
	import { onMount } from 'svelte';
    onMount(async () => {
		start_game()
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
		{#each grid as row, i}
			<div class='row' >
				{#each row as cell, j}
					<div class='blocks'>
						<div class='inside_block block_16'>
							<!-- might need anotherr each loop for the  inside cells -->
							{JSON.stringify(cell)}
							{cell[0]}
						</div>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>

	.row{
		height: 100px;
		width: 400px;
		display: flex;
	}

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
	}

	.blocks {
		background-color: #1f242dff;
		aspect-ratio: 1/1;
		width: 100px;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
    
	:global(.inside_block) {
        width: 100px;
        height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 40px;
		top: 0;
		left: 0;
		box-sizing: border-box;
		border: #1f242dff 2px solid;
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
