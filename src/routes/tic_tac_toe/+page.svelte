<script>
    import circle from '$lib/images/circle.svg';
    import x from '$lib/images/x.svg';



    let cell_1 = false
    let cell_2 = false
    let cell_3 = false
    let cell_4 = false
    let cell_5 = false
    let cell_6 = false
    let cell_7 = false
    let cell_8 = false
    let cell_9 = false

</script>

<div id='main_parent'>
    <div id='main'>
        <div class="cell">
            <svg version="1.1" id="circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 100 100" xml:space="preserve">
              <circle fill="none" stroke="#70d6ff" stroke-width="10" cx="50" cy="50" r="48" stroke-dasharray="360" stroke-linecap="round" transform="rotate(-90 ) translate(-100 0)" >
                  <animate attributeName="stroke-dashoffset" values="360;0" dur="2s" repeatCount="nonet"></animate>
              </circle>
          </svg>
            
            
        </div>
        <div class="cell" on:click={() => {cell_1 = true }} >
            {#if cell_1}
                <img class='player_move' src={circle} />
            {/if}
        </div>
        <div class="cell" on:click={() => {cell_2 = true }} >
            {#if cell_2}
                <img class='player_move' src={x} />
            {/if}
        </div>
        <div class="cell" on:click={() => {cell_3 = true }} >
            {#if cell_3}
                hello
            {/if}
        </div>
        <div class="cell" on:click={() => {cell_4 = true }} >
            {#if cell_4}
                hello
            {/if}
        </div>
        <div class="cell" on:click={() => {cell_5 = true }} >
            {#if cell_5}
                hello
            {/if}
        </div>
        <div class="cell" on:click={() => {cell_6 = true }} >
            {#if cell_6}
                hello
            {/if}
        </div>
        <div class="cell" on:click={() => {cell_7 = true }} >
            {#if cell_7}
                hello
            {/if}
        </div>
        <div class="cell" on:click={() => {cell_8 = true }} >
            {#if cell_8}
                hello
            {/if}
        </div>
    </div>
    
</div>

<style>
    #main_parent{
        padding: 50px;
    }
    #main{
        box-sizing: border-box;
        width: 450px;
        aspect-ratio: 1/1;
        margin: auto;
        border-radius: 10px;
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

   .cell{
        padding: 25px;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        aspect-ratio: 1/1;
        border: 2px solid #a6adbaff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    
    }



    #main > :first-child,
    #main > :nth-child(2),
    #main > :nth-child(3){
        border-top: 2px solid transparent;
    }

    
    #main > :first-child,
    #main > :nth-child(2),
    #main > :nth-child(3){
        border-top: 2px solid transparent;
    }
    #main > :first-child,
    #main > :nth-child(4),
    #main > :nth-child(7){
        border-left: 2px solid transparent;
    }
    #main > :nth-child(7),
    #main > :nth-child(8),
    #main > :nth-child(9){
        border-bottom: 2px solid transparent;
    }
    #main > :nth-child(3),
    #main > :nth-child(6),
    #main > :nth-child(9){
        border-right: 2px solid transparent;
    }




    .player_move{
        width: 100%;
        height: 100%;
    }
</style>