<script>

</script>

<div id='main_parent'>
    <div id='main'>
        <div id='main_grid'>
            <div class='sub_grid'>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
            </div>
            <div class='sub_grid'>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
            </div>
            <div class='sub_grid'>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
            </div>
            <div class='sub_grid'>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
            </div>
            <div class='sub_grid'>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
            </div>
            <div class='sub_grid'>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
            </div>
            <div class='sub_grid'>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
            </div>
            <div class='sub_grid'>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
            </div>
            <div class='sub_grid'>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
                <div class='cell'></div>
            </div>
        </div>
    </div>
</div>

<style>
    #main_parent{
        padding: 50px;
    }
    #main{
        box-sizing: border-box;
        width: 500px;
        aspect-ratio: 1/1;
        margin: auto;
        border: 4px solid #1f242d;
        background-color: #1f242d;
    }

    #main_grid{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        column-gap: 5px;       
        row-gap: 5px;
    }
    .sub_grid{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        column-gap: 2px;       
        row-gap: 2px;
    }
    .cell{
        width: 100%;
        height: 100%;
        background-color: #2a303c;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    /*test*/
    .sub_grid > :first-child{
        background-color: #4b5563;
    }
    .sub_grid > :nth-child(2){
        background-color: #eb5757ff;
    }

</style>