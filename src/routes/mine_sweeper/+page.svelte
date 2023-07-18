<script lang="ts">
	import { onMount } from "svelte/internal";

	interface Box{
		type: 'bomb' | 'number',
		value: number,
		opened: boolean,
		flagged: boolean,
	}
	const gen_obj = (): Box => {
		return {
			type: "number",
			value: 0,
			opened: false,
			flagged: false,
		}
	} 
	let grid: Box[][]
	let diffculty = 'easy'
	let num_bombs = 10
	let height = 8
	let width = 8
	let game_status = true
	let message = 'start game'
	let show_message = true

	const generate_grid = () => {
		if (diffculty == 'easy'){
			num_bombs = 10
			height = 8
			width = 8
		}else if(diffculty == 'normal'){
			num_bombs = 20
			height = 16
			width = 16
		}else if(diffculty == 'hard'){
			num_bombs = 99
			height = 16
			width = 32
		}

		grid = Array.from({length: height}, (e, i) => Array.from({length: width}, (e, i) => gen_obj()))
		
		// bombs
		for (let i = 0; i < num_bombs; i++) {
    		let x = Math.floor(Math.random() * height)
    		let y = Math.floor(Math.random() * width)
    		if ((Math.abs(x) <= 1 && Math.abs(y) <= 1) || grid[x][y].type === "bomb"){
    			i--
    			continue
    		}
    		grid[x][y].type = "bomb"
    	}

		// values
		for (let i = 0; i < height; i++) {
			for (let j = 0; j < width; j++) {
				if (grid[i][j].type !== 'bomb') {
					let value = 0;
						for (let x = i - 1; x <= i + 1; x++) {
							for (let y = j - 1; y <= j + 1; y++) {
								if (
									x >= 0 &&
									x < height &&
									y >= 0 &&
									y < width &&
									grid[x][y].type === 'bomb'
								) {
									value++;
								}
							}
						}
					grid[i][j].value = value
				}
			}
		}
	}
	generate_grid()

	let start_game = () => {
		time = 0
		game_status = true
		generate_grid()
	}



	const opened = (i: number, j: number) => {
		if(!game_status) {
			// restart
			start_game()
		}
		if(show_message){
			show_message = false
		}
		if (grid[i][j].type === 'bomb') {
			// reveal the board after lost
			clearInterval(time_interval)
			game_status = false
			message = 'you lost'
			show_message = true
			for (let i = 0; i < height; i++) {
				for (let j = 0; j < width; j++) {
					if (grid[i][j].type === 'bomb') {
						grid[i][j].opened = true;
					}
				}
			}
			return;
		}
		// choas
		if(grid[i][j].opened){
			let count = 0;
			let flagged_around = 0;
			let revealed_round = 0;
			for(let x = i - 1; x <= i + 1; x++){
				for (let y = j - 1; y <= j + 1; y++) {
					if (x >= 0 && x < height && y >= 0 && y < width) {
						if (grid[x][y].flagged) {
							flagged_around++;
						}
						if (grid[x][y].opened) {
							revealed_round++;
						}
						count++;
					}
				}
			}
			if(flagged_around === grid[i][j].value){
				for (let x = i - 1; x <= i + 1; x++) {
					for (let y = j - 1; y <= j + 1; y++) {
						if (
							x >= 0 &&
							x < height &&
							y >= 0 &&
							y < width &&
							!grid[x][y].flagged &&
							!grid[x][y].opened
						) {
							opened(x, y);
						}
					}
				}
			}else if (revealed_round === count - grid[i][j].value){
				for (let x = i - 1; x <= i + 1; x++) {
					for (let y = j - 1; y <= j + 1; y++) {
						if (
							x >= 0 &&
							x < height &&
							y >= 0 &&
							y < width &&
							!grid[x][y].flagged &&
							!grid[x][y].opened
						) {
							//flag(x, y, grid[x][y]);
							//board = board;
						}
					}
				}
			}
		}else{
			if (grid[i][j].value === 0) {
				for (let x = i - 1; x <= i + 1; x++) {
					for (let y = j - 1; y <= j + 1; y++) {
						if (
							x >= 0 &&
							x < height &&
							y >= 0 &&
							y < width &&
							!grid[x][y].opened
						) {
							grid[x][y].opened = true;
							opened(x, y);
						}
					}
				}
			} else {
				grid[i][j].opened = true;
			}
		}
		// check if won here
		// if all cells but bombs are open
		let counter = height*width - num_bombs
		for (let i = 0; i < height; i++) {
			for (let j = 0; j < width; j++) {
				if(grid[i][j].opened && grid[i][j].type !== 'bomb'){
					counter--
				}
			}
		}
		if(counter == 0){
			clearInterval(time_interval)
			game_status = false
			message = 'you won'
			show_message = true
		} 
	}



	let time_interval: NodeJS.Timeout
	let time = 0;
	$: minutes = Math.floor(time/60);
	$: seconds = time%60;
	onMount(() => {
		const time_interval = setInterval(() => {
			time++
		}, 1000);

		return () => {
			clearInterval(time_interval);
		};
	});

</script>

<div id='center'>
	{#if show_message}
		<div id='message'>
			{message}
		</div>
	{/if}



	<div id='game_container'>
		<div id="main">
			{#each grid as row, i}
				<div class="{diffculty === "easy" ? 'rows1' : diffculty === "normal" ? 'rows2' : 'rows3' }">
					{#each row as cell, j}
						{#if !cell.opened}
							<button on:click={() => {opened(i, j)}} class='cell'></button>
						{:else if cell.flagged}
							<button on:click={() => {opened(i, j)}} class='flag'></button>
						{:else if cell.type === 'bomb'}
							<button on:click={() => {opened(i, j)}} class='bomb'></button>
						{:else}
							<button on:contextmenu|preventDefault={() => {alert('fff')}} on:click={() => {opened(i, j)}} class="n_cell cell_{cell.value}">{cell.value}</button>
						{/if}
					{/each}
				</div>
			{/each}
		</div>
	</div>


	<div id='settings'>
		<select bind:value={diffculty} on:change={start_game} name="diffculty" id="diffculty" >
			<option value="easy">easy</option>
			<option value="normal">normal</option>
			<option value="hard">hard</option>
		</select>
		<div id='score_board'>
			<div>TIME: {('0'+minutes).slice(-2)}:{('0'+seconds).slice(-2)}</div>
			<div>bombs: {num_bombs}</div>
		</div>
	</div>

</div>

<style>
	#center{
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	#game_container{
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	#main{
		display: flex;
		flex-direction: column;
		gap: 2px;
		width: fit-content;
	}
	

	.rows1, .rows2, .rows3{
		display: flex;
		width: fit-content;
		gap: 2px;
	}

	
	.rows1 > * {
		height: 40px;
		width: 40px;
		border: none;
		cursor: pointer;
	}
	.rows2 > * {
		height: 25px;
		width: 25px;
		border: none;
		cursor: pointer;
	}
	.rows3 > * {
		height: 20px;
		width: 20px;
		border: none;
		cursor: pointer;
	}

	#settings{
		padding: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#diffculty{
		background-color: transparent;
		border: 2px solid #a6adbaff;
		color: #a6adbaff;
		padding: 10px;
		border-radius: 10px;
		font-size: 16px;
		cursor: pointer;
		font-weight: 600;
		margin-right: 20px;
	}



	.n_cell{
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: large;
		font-weight: 600;
		background-color: #1f242d;
	}

	.cell_0{color: transparent}
	.cell_1{color: red}
	.cell_2{color: green}
	.cell_3{color: blue}
	.cell_4{color: purple}
	.cell_5{color: yellow}
	.cell_6{color: pink}
	.cell_7{color: aqua}
	.cell_8{color: chocolate}
	.cell_9{color: lawngreen}

	:global(.bomb){
		background-color: red !important;
	}
	:global(.flag){
		background-color: green !important;
	}
	

	#message{ 
		position: absolute;
		top: 100px;
		text-align: center;
		font-size: 40px;
		font-weight: 700;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	
	}


	#score_board{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	#score_board > *{
		padding-right: 20px;
		border:red 10px solid;
		font-size: large;
		border: none;
		color: #a6adbaff;
		font-weight: 600;
	}

</style>
