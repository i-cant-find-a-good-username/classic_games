<script>

    const move = (e) => {

        if(e.keyCode === 37){
        }else if(e.keyCode === 39){
        }

    }

</script>





<svelte:window on:keydown={move}/>
<div id='main_parent' >
    <div id="score_board">
        <div>BEST : 0</div>
        <div>SCORE : 0</div>
    </div>
    <div id='main'>
        <div id='bricks_container'>
            
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
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
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







</style>