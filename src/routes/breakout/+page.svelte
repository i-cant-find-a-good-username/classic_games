<script lang='ts'>
	import settings from '$lib/images/settings.svg';


	let message = 'click to start game'
	let show_message = true
	let bar: number = 425
	let ball: {x: number, y: number} = {x: 492, y:40}
	let game_status = false
	let ball_moving = false
	let game_interval: NodeJS.Timeout
	let angle = Math.floor(Math.random() * (150 - 30 + 1) + 30) // make it dont accept 90
	let lives = 3
	const bar_width = 150
	let bricks: {element: Element, x: any; y: number; height: number; width: number; destroyed: boolean; }[] = [];
	let main: Element
	import { onMount } from 'svelte';
	onMount(async () => {
		main = document.getElementById("main")
	});



   
	const game_over = () => {
		clearInterval(game_interval)
		lives--
		if (lives == 0){
			show_message = true
			message = 'game over'
		}
	}


	const move_bar = (e: MouseEvent) => {
		var offset = main?.offsetLeft
		var test = main?.offsetTop
		//@ts-ignore
		const x = e.pageX - offset
		if (x >= 0+74 && x <= 999-114) {
			bar = x -75;
		}
		if (!game_status) {
			ball.x = bar + 75	;
		}
	}

	const wall_collisions = () => {
		if (ball.x + 20 >= 1000 && (angle <= 90 && angle >= -90)) {
			angle = angle*2
		console.log(angle)
		}else if (ball.x <= 0 && (angle >= 90 && angle <= 270)){
			angle = 180 - angle
		console.log(angle)
		}else if (ball.y >= 600 && (angle <= 180 && angle >= 0)){
			angle = 360-angle
		console.log(angle)
		}else if (ball.y + 20 <= 0){
			game_over()
			restart_game()
		}
	}


	const brick_collisions = () => {
		bricks.forEach(brick => {})
		for (let i = 0; i < bricks.length; i++) {
			if (
				(bricks[i].x <= ball.x && bricks[i].x+bricks[i].width >= ball.x)
				&&
				(bricks[i].y <= 600-ball.y && bricks[i].y+bricks[i].height >= 600-ball.y)
			){
				bricks[i].element.style.backgroundColor = "transparent"
				bricks[i].destroyed == true
				change_angle()
				break
				// change angle
			}
		
			
		}
	}
	const bar_collision = () => {

	}
	

	const change_angle = () => {}
	const game_loop = () => {
		for (let i = 0; i < 4; i++) {
			// direction according to the angle
			var x = Math.cos(angle * Math.PI/180);
			var y = Math.sin(angle * Math.PI/180);
			ball.x += x
			ball.y += y
			brick_collisions()
			wall_collisions()
			bar_collision()
		}
		if (ball.x > 1000){
			clearInterval(game_interval);
		}
	}

	const restart_game = () => {
		bar = 425
		ball = {x: 492, y:40}
		game_status = false
		angle = Math.floor(Math.random() * (150 - 30 + 1) + 30)
		// return bricks
	}

	const start_game = () => {
		if (!game_status){
			lives = 3
			show_message = false
			//ball = {x: 492, y:18}
			//bar = 425


			//const main = document.getElementById("main")
			let all = document.getElementsByClassName("brick");
			[...all].forEach((el: Element) => {
			bricks.push({
				element: el,
				x: el.offsetLeft,
				y: el.offsetTop,
				height: el.clientHeight,
				width: el.clientWidth,
				destroyed: false,
			});
			});

			game_status = true
			game_interval = setInterval(game_loop, 1)
		}
	}


</script>





<svelte:window />
<div id='main_parent' >

	<div id='score_board'>
		<div>
			<button> <img src={settings} alt=""> </button>
			<button>new game</button>
			<div>SCORE: 0</div>
			<div>BEST: 0</div>    
		</div>
		<div>
			{#each Array(lives) as _}
				<div></div>
			{/each}
		</div>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div id='main' on:mousemove={move_bar} on:click={start_game}>
		{#if show_message}
			<div id='message'>
				{message}
			</div>
		{/if}
		<div id='bricks_container'>
			{#each Array(6*12) as item}
				<div class='brick' on:click={(e) => {console.log(e.target.offsetLeft, e.target.offsetTop, e.target.clientHeight, e.target.clientWidth)}}></div>
			{/each}
		</div>

		<div id='ball' style="left:{ball.x}px; bottom:{ball.y}px">
			{ball.x} / {ball.y}
		</div>
		<div id='player_area' >
			<div id='player_bar' style="left:{bar}px" ></div>
		</div>
	</div>
</div>

<style>
	#main_parent{
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-left: 50px;
		padding-right: 50px;
		padding-right: 50px;
	}
	#main{
		height: 600px;
		width: 1000px;
		box-sizing: border-box;
		margin: auto;
		border: 2px solid #a6adbaff;
		border-radius: 10px;
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
	}
	#bricks_container{
		padding: 50px;
		border: 1px solid white;
		margin-bottom: 150px;
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
	}

	#player_area{
		border: 1px solid white;
		width: 100%;
		height: 15px;
		display: flex;
		position: relative;
	}

	#ball{
		background-color: #a6adbaff;
		height: 20px;
		width: 20px;
		position: absolute;
		border-radius: 100%;
	}
	#player_bar{
		position: absolute;
		height: 15px;
		width: 150px;
		background-color: #a6adbaff;
		transition: all 200ms cubic-bezier(.05,.43,.25,.95);
	}





	#bricks_container > * {
		border: #2a303c 1px solid;
		height: 20px;
		background-color: #f87171ff;
	}
	#bricks_container > :nth-child(n+13) {
		background-color: #fb923cff;
	}
	#bricks_container > :nth-child(n+25) {
		background-color: #facc15ff;
	}
	#bricks_container > :nth-child(n+37) {
		background-color: #4ade80ff;
	}
	#bricks_container > :nth-child(n+49) {
		background-color: #60a5faff;
	}
	#bricks_container > :nth-child(n+61) {
		background-color: #c084fcff;
	}
	/*
	.brick{
		border: transparent 2px solid;
		height: 100%;
		width: 8.33%;
	}
	.bricks_row{
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 20px;
		gap: 2px;
		margin-bottom: 6px;
	}
	#bricks_container > :first-child > * {
		background-color: #f87171ff;
	}
	#bricks_container > :nth-child(2) > * {
		background-color: #fb923cff;
	}
	#bricks_container > :nth-child(3) > * {
		background-color: #facc15ff;
	}
	#bricks_container > :nth-child(4) > * {
		background-color: #4ade80ff;
	}
	#bricks_container > :nth-child(5) > * {
		background-color: #60a5faff;
	}
	#bricks_container > :nth-child(6) > * {
		background-color: #c084fcff;
	}
	*/


	#score_board{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 10px;
	}
	#score_board > :first-child, #score_board > :nth-child(2){
		display: flex;
		align-items: center;
	}
	#score_board > :first-child  > :first-child {
		background-color: red;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	#score_board > :first-child > :first-child, #score_board > :first-child > :nth-child(2){
		background-color: #1f242d;
		padding: 10px;
		border-radius: 10px;
		border: none;
		color: #a6adbaff;
		font-size: 16px;
		font-weight: 600;
	}
	#score_board > :first-child > *, #score_board > :nth-child(2) > *{
		margin-right: 20px;
	}
	#score_board > :nth-child(2) > *:last-of-type{
		margin-right: 0px;

	}
	#score_board > :nth-child(2) > *{
		height: 15px;
		width: 15px;
		border-radius: 100%;
		background-color: #a6adbaff;
	}

	#message{
		width: 1000px;
		height: 600px;
		top: 0;
		left: 0;
		text-align: center;
		font-size: 40px;
		font-weight: 700;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}


</style>