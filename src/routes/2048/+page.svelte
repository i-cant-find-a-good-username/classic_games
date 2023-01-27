<script>

</script>

<div>

    <div id='main'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>

</div>


<style>

    #main{
        background-color: #1f242dff;
        width: 400px;
        height: 400px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    #main > *{
        height: 100%;
        width: 100%;
        background-color: green;
        border: 2px solid #1f242dff;

    }
    
</style>