<script>

</script>


<div>
    <div id='title_texts'>
        <h1>Play Games</h1>
        <p>enjoy</p>
    </div>

    <div id='grid'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>


<style>
    #title_texts{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #grid{
        display: grid;
        
        column-gap: 50px;       
        row-gap: 50px;
    }
    #grid > *{
        width: 100px;
        height: 100px;
        background-color: red;
    }
</style>