<script lang='ts'>
	interface cell {
		init: Boolean,
		value: number,
		active: boolean
	}
	const init_cell = (): cell => {
		return {
			init: false,
			value: 0,
			active: false
		}
	}
	Array.from({length: 9}, (e, i)=> Array.from({length: 9}, (e)=> init_cell()))

	
	let grid = Array.from({length: 9}, (e, i)=> Array.from({length: 9}, (e)=> init_cell()))
	console.log(grid)
	let active_cells: [number, number][] = [[0, 0], [0, 1]]


	const clicked_cell = (e: MouseEvent) => {
		const ids = e.target?.id.split("_")
		console.log(ids)
		console.log(ids[1])
		console.log(ids[1]%3)
		//active_cells = [ids[1], ids[2]]

		console.log(active_cells.includes([0, 0]))
		console.log(active_cells)
	}


</script>

<div id='main_parent'>
	<div id='main'>
		<div id='main_grid'>
			{#each grid as sub_grid, i}
				<div class='sub_grid'>
					{#each sub_grid as cells, j}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div on:click={clicked_cell} id={"cell_"+i+'_'+j} class='cell {true ? 'active_cell' : ''}'>{i}{j}</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
	<div id='controls'>
		<button>1</button>
		<button>2</button>
		<button>3</button>
		<button>4</button>
		<button>5</button>
		<button>6</button>
		<button>7</button>
		<button>8</button>
		<button>9</button>
		<button>X</button>
	</div>
</div>

<style>
	#main_parent{
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	#main{
		box-sizing: border-box;
		width: 500px;
		aspect-ratio: 1/1;
		/*margin: auto;*/
		border: 4px solid #1f242d;
		background-color: #1f242d;
	}
	#controls{
		padding-top: 10px;
		width: 500px;
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: 2px;
	}
	#controls > * {
		font-size: large;
		padding: 10px;
		width: 100%;
		border: none;
		background-color: #1f242d;
		color: #a6adbaff;
	}
	#controls > :nth-child(1) {
		border-radius: 10px 0px 0px 0px;
	}
	#controls > :nth-child(5) {
		border-radius: 0px 10px 0px 0px;
	}
	#controls > :nth-child(6) {
		border-radius: 0px 0px 0px 10px;
	}
	#controls > :nth-child(10) {
		border-radius: 0px 0px 10px 0px;
	}
	#main_grid{
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		column-gap: 5px;       
		row-gap: 5px;
	}
	.sub_grid{
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		column-gap: 2px;       
		row-gap: 2px;
	}
	.cell{
		cursor: pointer;
		width: 100%;
		height: 100%;
		background-color: #2a303c;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.active_cell{
		background-color: #4b5563;
	}
	/*test*/
	/*
	.sub_grid > :first-child{
		background-color: #4b5563;
	}
	.sub_grid > :nth-child(2){
		background-color: #eb5757ff;
	}
	*/

</style>