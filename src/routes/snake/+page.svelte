<script lang='ts'>
	import { onMount } from 'svelte';
	// 0 for empty
	// 1 for snake
	// 1 for food
	let game_grid: number[][] = Array.from({length: 32}, (e, i)=> Array.from({length: 32}, (e)=> 0))
	let score = 0
	let direction: 'up'|'down'|'left'|'right'|null
	let game_loop: number

	const change_dir = (dir: 'up'|'down'|'left'|'right') => {
		direction = dir
	}

	const generate_food = () => {
		// generate 1 food with rand x, y that are not taken by the snake	
		let empty_slots: [number, number][] = []
		for (let i = 0; i < game_grid.length; i++) {
			for (let j = 0; j < game_grid[i].length; j++) {
				if (game_grid[i][j] == 0){
					empty_slots.push([i, j])
				}
			}			
		}
		const rand_point = empty_slots[Math.floor(Math.random()*empty_slots.length)]
		game_grid[rand_point[0]][rand_point[1]] = 2
	}


	const move = (e: KeyboardEvent) => {
		if (e.keyCode === 37) {
			change_dir('left')
		} else if (e.keyCode === 38) {
			change_dir('up')
		} else if (e.keyCode === 39) {
			change_dir('right')
		} else if (e.keyCode === 40) {
			change_dir("down")
		}
	}

	const game_speed = () => {}
	const game_over = () => {}
	const collision = () => {}

	const start_game = () => {
		game_grid = Array.from({length: 32}, (e, i)=> Array.from({length: 32}, (e)=> 0))
		score = 0
		direction = null
		game_grid[Math.floor(32 / 2)][Math.floor(32 / 2)] = 1 
		generate_food()

		game_loop = setInterval(move, 250);

	}

	onMount(async () => {
		start_game()
	});

</script>





<svelte:window on:keydown={move}/>
<div id='main_parent' >
	<div id="score_board">
		<div>BEST : 0</div>
		<div>SCORE : 0</div>
	</div>
	<div id='main'>
		<div id='bricks_container'>
			{#each Array(32) as _,i}
				{#each Array(32) as _,j}
					{#if game_grid[i][j] == 0}
						<div class="" ></div>
					{:else if game_grid[i][j] == 1}
						<div class="snake" ></div>
					{:else if game_grid[i][j] == 2}
						<div class="food" ></div>
					{/if}
				{/each}
			{/each}
		</div>
	</div>
</div>

<style>
	.food {
		background-color: red;
	}
	.snake {
		
		background-color: #a6adbaff;
	}
	#main_parent{
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;   
		justify-content: center;
	}
	#main{
		box-sizing: border-box;
		width: 450px;
		height: 450px;
		border: 2px solid #a6adbaff;
		border-radius: 10px;
	}
	#bricks_container{
		border-radius: 10px;
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(32, minmax(0, 1fr));
	}
	#bricks_container > *{ 
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		/*background-color: red;
		border: 1px black solid;*/
	}

	#score_board{
		width: 450px;
		margin-bottom: 10px;
		display: flex;
		font-size: 20px;
	}
	#score_board > *{
		padding-right: 20px;
	}
	


	.game{
		background-color: #a6adbaff !important;
	}






</style>