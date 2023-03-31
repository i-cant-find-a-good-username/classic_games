<script lang='ts'>
    import people from '$lib/images/people.svg';
    import person from '$lib/images/person.svg';
    import circle from '$lib/images/circle.svg';
    import x from '$lib/images/x.svg';
    import type { Turn, Cell } from '../../types'
	import { onMount } from 'svelte';



    let solo: boolean = true
    let turn: Turn = "player1"

    let cells: Cell[] = ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"]
    const game_init = () => {
        cells = ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"]
    }

    const ai_turn = () => {

    }
    const change_mode = () => {
        solo = !solo
        localStorage.setItem("solo_mode", solo.toString());
        game_init()
    }

    const check_game_status = () => {
        if(cells[0] === cells[1] === cells[2]){

        }
    }


    const player_turn = (i: number) => {
        console.log(i)
        if(!solo){
            if(turn === 'player1'){
                cells[i] = "o"
                turn = "player2"
            }else if(turn === 'player2'){
                cells[i] = "x"
                turn = "player1"
            }
        }else{
            ai_turn()
        }
        check_game_status()
    }

    const change_diff = async (e: any) => {}

    onMount(async () => {
        solo = localStorage.getItem("solo_mode") ? JSON.parse(localStorage.getItem("solo_mode")) : false 
    })


</script>

<div id='main_parent'>
    <div id='main'>

        {#each Array(9) as _, i}
            <div class="cell" id={'' + i}  on:click={()=>{player_turn(i)}} on:keydown={()=>{}}>
                {#if cells[i] === "x" }
                    <img class='player_move' src={x} alt='lost' />
                {:else if cells[i] === "o" }
                    <img class='player_move' src={circle} alt='lost' />
                {/if}
            </div>
        {/each}

    </div>


    <div id='score_board'>
        <div id='scores'>
            <div>
                <div>00</div>
                <div>00</div>
            </div>
            <div>
                <div>YOU</div>
                <div>-</div>
                <div>CPU</div>
            </div>
        </div>
        <div id='diffculty'>
            <select name="diffculty"  on:change={change_diff} >
                <option value="easy">easy</option>
                <option value="normal">normal</option>
                <option value="hard">hard</option>
            </select>
    
            <div on:click={change_mode} >
                <img src={solo ? person : people} alt="">
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
    }

    #main{
        box-sizing: border-box;
        width: 450px;
        aspect-ratio: 1/1;
        border-radius: 10px;
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

   .cell{
        padding: 25px;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        aspect-ratio: 1/1;
        border: 2px solid #a6adbaff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    
    }

    #main > :first-child,
    #main > :nth-child(2),
    #main > :nth-child(3){
        border-top: 2px solid transparent;
    }

    #main > :first-child,
    #main > :nth-child(2),
    #main > :nth-child(3){
        border-top: 2px solid transparent;
    }

    #main > :first-child,
    #main > :nth-child(4),
    #main > :nth-child(7){
        border-left: 2px solid transparent;
    }

    #main > :nth-child(7),
    #main > :nth-child(8),
    #main > :nth-child(9){
        border-bottom: 2px solid transparent;
    }

    #main > :nth-child(3),
    #main > :nth-child(6),
    #main > :nth-child(9){
        border-right: 2px solid transparent;
    }

    .player_move{
        width: 100%;
        height: 100%;
    }

    #score_board{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #scores{
        width: 200px;
        display: flex;
        flex-direction: column;
    }
    #scores > :first-child{
        display: flex;
        justify-content: space-between; 
        font-size: 50px;
    }

    #scores > :nth-child(2){
        display: flex;
        justify-content: space-between;
        font-size: 30px;
    }

    #diffculty{
        display: flex;
        
    }

    #diffculty > :first-child{
        background-color: transparent;
        border: 2px solid #a6adbaff;
        padding: 10px;
        border-radius: 10px;
		color: #a6adbaff;
		font-size: 16px;
		font-weight: 600;
    }
    #diffculty > :nth-child(2){

        margin-left: 20px;
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: 2px solid #a6adbaff;
		border-radius: 10px;
		border: none;
		color: #a6adbaff;
        cursor: pointer;
    }

    #diffculty > :nth-child(2):hover{
		background-color: #1f242d;
    }

</style>