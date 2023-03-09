<script>

</script>

<div id='main_parent'>

    <div id='board'>
        {#each Array(64) as _, i }
            <div class='cell { i%2 == 0 ? 'player1_cells' : 'player2_cells'} ' ></div>
        {/each}
    </div>

</div>

<style>
    

    #main_parent{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    #board{
        height: 90%;
        aspect-ratio: 1/1;
        display: grid;
        grid-template-columns: repeat(8, minmax(0, 1fr));
        border: 2px solid #a6adbaff;
    
    }

    .row{

        display: flex;
        flex-direction: row;
    }

    .cell{
        width: 100%;
        aspect-ratio: 1/1;
        background-color: #2a303cff;
    }
    



    #board div:nth-child(-2n+8), 
    #board div:nth-child(8) ~ div:nth-child(-2n+15), 
    #board div:nth-child(16) ~ div:nth-child(-2n+24),
    #board div:nth-child(24) ~ div:nth-child(-2n+31),
    #board div:nth-child(32) ~ div:nth-child(-2n+40),
    #board div:nth-child(40) ~ div:nth-child(-2n+47),
    #board div:nth-child(48) ~ div:nth-child(-2n+56),
    #board div:nth-child(56) ~ div:nth-child(-2n+63) {
        background-color: #4b5563ff;
    }


</style>