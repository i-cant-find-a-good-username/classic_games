<script lang='ts'>
// @ts-nocheck

    var random1, random2
    var block1 ,block2 ,block3 ,block4 ,block5 ,block6 ,block7 ,block8 ,block9 ,block10 ,block11 ,block12 ,block13 ,block14 ,block15 ,block16

    
    function go_side(e){
        if(e.keyCode === 37){
            //left
        }else if(e.keyCode === 38){
            //top
        }else if(e.keyCode === 39){
            //right
        }else if(e.keyCode === 40){
            //bottom
        }
    }


    random1 = Math.floor(Math.random() * 17)
    random2 = Math.floor(Math.random() * 17)



    import { createEventDispatcher } from "svelte"
	import { onMount } from 'svelte';
    onMount(async () => {
        block1.classList.add('added')
	});

</script>

<svelte:window on:keydown={go_side}/>
<div id='dd'>

    <div id='main'>
        <div class='blocks block_2' bind:this={block1} id='block_1' >2</div>
        <div class='blocks block_4' bind:this={block2} id='block_2' >4</div>
        <div class='blocks block_8' bind:this={block3} id='block_3' >8</div>
        <div class='blocks block_16' bind:this={block4} id='block_4' >16</div>
        <div class='blocks block_32' bind:this={block5} id='block_5' >32</div>
        <div class='blocks block_64' bind:this={block6} id='block_6' >64</div>
        <div class='blocks block_128' bind:this={block7} id='block_7' >128</div>
        <div class='blocks block_256' bind:this={block8} id='block_8' >256</div>
        <div class='blocks block_512' bind:this={block9} id='block_9' >512</div>
        <div class='blocks block_1024' bind:this={block10} id='block_10' >1024</div>
        <div class='blocks block_2048' bind:this={block11} id='block_11' >2048</div>
        <div class='blocks ' bind:this={block12} id='block_12' ></div>
        <div class='blocks ' bind:this={block13} id='block_13' ></div>
        <div class='blocks ' bind:this={block14} id='block_14' ></div>
        <div class='blocks ' bind:this={block15} id='block_15' ></div>
        <div class='blocks ' bind:this={block16} id='block_16' ></div>
    </div>

</div>


<style>

/*

2
4
8
16
32
64
128
256
1024
2048

*/
    #main{
        width: 400px;
        height: 400px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 2px;
        padding: 100px;
    }
    #main > *{
        background-color: #1f242dff;
        height: 95px;
        width: 95px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
    }
    
.block_2{
    background-color: white !important;
    color: black;

}    
.block_4{
    background-color: #fed7aaff !important;
    color: black;

}
.block_8{
    background-color: #fdba74ff !important;
}
.block_16{
    background-color: #fb923cff !important;
}
.block_32{
    background-color: #f87171ff !important;
}
.block_64{
    background-color: #ef4444ff !important;
}
.block_128{
    background-color: #fde047ff !important;
}
.block_256{
    background-color: #fde047ff !important;
}
.block_512{
    background-color: #facc15ff !important;
}
.block_1024{
    background-color: #facc15ff !important;
}
.block_2048{
    background-color: #facc15ff !important;
}





</style>