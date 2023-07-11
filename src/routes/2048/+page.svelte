<script lang="ts">
	interface block_data {
		index: number,
		value: number,
		top: number,
		left: number,
	}

	const helper_arr: any = {
		37: [0, 0, 0, 1, 1, -4],
		38: [0, 0, 1, 0, -4, 1],
		39: [0, 3, 0, -1, 1, 4],
		40: [3, 0, -1, 0, 4, 1],
	};
	let cell_id = 0
	let score = 0
	let grid: number[][][] = [
		[[], [], [], []],
		[[], [], [], []],
		[[], [], [], []],
		[[], [], [], []],
	]
	let tiles: any = {}


	function init_game (){
		grid = [
			[[], [], [], []],
			[[], [], [], []],
			[[], [], [], []],
			[[], [], [], []],
		]
		cell_id = 0
		score = 0
		tiles = {}
		spawn_rand()
		spawn_rand()
	}	


	function start_game (){
		init_game()
	}


	function valid_move (key: number, ): boolean{
		const deplace = helper_arr[key];
		let i = deplace[0],
			j = deplace[1]
			
		for (let a = 0; a < 4; ++a) {
			let arr = []
			for (let b = 0; b < 4; ++b) {
				arr.push(!grid[i][j].length ? 0 : tiles[grid[i][j][0]]);
				i += deplace[2]
				j += deplace[3]
			}
			for (let k = 1; k < 4; ++k) {
				if (arr[k] !== 0 && (arr[k - 1] === 0 || arr[k - 1] === arr[k])) {
					console.log(true)
					return true
				}
			}
			i += deplace[4]
			j += deplace[5]
		}
		console.log(false)
		return false
	}


	function move(key: number, ){

		const deplace = helper_arr[key];
		let i = deplace[0],
			j = deplace[1];

		for (let a = 0; a < 4; ++a) {
			let arr: any = [[], [], [], []],
			k = 0;
			for (let b = 0; b < 4; ++b) {
			if (grid[i][j].length) {
				if (!arr[k].length) {
					arr[k].push(grid[i][j][0]);
				} else if (tiles[arr[k][0]] === tiles[grid[i][j][0]]) {
					arr[k++].push(grid[i][j][0]);
				} else {
					arr[++k].push(grid[i][j][0]);
				}
			}
			i += deplace[2];
			j += deplace[3];
			}
			i -= 4 * deplace[2];
			j -= 4 * deplace[3];
			for (k = 0; k < 4; ++k) {
			grid[i][j] = arr[k];
			i += deplace[2];
			j += deplace[3];
			}
			i += deplace[4];
			j += deplace[5];
		}
	}


	function spawn_rand (){
		let empty_slots: number[][] = []
		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[i].length; j++) {
				if (grid[i][j].length == 0){
					empty_slots.push([i, j])
				}
			}
		}
		const random_empty_slot = empty_slots[Math.floor(Math.random() * empty_slots.length)];
		grid[random_empty_slot[0]][random_empty_slot[1]].push(cell_id)
		tiles[cell_id] = 2
		cell_id++
	}

	function spawn_cell(i: number, j: number, value: number) {
		grid[i][j].push(cell_id)
		tiles[cell_id] = value
		cell_id++
	}

	function merge_cells(): (number | number[][])[] {
		const new_cells: number[][] = []
		let game_score: number = 0
		for (let i = 0; i < 4; ++i) {
			for (let j = 0; j < 4; ++j) {
				if (grid[i][j].length > 1) {
					new_cells.push([i, j, 2 * tiles[grid[i][j][0]]])
					game_score += 2 * tiles[grid[i][j][0]]
				}
			}
		}
		return [new_cells, game_score];
	}

    async function go_side(e: KeyboardEvent){
		const key: number = e.keyCode
		if (key >= 37 || key <= 40){
			console.log(key)

			if (valid_move(key)){
				move(key)
				await tick();
				setTimeout(() => {
					const [new_cells, game_score]: any = merge_cells();
					for(let c of new_cells) {
						grid[c[0]][c[1]].pop()
						grid[c[0]][c[1]].pop()
						spawn_cell(c[0], c[1], c[2])
					}
					spawn_rand()
					score += game_score
				}, 200)
			}

		}
	}

	
	
	
	
	import { onMount, tick } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
    onMount(async () => {
		start_game()
    })
            

	const [send, receive] = crossfade({
		duration: d => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 100,
				easing: quintOut,
				css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

</script>


<svelte:window on:keydown={go_side} />
<div id="container">
	<div id='score_board'>
		<button on:click={start_game} >new game</button>
		<div>SCORE: {score}</div>
		<div>BEST: 0</div>
	</div>
	<div id="main">
		{#each grid as row, i}
			<div class='row' >
				{#each row as cell, j}
					<div class='blocks'>
						{#if cell.length !=0 }
							<div class='inside_block {"block_"+tiles[cell[0]]}' in:receive="{{key: cell[0]}}" out:send="{{key: cell[0]}}">
								{tiles[cell[0]]}
							</div>
						{/if}
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
