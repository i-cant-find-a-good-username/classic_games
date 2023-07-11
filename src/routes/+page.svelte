<script>
    import mine_sweeper from '$lib/images/mine_sweeper_icon.svg';
    import doubles from '$lib/images/doubles_icon.svg';
    import solitaire from '$lib/images/solitaire.svg';
    import breakout from '$lib/images/breakout.svg';
    import tic_tac_toe from '$lib/images/tic_tac_toe.svg';
    import snake from '$lib/images/snake.svg';
    import sudoko from '$lib/images/sudoko.svg';
    import tile_slide from '$lib/images/tile_slide.svg';
    import tetris from '$lib/images/tetris.svg';
    import chess from '$lib/images/chess.svg';
    let games = [
        {name: 'solitaire (incomplete)',icon: solitaire, url: "solitaire"},
        {name: '2048',icon: doubles, url: "2048"},
        {name: 'mine sweeper (incomplete)',icon: mine_sweeper, url: "mine_sweeper"},
        {name: 'breakout (incomplete)',icon: breakout, url: "breakout"},
        {name: 'tic tac toe (incomplete)',icon: tic_tac_toe, url: "tic_tac_toe"},
        {name: 'snake',icon: snake, url: "snake"},
        {name: 'sudoko (incomplete)',icon: sudoko, url: "sudoko"},
        {name: 'tile slide (incomplete)',icon: tile_slide, url: "tile_slide"},
        {name: 'tetris (incomplete)',icon: tetris, url: "tetris"},
        {name: 'chess (incomplete)',icon: chess, url: "chess"},
    ]




</script>


<div id=''>
    <div id='title_texts'>
        <h1>Play Games</h1>
        <p>enjoy</p>
    </div>
    
    <div id='grid_container'>
        <div id='grid'>
			{#each games as game}
                <a class='' href={"/"+game.url}>
                    <div class='game_box_parent' >
                        <div class='games_boxes'>
                            <div>
                                <img src={game.icon} alt="Welcome" />
                            </div>
                            <div class='game_name'>{game.name}</div>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</div>


<style>
    img{
        width: 100%;
    }
    #title_texts{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #grid_container{
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #grid{
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        column-gap: 20px;       
        row-gap: 20px;
    }
    @media screen and (max-width: 1200px) {
        #grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
    }
    @media screen and (max-width: 1000px) {
        #grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }
    @media screen and (max-width: 800px) {
        #grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }
    @media screen and (max-width: 600px) {
        #grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    .game_box_parent{
        transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 300ms;
    }
    


    .game_box_parent:hover .games_boxes {
        translate: 0px -10px;
        background-color: #333a46;
    }


    .games_boxes{
        position: relative;
        z-index: 1;
        transition: transform 0.3s ease;
        aspect-ratio: 1/1;
        max-width: 300px;
        min-width: 100px;
        background-color: #1f242d;
        border-radius: 20px;
        cursor: pointer;
		transition: all 800ms cubic-bezier(.05,.43,.25,.95);
    }
    .games_boxes > :first-child{
        padding: 20px;
    }
    #grid > :first-child > :first-child > :first-child > :first-child{
        padding: 0px;
    }
    .games_boxes > :nth-child(2){
        text-align: center;
        padding: 20px;
        font-size: 18px;
        font-weight: 600;
    }
    a{

        text-decoration: none;
    }
    .game_name{
        color: #a6adbaff;
    }
</style>