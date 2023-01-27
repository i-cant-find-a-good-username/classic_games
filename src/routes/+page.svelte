<script>

    import mine_sweeper from '$lib/images/mine_sweeper_icon.svg';
    import doubles from '$lib/images/doubles_icon.svg';
    import solitaire from '$lib/images/solitaire.svg';
    let games = [
        {name: '2048',icon: doubles},
        {name: 'mine sweeper',icon: mine_sweeper},
        {name: 'solitaire',icon: solitaire},
        {name: '2048',icon: doubles},
    ]

</script>


<div>
    <div id='title_texts'>
        <h1>Play Games</h1>
        <p>enjoy</p>
    </div>

    <div id='grid_container'>
        <div id='grid'>
			{#each games as game}
                <div class='games_boxes'>
                    <div>
                        <img src={game.icon} alt="Welcome" />
                    </div>
                    <div>{game.name}</div>
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
    .games_boxes{
        aspect-ratio: 1/1;
        max-width: 300px;
        min-width: 100px;
        background-color: #1f242d;
        border-radius: 20px;
        cursor: pointer;
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
        transform: rotateX(100deg);
        transform: rotateZ(100deg);
        transform: rotateY(100deg);
    }
</style>