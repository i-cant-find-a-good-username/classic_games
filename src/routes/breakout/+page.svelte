<script>

    let bar
    let ball

    const move = (e) => {

        if(e.keyCode === 37){
            console.log(bar.style.left)
            bar.style.left = bar.style.left + 10
        }else if(e.keyCode === 39){
            console.log(bar.style.right)
            bar.style.right = '10px'
        }

    }

</script>





<svelte:window on:keydown={move}/>
<div id='main_parent' >
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
        background-color: red;
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


</style>