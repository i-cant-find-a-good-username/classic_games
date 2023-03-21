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
        {name: 'solitaire',icon: solitaire, url: "solitaire"},
        {name: '2048',icon: doubles, url: "2048"},
        {name: 'mine sweeper',icon: mine_sweeper, url: "mine_sweeper"},
        {name: 'breakout',icon: breakout, url: "breakout"},
        {name: 'tic tac toe',icon: tic_tac_toe, url: "tic_tac_toe"},
        {name: 'snake',icon: snake, url: "snake"},
        {name: 'sudoko',icon: sudoko, url: "sudoko"},
        {name: 'tile slide',icon: tile_slide, url: "tile_slide"},
        {name: 'tetris',icon: tetris, url: "tetris"},
        {name: 'chess',icon: chess, url: "chess"},
    ]

    
    function set_styles(e){
        e.target.style.backgroundColor = 'res'
    }
    function reset_styles(e){
        e.target.style.backgroundColor = ''
    }




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
                    <div class='game_box_parent' on:mousemove={set_styles} on:mouseleave={reset_styles}>
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
        position: relative;
        transition: transform 0.1s ease;
        transform-style: preserve-3d;
        will-change: transform;
    }
    /* 
    .game_box_parent::before {
        content: "";
        background: rgba(0, 0, 0, 0.4);
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 100;
    }
    */
    .game_box_parent:hover .games_boxes {
        transform: translateZ(12px);
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