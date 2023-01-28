<script>
	import Nav_bar from './Nav_bar.svelte';
	import Footer from './Footer.svelte';
	import './app.css';




	
	const change_back = (e) => {
		alert( e.detail.pressed )
		if(e.detail.pressed === 'play'){

		}else if(e.detail.pressed === 'chill'){
			
		}
	}
</script>

<div class="app">
	<Nav_bar on:button_changed={change_back}  />

	<main>
		<slot />
	</main>
    <div id='back_img'></div>

	<Footer />
</div>

<style>
    .app{
        background-color: rgba(31, 36, 45,0.8);
		height: 100vh;
		overflow-y: scroll;
    }
    #back_img{
		/*transform: rotate(10deg);
		scale: 1.25;*/
		transition: all 800ms cubic-bezier(.05,.43,.25,.95);
		z-index: -100;
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
	    background-image: url('../lib/images/img.jpg');
	    background-color: #cccccc;
	    background-position: center;
	    background-repeat: no-repeat;
	    background-size: cover;
	    filter: blur(8px);
	    -webkit-filter: blur(8px);
	
    }


</style>
