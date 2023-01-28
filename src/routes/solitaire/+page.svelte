<script>

    import settings from '$lib/images/settings.svg';
    import arrow_right from '$lib/images/arrow_right.svg';
    import arrow_left from '$lib/images/arrow_left.svg';
    import spade from '$lib/images/spade.svg';
    import club from '$lib/images/club.svg';
    import heart from '$lib/images/heart.svg';
    import diamond from '$lib/images/diamond.svg';

    const cards = [
        {name: 'a', type: 'spade'},
        {name: '2', type: 'spade'},
        {name: '3', type: 'spade'},
        {name: '4', type: 'spade'},
        {name: '5', type: 'spade'},
        {name: '6', type: 'spade'},
        {name: '7', type: 'spade'},
        {name: '8', type: 'spade'},
        {name: '9', type: 'spade'},
        {name: '10', type: 'spade'},
        {name: 'j', type: 'spade'},
        {name: 'q', type: 'spade'},
        {name: 'k', type: 'club'},
        {name: 'a', type: 'club'},
        {name: '2', type: 'club'},
        {name: '3', type: 'club'},
        {name: '4', type: 'club'},
        {name: '5', type: 'club'},
        {name: '6', type: 'club'},
        {name: '7', type: 'club'},
        {name: '8', type: 'club'},
        {name: '9', type: 'club'},
        {name: '10', type: 'club'},
        {name: 'j', type: 'club'},
        {name: 'q', type: 'club'},
        {name: 'k', type: 'club'},
        {name: 'a', type: 'heart'},
        {name: '2', type: 'heart'},
        {name: '3', type: 'heart'},
        {name: '4', type: 'heart'},
        {name: '5', type: 'heart'},
        {name: '6', type: 'heart'},
        {name: '7', type: 'heart'},
        {name: '8', type: 'heart'},
        {name: '9', type: 'heart'},
        {name: '10', type: 'heart'},
        {name: 'j', type: 'heart'},
        {name: 'q', type: 'heart'},
        {name: 'k', type: 'heart'},
        {name: 'a', type: 'diamond'},
        {name: '2', type: 'diamond'},
        {name: '3', type: 'diamond'},
        {name: '4', type: 'diamond'},
        {name: '5', type: 'diamond'},
        {name: '6', type: 'diamond'},
        {name: '7', type: 'diamond'},
        {name: '8', type: 'diamond'},
        {name: '9', type: 'diamond'},
        {name: '10', type: 'diamond'},
        {name: 'j', type: 'diamond'},
        {name: 'q', type: 'diamond'},
        {name: 'k', type: 'diamond'},
    ]


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
                <div>
                    <div class='card'>
                        <div class='card_front'>
                            <div>
                                <div>A</div>
                                <img src={club} alt="Welcome" />
                            </div>
                            <div>
                                <img src={club} alt="Welcome" />
                            </div>
                        </div>  
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
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
        background-color: white;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        padding: 5px;
        box-sizing: border-box;
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
        padding-right: 5px;
        padding-left: 5px;
        background-color: red;
        height: 33%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .card_front > :first-child > :first-child {
        font-size: 25px;
        font-weight: 700;
        color: black;
    }
    .card_front > :nth-child(2){
        background-color: green;
        height: 67%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>