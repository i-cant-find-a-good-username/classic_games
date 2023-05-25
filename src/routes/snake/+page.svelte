<script lang='ts'>
    import { onMount } from 'svelte';


    let initial_snake_len = 3
    let trajectory: "up" | "down" | "left" | "right" = "right"

    let tempo: any
    let snake: {x: number, y: number}[] = [{x: 16, y: 14}, {x: 16, y: 15}, {x: 16, y: 16}]


    let arr = Array.from({length: 32}, (e, i)=> Array.from({length: 32}, (e)=> 0))

    arr[16][16] = 1
    arr[16][15] = 1
    arr[16][14] = 1

    console.log(arr)

    function change_traj(e: KeyboardEvent){
        if(e.keyCode === 37){
			trajectory = "left"
        }else if(e.keyCode === 38){
			trajectory = "up"
        }else if(e.keyCode === 39){
			trajectory = "right"
        }else if(e.keyCode === 40){
			trajectory = "down"
        }
    }

    const start_game = () => {
        setInterval(()=>{
            if (trajectory = "right"){
                tempo = [snake[0], snake[snake.length-1]]
                arr[tempo[1].x+1][tempo[1].y] = 1
                arr[tempo[1].x-1][tempo[1].y] = 0
            }
        }, 100)
    }

    onMount(async () => {
        start_game()

	});

</script>





<svelte:window on:keydown={change_traj}/>
<div id='main_parent' >
    <div id="score_board">
        <div>BEST : 0</div>
        <div>SCORE : 0</div>
    </div>
    <div id='main'>
        <div id='bricks_container'>
            {#each Array(32) as _,i}
                {#each Array(32) as _,j}
                    <div class={ arr[i][j] === 0 ? '' : 'game'  } ></div>
                {/each}
            {/each}
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
        height: 450px;
        border: 2px solid #a6adbaff;
        border-radius: 10px;
    }
    #bricks_container{
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
        background-color: red;
        border: 1px black solid;
    }

    #score_board{
        width: 450px;
        margin-bottom: 10px;
        display: flex;
        font-size: 20px;
    }
    #score_board > *{
        padding-right: 20px;
    }
    


    .game{
        background-color: #a6adbaff !important;
    }






</style>