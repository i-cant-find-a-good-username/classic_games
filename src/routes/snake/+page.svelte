<script>
    import { onMount } from 'svelte';


    let initial_snake_len = 3

    const move = (e) => {

        if(e.keyCode === 37){
        }else if(e.keyCode === 39){
        }

    }



    let values = []
    let arr = []
    for (let i = 0; i < 32; i++) {
        values.push(0)
    }

    for (let i = 0; i < 32; i++) {
        arr.push(values)
    }

    onMount(async () => {
 
        let random1 = Math.floor(Math.random() * 32)
        let random2 = Math.floor(Math.random() * 32)
        console.log(random1 ,random2 )
        arr[random1][random2] = 1
        console.log(arr)
	});

</script>





<svelte:window on:keydown={move}/>
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