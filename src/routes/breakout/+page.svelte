<script>

</script>

<div id='main_parent'>
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
                <div id='ball'></div>
                <div id='player_bar'></div>
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
    }
    #player_bar{
        height: 10px;
        width: 150px;
        background-color: #a6adbaff;
    }


    .bricks_row{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 20px;
    }
    .brick{
        border: black 2px solid;
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


</style>