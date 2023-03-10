<script lang='ts'>
    import settings from '$lib/images/settings.svg';

    let bar: any
    let ball
    let game_started = false


	import { onMount } from 'svelte';
    onMount(async () => {
        bar.style.right = ((bar.parentElement.parentElement.getBoundingClientRect().width/2))+"px"
	});


    const move_ball = (e) => {

    }


    const move = (e) => {
        if(!game_started){
            game_started = true
            move_ball()
        }
        if(e.keyCode === 37){
            //left
            bar.style.left = (bar.getBoundingClientRect().left - 160)+'px'
        }else if(e.keyCode === 39){
            bar.style.left = (bar.getBoundingClientRect().left - 135)+'px'
        }

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
            <div class="bricks_row">
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
            </div>
            <div class="bricks_row">
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
            </div>
            <div class="bricks_row">
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
            </div>
            <div class="bricks_row">
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
            </div>
            <div class="bricks_row">
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
            </div>
            <div class="bricks_row">
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
                <div class='brick'></div>
            </div>
        </div>


        <div id='player_area'>
            <div>
                <div bind:this={ball} id='ball'></div>
                <div bind:this={bar} id='player_bar'></div>
            </div>
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
        padding-left: 50px ;
        padding-right: 50px ;
    }
    #main{
        box-sizing: border-box;
        width: 100%;
        margin: auto;
        border: 2px solid #a6adbaff;
        border-radius: 10px;
        padding: 20px;
    }
    #bricks_container{
        display: flex;
        flex-direction: column;
        margin-bottom: 150px;
        
        
    }
    #player_area{
        width: 100%;
        height: 20px;
        display: flex;
        align-items: end; 
        justify-content: center;
        position: relative;
    }
    #player_area > :first-child{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #ball{
        background-color: #a6adbaff;
        height: 10px;
        width: 10px;
        position: absolute;
        bottom: 0px;
    }
    #player_bar{
        position: absolute;
        height: 10px;
        width: 150px;
        background-color: #a6adbaff;
        right: 50%;
        translate: 50%;
		transition: all 200ms cubic-bezier(.05,.43,.25,.95);
    
    }


    .bricks_row{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 20px;
        gap: 2px;
        margin-bottom: 6px;
    }
    .brick{
        border: transparent 2px solid;
        height: 100%;
        width: 8.33%;
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