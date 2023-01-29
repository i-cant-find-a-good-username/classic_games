<script>

</script>

<div id='main_parent'>
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
        padding: 50px;
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


</style>