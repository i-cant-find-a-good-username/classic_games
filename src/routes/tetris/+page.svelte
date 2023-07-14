<script lang="ts">
	import { onMount } from 'svelte';

	let game_status = false
	let score = 0

	const I = 0
	const J = 0
	const L = 0
	const O = 0
	const S = 0
	const T = 0
	const Z = 0

	const input = (e: KeyboardEvent) => {
		// 32 space
		// 13 enter
		if (e.keyCode >= 37 && e.keyCode <= 40){
		}
		if (e.keyCode === 37) {
		} else if (e.keyCode === 38) {
		} else if (e.keyCode === 39) {
		} else if (e.keyCode === 40) {
		}
	}


	const spawn = () => {}
	onMount(async () => {})

</script>



<svelte:window on:keydown={input} />
<div id='center'>
	<div id='game_container'>
		{#each Array(180) as _, i}
			<div id={'box_'+(i+1)}></div>
		{/each}
	</div>
	<div id='score_container'>
		<div id='next_block'>
			d
		</div>
		<div id='scores'>
			<h1>LEVEL: 0</h1>
			<h1>SCORE: 0</h1>
			<h1>LINES: 0</h1>
		</div>
	</div>
</div>

<style>
	
	#center{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		height: 100%;
		padding: 20px;
		box-sizing: border-box;
	}

	#center > * {
		height: 100%;
	}

	#center > :first-child{
		border: 4px solid #a6adbaff;
		height: 100%;
		aspect-ratio: 10/18;
	}

	#center > :nth-child(2){
		aspect-ratio: 10/18;
		height: 100%;
	}

	#game_container{
		box-sizing: border-box;
		display: grid;
		gap: 1px;
		grid-template-columns: repeat(10, minmax(0, 1fr));
		width: fit-content;
	}

	#game_container > * {
		width: 100%;
		aspect-ratio: 1/1;
		background-color: #1f242d;
	}

	#score_container{
		
	}

	#next_block{
		display: flex;
		align-items: center;
		justify-content: center;
		border: 4px solid #a6adbaff;
		aspect-ratio: 3/2;
	}

</style>
