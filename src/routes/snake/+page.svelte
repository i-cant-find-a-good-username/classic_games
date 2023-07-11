<script lang='ts'>
	import { onMount } from 'svelte';
	import { head_selector } from 'svelte/internal';
	// 0 for empty
	// 1 for snake
	// 1 for food
	let game_state = false 
	let message = 'click the arrow keys to start'
	let show_message = true
	let game_grid: number[][] = Array.from({length: 32}, (e, i)=> Array.from({length: 32}, (e)=> 0))
	let snake_head: [number, number]
	let snake: [number, number][] = []
	let score = 0
	let direction: 'up'|'down'|'left'|'right'|null
	let game_interval: NodeJS.Timeout

	const change_direction = (dir: 'up'|'down'|'left'|'right') => {
		// no reverse
		if (
			direction === null
			||
			direction === "left" && dir !== "right"
			||
			direction === "right" && dir !== "left"
			||
			direction === "up" && dir !== "down"
			||
			direction === "down" && dir !== "up"
		){
			direction = dir
		}
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


	const game_loop = () => {
		console.log("f")
		const [x, y] = [snake_head[0], snake_head[1]]

		
		if (direction === "left") {
			collisions(x, y-1)
		} else if (direction === "right") {
			collisions(x, y+1)
		} else if (direction === "up") {
			collisions(x-1, y)
		} else if (direction === "down") {
			collisions(x+1, y)
		}
	}


	const move = (e: KeyboardEvent) => {
		if (e.keyCode >= 37 && e.keyCode <= 40){
			if(!game_state){
				game_state = true
				start_game()
			}
		}
		if (e.keyCode === 37) {
			console.log('left')
			change_direction('left')
		} else if (e.keyCode === 38) {
			console.log('up')
			change_direction('up')
		} else if (e.keyCode === 39) {
			console.log('right')
			change_direction('right')
		} else if (e.keyCode === 40) {
			console.log('down')
			change_direction("down")
		}
	}

	const game_speed = () => {
		clearInterval(game_interval);
		let speed = Math.max(100 - (score * 4), 50);
		game_interval = setInterval(game_loop, speed);
	}

	const game_over = () => {
		clearInterval(game_interval);
		message = 'game over'
		game_state = false
		show_message = true
		//start_game()
	}

	const update_snake = (x: number, y: number) => {
		game_grid[x][y] = 1
		snake_head = [x, y]
		snake.push([x, y])

		//remove snake bit
		const [Rx, Ry] = snake[0]
		game_grid[Rx][Ry] = 0
		snake.splice(0, 1)
	
	}
	
	const eat = (x: number, y: number) => {
		score += 1
		snake_head = [x, y]
		game_grid[x][y] = 1
		snake.push([x, y])
		game_speed();
		generate_food();
	}


	const collisions = (x: number, y: number) => {
		if (x < 0 || x === 32 || y < 0 || y === 32) {
			game_over()
			return
		}
		console.log(x, y)
		if (game_grid[x][y] === 1) {
			game_over()
			return
		}
		if (game_grid[x][y] === 2) {
			eat(x, y)
			return
		}

		update_snake(x, y);
	}

	const start_game = () => {
		clearInterval(game_interval);
		show_message = false
		game_grid = Array.from({length: 32}, (e, i)=> Array.from({length: 32}, (e)=> 0))
		score = 0
		direction = null
		game_grid[Math.floor(32 / 2)][Math.floor(32 / 2)] = 1 
		snake_head = [Math.floor(32 / 2), Math.floor(32 / 2)]
		snake = [[Math.floor(32 / 2), Math.floor(32 / 2)]]
		generate_food()
		game_interval = setInterval(game_loop, 100);
	}


</script>





<svelte:window on:keydown={move}/>
<div id='main_parent' >
	<div id="score_board">
		<button on:click={start_game} >new game</button>
		<div>SCORE : 0</div>
		<div>BEST : {score}</div>
	</div>
	<div id='main'>

		{#if show_message}
			<div id='message'>
				{message}
			</div>
		{/if}
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
		position: relative;
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
	}
	#bricks_container > :nth-child(32){
		border-radius: 0px 10px 0px 0px;
	}
	#bricks_container > :nth-child(1){
		border-radius: 10px 0px 0px 0px;
	}
	#bricks_container > :nth-child(993){
		border-radius: 0px 0px 0px 10px;
	}
	#bricks_container > :nth-child(1024){
		border-radius: 0px 0px 10px 0px;
	}

	#score_board{
		width: 450px;
		margin-bottom: 10px;
		display: flex;
		align-items: center;
		font-size: 20px;
	}
	#score_board > *{
		margin-right: 20px;
	}
	
	#message{
		width: 445px;
		height: 445px;
		text-align: center;
		font-size: 40px;
		font-weight: 700;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.game{
		background-color: #a6adbaff !important;
	}


	button {
		background-color: #1f242d;
		padding: 10px;
		border-radius: 10px;
		border: none;
		color: #a6adbaff;
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
	}



</style>