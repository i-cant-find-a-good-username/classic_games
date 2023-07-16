<script lang='ts'>
	let game_won = false
	let show_message = true
	let message = 'use arrow keys to play'
	let moves = 0
	let win_grid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]
	let grid = [1, 2, 3, 4, 5, 6, 7, 8, 0, 9, 10, 11, 12, 13, 14, 15]
	function shuffleArray(array: number[]) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}
	shuffleArray(grid)



    const input = (e: KeyboardEvent) => {
		if (show_message && message == 'use arrow keys to play'){
			show_message = false
		}
		if (!game_won) {
			const empty_cell = grid.indexOf(0)
			switch (e.keyCode) {
				case 37:
					move_cell(empty_cell + 1, "left")
					break
				case 38:
					move_cell(empty_cell + 4, "up")
					break
				case 39:
					move_cell(empty_cell - 1, "right")
					break
				case 40:
					move_cell(empty_cell - 4, "down")
					break
				default:
					break
			}
		}
    }

	const valid_move_left = (): boolean => {
		const empty_index = grid.indexOf(0)
		if (empty_index == 3 || empty_index == 7 || empty_index == 11 || empty_index == 15){
			return false
		}
		return true
	}
	const valid_move_up = (): boolean => {
		const empty_index = grid.indexOf(0)
		if (empty_index == 12 || empty_index == 13 || empty_index == 14 || empty_index == 15){
			return false
		}
		return true
	}
	const valid_move_right = (): boolean => {
		const empty_index = grid.indexOf(0)
		if (empty_index == 0 || empty_index == 4 || empty_index == 8 || empty_index == 12){
			return false
		}
		return true
	}
	const valid_move_down = (): boolean => {
		const empty_index = grid.indexOf(0)
		if (empty_index == 0 || empty_index == 1 || empty_index == 2 || empty_index == 3){
			return false
		}
		return true
	}

	const valid_move = (side: "left"|"up"|"right"|"down"): boolean => {
		switch (side) {
			case "left":
				return valid_move_left()
			case "up":
				return valid_move_up()
			case "right":
				return valid_move_right()
			case "down":
				return valid_move_down()
		}
	}
  
    const move_cell = (cell: number, side: "left"|"up"|"right"|"down" ) => {
		const empty_index = grid.indexOf(0)
		if (valid_move(side)){
			[grid[cell], grid[empty_index]] = [grid[empty_index], grid[cell]]
			moves++
			if (grid.toString() == win_grid.toString()){
				won_game()
			}
		}
	}
	const won_game = () => {
		show_message = true
		message = 'you won'
		game_won = true
	}

	const new_game = () => {
		console.log("test")
		game_won = false
		shuffleArray(grid)
		grid = [...grid]
		show_message = true
		message = 'use arrow keys to play'

	}

	
	import { flip } from "svelte/animate";
</script>

<svelte:window on:keydown={input} />
<div id='main_parent'>
	{#if show_message}
		<div id='message'>{message}</div>
	{/if}
	<div id='score_board'>
		<button on:click={new_game} >new game</button>
		<div>TIME: 00 : 00</div>
		<div>MOVES: {moves}</div>
	</div>
	<div id='main'>
		{#each grid as item, i(item)}
			<div animate:flip={{ duration: 200 }} class='{item > 0 ?"cell" : ''}'>{item > 0 ? item : ""}</div>
		{/each}
	</div>
</div>

<style>
	#main_parent{
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	#main{
		position: relative;
		box-sizing: border-box;
		width: 450px;
		aspect-ratio: 1/1;
		border: 4px solid #1f242d;
		background-color: #1f242d;
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		column-gap: 5px;       
		row-gap: 5px;
	}

	.cell{
		background-color: #a6adbaff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 50px;
		font-weight: 600;
		color: #1f242d;
	}

	#score_board{
		width: 450px;
		display: flex;
		align-items: center;
		justify-content: start;
		padding-top: 10px;
		padding-bottom: 10px;
	}

	#score_board > *{
		margin-right: 20px;
		font-size: 20px;
	}

	#score_board > :first-child{
		background-color: #1f242d;
		padding: 10px;
		border-radius: 10px;
		border: 2px solid #a6adbaff;
		color: #a6adbaff;
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
	}

	
	#score_board > :nth-child(2){
		background-color: transparent;
		border: 2px solid #a6adbaff;
		padding: 10px;
		border-radius: 10px;
		color: #a6adbaff;
		font-size: 16px;
		font-weight: 600;
	}

	#message{
		/*background-color: #1f242d;
		position: absolute;*/
		display: flex;
		align-items: center;
		justify-content: center;

		text-align: center;
		font-size: 40px;
		font-weight: 700;
	}
</style>