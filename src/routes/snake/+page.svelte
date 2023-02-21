<script>

    const move = (e) => {

        if(e.keyCode === 37){
        }else if(e.keyCode === 39){
        }

    }

</script>





<svelte:window on:keydown={move}/>
<div id='main_parent' >
    <div id='main'>
        <div id='bricks_container'>
            
        </div>


    
    </div>
</div>

<style>
    #main_parent{
        padding-left: 250px;
        padding-right: 250px;
        padding-top: 0px;
        padding-bottom: 0px;
    }
    #main{
        box-sizing: border-box;
        width: 500px;
        height: 500px;
        margin: auto;
        border: 2px solid #a6adbaff;
        border-radius: 10px;
        padding: 10px;
    }
    #bricks_container{
        display: flex;
        flex-direction: column;
        margin-bottom: 150px;
        
        
    }

</style>