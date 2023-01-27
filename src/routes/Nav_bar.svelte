<script>
    
    import volume from '$lib/images/volume.svg';
    import moon from '$lib/images/moon.svg';

    import { createEventDispatcher } from "svelte"
    const dispatch = createEventDispatcher()
    const test = (e) => {
        dispatch('button_changed', {
            pressed: e.target.innerText
        })
    }
</script>

<div class="navbar">
    <div>icon</div>
    <div>
        <button class='nav_buttons active_button' on:click={test} >play</button>
        <button class='nav_buttons' on:click={test} >chill</button>
    </div>
    <div id='right_icons'>
        <img src={volume} alt="Welcome" />
        <img src={moon} alt="Welcome" />
    </div>
</div>

<style>
    .navbar{
        padding: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .nav_buttons{
        padding-right: 15px;
        padding-left: 15px;
        padding-top: 5px;
        padding-bottom: 5px;
        border: 1px solid white;
        background-color: transparent;
        color: white;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
		transition: all 200ms cubic-bezier(.05,.43,.25,.95);
    }
    .nav_buttons:not(.active_button):hover{
        background-color: rgb(200, 200, 200);
        color: black;
    }
    .active_button:hover{
        background-color: aqua;
        color: rgb(200, 200, 200);
    }
    .active_button{
        color: aqua;
        border-color: aqua;
    }
    #right_icons{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #right_icons > *{
        padding: 10px;
        border-radius: 100%;
        cursor: pointer;
        border: 2px solid transparent;
		transition: all 200ms cubic-bezier(.05,.43,.25,.95);
    }
    #right_icons > *:hover{
        background-color: rgba(200,200,200,0.2);
        border-color: rgb(200, 200, 200);
    }

</style>
