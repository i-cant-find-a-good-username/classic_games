<script lang='ts'>
    import settings from '$lib/images/settings.svg';

    let bar: number = 425
    let ball: {x: number, y: number} = {x: 492, y:18}
    let game_started: boolean = false
    let ball_moving: boolean = false
	let game_interval: NodeJS.Timeout

    let game_status = false
    let bricks: { x: any; y: number; height: number; width: number; destroyed: boolean; }[] = [];

	import { onMount } from 'svelte';
    onMount(async () => {
       
	});


   
    const game_over = () => {}
    const move_bar = () => {}
    const collisions = () => {}
    const game_loop = () => {
        game_status = false
		clearInterval(game_interval);
		//start_game()
    }


    const move = (e: KeyboardEvent) => {
        if(!game_started){
            game_started = true
            if(!ball_moving){
                ball_moving = true
                move_ball()
            }
        }
    }

    const start_game = () => {
        ball = {x: 0, y:0}
        bar = 0

        let all = document.getElementsByClassName("brick");
        [...all].forEach((el: Element) => {
          bricks.push({
            x: el.offsetLeft,
            y: 580 - el.offsetTop,
            height: el.clientHeight,
            width: el.clientWidth,
            destroyed: false,
          });
        });
		game_interval = setInterval(game_loop, 100);
    }


</script>





<svelte:window on:keydown={move}/>
<div id='main_parent' >

    <div id='score_board'>
        <div>
            <button> <img src={settings} alt=""> </button>
            <button>new game</button>
            <div>SCORE: 0</div>
            <div>BEST: 0</div>    
        </div>
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
	</div>
    <div id='main'>
        <div id='bricks_container'>
            {#each Array(6*12) as item}
                <div class='brick'></div>
            {/each}
        </div>

        <div id='player_area'>
            <div id='ball' style="left:{ball.x}px; bottom:{ball.y}px"></div>
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
        height: 15px;
        width: 15px;
        position: absolute;
        bottom: 0px;
    }
    #player_bar{
        position: absolute;
        height: 15px;
        width: 150px;
        background-color: #a6adbaff;
		transition: all 200ms cubic-bezier(.05,.43,.25,.95);
    }





    #bricks_container > * {
        border: #1f242d 1px solid;
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


</style>