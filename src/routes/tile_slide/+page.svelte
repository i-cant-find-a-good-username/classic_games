<script>

</script>

<div id='main_parent'>
    <div id='score_board'>
        
        <select name="diffculty" >
            <option value="easy">3x3</option>
            <option value="normal">4x4</option>
            <option value="hard">5x5</option>
            <option value="hard">6x6</option>
        </select>
		<div>TIME: 00 : 00</div>
		<div>MOVES: 0</div>
    </div>
    <div id='main'>
        <div class='cell'>5</div>
        <div class='cell'>5</div>
        <div class='cell'>5</div>
        <div class='cell'>5</div>
        <div class='cell'>5</div>
        <div class='cell'>5</div>
        <div class='cell'>5</div>
        <div class='cell'>1</div>
    </div>
</div>

<style>
    #main_parent{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #main{
        box-sizing: border-box;
        width: 450px;
        aspect-ratio: 1/1;
        margin: auto;
        border: 4px solid #1f242d;
        background-color: #1f242d;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        column-gap: 5px;       
        row-gap: 5px;
    }
    .cell{
        background-color: #a6adbaff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 50px;
        font-weight: 600;
        color: #1f242d;
    }


    #score_board{
        width: 450px;
        display: flex;
        align-items: center;
        justify-content: start;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    #score_board > *{
        margin-right: 20px;
        font-size: 20px;
    }

    #score_board > :first-child{
    

        background-color: transparent;
        border: 2px solid #a6adbaff;
        padding: 10px;
        border-radius: 10px;
		color: #a6adbaff;
		font-size: 16px;
		font-weight: 600;
    }


</style>