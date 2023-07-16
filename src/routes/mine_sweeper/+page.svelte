<script lang="ts">
	import { dirty_components } from "svelte/internal";

	// -1 unopened
	// 0 balnk
	// 1
	// 2
	// 3
	// 4 flaged
	// 5 unopened bomb
	// 6 bomb
	let grid: number[][]
	let diffculty = 'easy'
	let num_bombs = 10

	const generate_grid = () => {
		let height = 8
		let width = 8
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
		grid = Array.from({length: height}, (e, i)=> Array.from({length: width}, (e, i)=> 0))
		
		// bombs
		for (let i = 0; i < num_bombs; i++) {
    		let x = Math.floor(Math.random() * height)
    		let y = Math.floor(Math.random() * width)
    		if ((Math.abs(x) <= 1 && Math.abs(y) <= 1) || grid[x][y] === 5){
    			i--
    			continue
    		}
    		grid[x][y] = 5
    	}

		// values
		for (let i = 0; i < height; i++) {
			for (let j = 0; j < width; j++) {
				if (grid[i][j] !== 5) {
					let value = 0;
						for (let x = i - 1; x <= i + 1; x++) {
							for (let y = j - 1; y <= j + 1; y++) {
								if (
									x >= 0 &&
									x < height &&
									y >= 0 &&
									y < width &&
									grid[i][j] === 5
								) {
									value++;
								}
							}
						}
					console.log(value)
					grid[i][j] = value
				}
			}
		}

		console.log(grid)


	}
	generate_grid()

	let start_game = () => {
		generate_grid()
		console.log("restart")
	}

</script>

<div id='center'>
	<div id='game_container'>




		<div id="main">
			{#each grid as row, i}
				<div class={diffculty === "easy" ? 'rows1' : diffculty === "normal" ? 'rows2' : 'rows3' }>
					{#each row as cell}
						<button id={'cell_'+cell}>{cell}</button>
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
		display: flex;
		align-items: center;
		justify-content: center;
	}
	#main, #main2 ,#main3{
		display: flex;
		flex-direction: column;
		gap: 2px;
		width: fit-content;
	}
	#main{
		height: 320px;
		width: 320px;
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
		padding: 10px;
		border-radius: 10px;
		color: #a6adbaff;
		font-size: 16px;
		cursor: pointer;
		font-weight: 600;
	}



	:global(.mine){
		background-color: red !important;
	}


</style>
