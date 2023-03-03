<script lang='ts'>
    import people from '$lib/images/people.svg';
    import person from '$lib/images/person.svg';
    import circle from '$lib/images/circle.svg';
    import x from '$lib/images/x.svg';



    let cell_1 = true
    let cell_2 = true
    let cell_3 = false
    let cell_4 = false
    let cell_5 = false
    let cell_6 = false
    let cell_7 = false
    let cell_8 = false
    let cell_9 = false

    const change_diff = async (e: any) => {}


</script>

<div id='main_parent'>
    <div id='main'>
        <div class="cell"  on:click={() => {cell_1 = true }}>
            {#if cell_1 }
                <img class='player_move' src={circle} alt='lost' />
            {/if}
        </div>
        <div class="cell" on:click={() => {cell_2 = true }} >
            {#if cell_2}
                <img class='player_move' src={x} alt='lost' />
            {/if}
        </div>
        <div class="cell" on:click={() => {cell_3 = true }} >
            {#if cell_3}
                <img class='player_move' src={x} alt='lost' />
            {/if}
        </div>
        <div class="cell" on:click={() => {cell_4 = true }} >
            {#if cell_4}
                hello
            {/if}
        </div>
        <div class="cell" on:click={() => {cell_5 = true }} >
            {#if cell_5}
                hello
            {/if}
        </div>
        <div class="cell" on:click={() => {cell_6 = true }} >
            {#if cell_6}
                hello
            {/if}
        </div>
        <div class="cell" on:click={() => {cell_7 = true }} >
            {#if cell_7}
                hello
            {/if}
        </div>
        <div class="cell" on:click={() => {cell_8 = true }} >
            {#if cell_8}
                hello
            {/if}
        </div>
        <div class="cell" on:click={() => {cell_9 = true }} >
            {#if cell_9}
                hello
            {/if}
        </div>
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
    
            <div>
                <img src={person} alt="">
            </div>
        </div>


    </div>
    
</div>

<style>
    #main_parent{
        height: 100%;

    }
    #main{
        box-sizing: border-box;
        width: 300px;
        aspect-ratio: 1/1;
        margin: auto;
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