<script lang='ts'>

    export let index: BigInteger;
    export let  card;
    export let  drag: boolean;

</script>



{#if card.type === 'flipped'}

{:else}

    <div class='card' style={'top: '+index*50+'px'} draggable={drag} >
        <div class='card_front'>
            <div>
                <div style={'color:' + card.color }> {card.name} </div>
                <img src={card.type} alt="" draggable="false" />
            </div>
            <div>
                <img src={card.type} alt="" draggable="false" />
            </div>
        </div>  
    </div>
{/if}



<style>






    .card{
        /** none selectable text */
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        color:red;
        position: absolute;
        top: 0;
        left: 0;
        background-color: white;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        padding: 5px;
        box-sizing: border-box;
        border: black 1px solid;
        cursor: pointer;
    }
    
    .flipped {
        border-radius: 10px;
        background-color: #eb5757ff;
        width: 100%;
        height: 100%;

    }
    .card_front{
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
    .card_front > :first-child{
        padding-right: 2px;
        padding-left: 2px;
        height: 33%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .card_front > :first-child > :first-child {
        font-size: 38px;
        font-weight: 700;
        color: black;
    }
    .card_front > :first-child > :nth-child(2) {
        height: 90%;
    }
    .card_front > :nth-child(2){
        height: 67%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .card_front > :nth-child(2) > :first-child{
        height: 100%;
    }







</style>