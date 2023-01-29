<script>



</script>

<div id='main_parent'>
    <div id='main'>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
    </div>
    
</div>

<style>
    #main_parent{
        padding: 50px;
    }
    #main{
        box-sizing: border-box;
        width: 450px;
        aspect-ratio: 1/1;
        margin: auto;
        border-radius: 10px;
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

   .cell{
        width: 100%;
        height: 100%;
        border: 2px solid #a6adbaff;
    }

    #main > :first-child,
    #main > :nth-child(2),
    #main > :nth-child(3){
        border-top: none;
    }
    #main > :first-child,
    #main > :nth-child(4),
    #main > :nth-child(7){
        border-left: none;
    }
    #main > :nth-child(7),
    #main > :nth-child(8),
    #main > :nth-child(9){
        border-bottom: none;
    }
    #main > :nth-child(3),
    #main > :nth-child(6),
    #main > :nth-child(9){
        border-right: none;
    }
</style>