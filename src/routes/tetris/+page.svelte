<script lang="ts">
    import { onMount } from 'svelte';


	//import type { PageData } from './$types'

	//export let data: PageData

	//console.log(data)

    //setInterval(() => {
    //    console.log('fff')
    //}, 1000)

    const pieces = [ 'right_leg', 'left_leg', 'square', 'triangle', 'right_z', 'left_z', 'tall' ]
    /**
     * right_leg 
     * lleft_leg
     * square
     * fork
     * right_z
     * left_z
     * tall
     */

     const spawn = () => {
        //pieces[Math.floor(Math.random()*pieces.length)]
        switch ('right_leg') {
            case 'right_leg':
                document.getElementById('box_14').style.backgroundColor = 'red'
                document.getElementById('box_15').style.backgroundColor = 'red'
                document.getElementById('box_16').style.backgroundColor = 'red'
                document.getElementById('box_5').style.backgroundColor = 'red'
                break;
            case 'lleft_leg':
                
                break;
            case 'square':
                
                break;
            case 'fork':
                
                break;
            case 'right_z':
                
                break;
            case 'left_z':
                
                break;
            case 'tall':
                
                break;
        
            default:
                break;
        }

   
        
        /**
         * get randm piece
         * spawn piece
         * set interval to move piece
         * on piece stop calculate if lose or if break a line
         * on piece stop redo
        */
    }
    onMount(async () => {

            spawn()
    	});

</script>

<div id='center'>
    
	<div id='game_container'>
        {#each Array(180) as _, i}
            <div id={'box_'+(i+1)}></div>
        {/each}
    </div>

	<div id='score_container'>
        <div id='next_block'>
            d
        </div>
        <div id='scores'>
            <h1>Level</h1>
            <h1>Score</h1>
            <h1>Lines</h1>
        </div>
    </div>

</div>

<style>
    #center{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        /*background-color: grey;*/
        height: 72vh;
        padding: 100px;
    }

    #center > * {
        height: 100%;
    }
    #center > :first-child{
        border: 4px solid #a6adbaff;
        height: 100%;
        aspect-ratio: 10/18;
    }

    #center > :nth-child(2){
        aspect-ratio: 10/18;
        height: 100%;
    }


    #game_container{
        display: grid;
        gap: 1px;
        grid-template-columns: repeat(10, minmax(0, 1fr));
        width: fit-content;
    }

    #game_container > * {
        width: 100%;
        aspect-ratio: 1/1;
        background-color: yellow;

    }






    #next_block{
        display: flex;
        align-items: center;
        justify-content: center;
        border: 4px solid #a6adbaff;
        aspect-ratio: 3/2;
    }

    #scores{

    }

</style>
