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
    let games = [
        {name: '2048',icon: doubles},
        {name: 'mine sweeper',icon: mine_sweeper},
        {name: 'solitaire',icon: solitaire},
        {name: 'breakout',icon: breakout},
        {name: 'tic tac toe',icon: tic_tac_toe},
        {name: 'snake',icon: snake},
        {name: 'sudoko',icon: sudoko},
        {name: 'tile slide',icon: tile_slide},
        {name: 'tetris',icon: tetris},
    ]

    function set_styles(e){
        const { clientX, clientY, currentTarget } = e;
        const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
        const horizontal = (clientX - offsetLeft) / clientWidth;
        const vertical = (clientY - offsetTop) / clientHeight;
        const rotateX = (15 / 2 - horizontal * 15).toFixed(2);
        const rotateY = (vertical * 15 - 15 / 2).toFixed(2);
        e.target.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
    }
    function reset_styles(e){
        e.taget.style.transform = `perspective(${e.target.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    }

</script>


<div>
    <div id='title_texts'>
        <h1>Play Games</h1>
        <p>enjoy</p>
    </div>

    <div id='grid_container'>
        <div id='grid'>
			{#each games as game}
                <div class='game_box_parent' on:mousemove={set_styles} on:mouseleave={reset_styles}>
                    <div class='games_boxes'>
                        <div>
                            <img src={game.icon} alt="Welcome" />
                        </div>
                        <div>{game.name}</div>
                    </div>
                </div>
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
        column-gap: 50px;       
        row-gap: 50px;
    }
    .game_box_parent{
        position: relative;
        transition: transform 0.1s ease;
        transform-style: preserve-3d;
        will-change: transform;
        position: relative;
        background-color: red;
    }
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
        padding-bottom: 0px;
    }
    .games_boxes > :nth-child(2){
        text-align: center;
        padding: 20px;
        font-size: 18px;
        font-weight: 600;
    }
    .games_boxes:hover{
        
    }
</style>