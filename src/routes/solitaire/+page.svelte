<script>

    import Card from './Card.svelte'
    import settings from '$lib/images/settings.svg';
    import arrow_right from '$lib/images/arrow_right.svg';
    import arrow_left from '$lib/images/arrow_left.svg';
    import spade from '$lib/images/spade.svg';
    import club from '$lib/images/club.svg';
    import heart from '$lib/images/heart.svg';
    import diamond from '$lib/images/diamond.svg';

    const cards = [
        {name: 'A', type: spade, color: '#333333'},
        {name: '2', type: spade, color: '#333333'},
        {name: '3', type: spade, color: '#333333'},
        {name: '4', type: spade, color: '#333333'},
        {name: '5', type: spade, color: '#333333'},
        {name: '6', type: spade, color: '#333333'},
        {name: '7', type: spade, color: '#333333'},
        {name: '8', type: spade, color: '#333333'},
        {name: '9', type: spade, color: '#333333'},
        {name: '10', type: spade, color: '#333333'},
        {name: 'J', type: spade, color: '#333333'},
        {name: 'Q', type: spade, color: '#333333'},
        {name: 'K', type: club, color: '#333333'},
        {name: 'A', type: club, color: '#333333'},
        {name: '2', type: club, color: '#333333'},
        {name: '3', type: club, color: '#333333'},
        {name: '4', type: club, color: '#333333'},
        {name: '5', type: club, color: '#333333'},
        {name: '6', type: club, color: '#333333'},
        {name: '7', type: club, color: '#333333'},
        {name: '8', type: club, color: '#333333'},
        {name: '9', type: club, color: '#333333'},
        {name: '10', type: club, color: '#333333'},
        {name: 'J', type: club, color: '#333333'},
        {name: 'Q', type: club, color: '#333333'},
        {name: 'K', type: club, color: '#333333'},
        {name: 'A', type: heart, color:'#eb5757ff'},
        {name: '2', type: heart, color:'#eb5757ff'},
        {name: '3', type: heart, color:'#eb5757ff'},
        {name: '4', type: heart, color:'#eb5757ff'},
        {name: '5', type: heart, color:'#eb5757ff'},
        {name: '6', type: heart, color:'#eb5757ff'},
        {name: '7', type: heart, color:'#eb5757ff'},
        {name: '8', type: heart, color:'#eb5757ff'},
        {name: '9', type: heart, color:'#eb5757ff'},
        {name: '10', type: heart, color:'#eb5757ff'},
        {name: 'J', type: heart, color:'#eb5757ff'},
        {name: 'Q', type: heart, color:'#eb5757ff'},
        {name: 'K', type: heart, color:'#eb5757ff'},
        {name: 'A', type: diamond, color: '#eb5757ff'},
        {name: '2', type: diamond, color: '#eb5757ff'},
        {name: '3', type: diamond, color: '#eb5757ff'},
        {name: '4', type: diamond, color: '#eb5757ff'},
        {name: '5', type: diamond, color: '#eb5757ff'},
        {name: '6', type: diamond, color: '#eb5757ff'},
        {name: '7', type: diamond, color: '#eb5757ff'},
        {name: '8', type: diamond, color: '#eb5757ff'},
        {name: '9', type: diamond, color: '#eb5757ff'},
        {name: '10', type: diamond, color: '#eb5757ff'},
        {name: 'J', type: diamond, color: '#eb5757ff'},
        {name: 'Q', type: diamond, color: '#eb5757ff'},
        {name: 'K', type: diamond, color: '#eb5757ff'},
    ]

    let lower_deck_cells = [[], [], cards, [], [], [], cards]


    import { createEventDispatcher } from "svelte"
	import { onMount } from 'svelte';
    onMount(async () => {
        const dispatch = createEventDispatcher()
    
        dispatch('started_game', {
            pressed: 'solitaire'
        })
	});

</script>


<div>
    <div id='game_bar'>

    </div>
    <div id='game_board'>
        <div>
            <div id='settings_bar'>
                <div>
                    <button class='options_buttons' ><img src={settings} alt="Welcome" /></button>
                    <button class='options_buttons' >new game</button>
                    <button class='options_buttons' >aa</button>
                </div>
                <div>
                    <button class='options_buttons' >hint</button>
                    <button class='options_buttons' ><img src={arrow_right} alt="Welcome" /></button>
                    <button class='options_buttons' ><img src={arrow_left} alt="Welcome" /></button>
                </div>
            </div>
            <div id='upper_deck' >
                <div>
                    <div class='card'>
                        <div class='flipped'></div>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div id='lower_deck' >

             
                {#each lower_deck_cells as deck, j }
                    <div id={'lower_deck_'+(j+1)}>
                        {#each deck as card, i }
                            <Card index={i} card={card} drag={deck.length === i+1 ? true : false} />
                        {/each}
                    </div>
                {/each}
                    
            </div>
        </div>
        
    </div>
</div>

<style>
    #game_bar{
        
    }
    #game_board{
        background-color: #219653ff;
        padding: 50px;
    }
    #game_board > :first-child{
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: fit-content;
    }
    #settings_bar{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    #settings_bar > *{
        padding: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    .options_buttons{
        background-color: #3d4451;
        border: none;
        color: white;
        padding: 10px;
        padding-top: 2px;
        padding-bottom: 2px;
        border-radius: 10px;
        font-size: 18px;
        
    }
    #upper_deck, #lower_deck{
        padding: 10px;
        display: flex;
        flex-direction: row;
        position: relative;
    }
    #upper_deck > *, #lower_deck > *{
        margin-right: 10px;
        margin-left: 10px;
        background-color: #276f46;
        aspect-ratio: 2/3;
        width: 100px;
        border-radius: 10px;
        position: relative;
    }
    #upper_deck > :nth-child(3){
        background-color: transparent;
    }

    .card{
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