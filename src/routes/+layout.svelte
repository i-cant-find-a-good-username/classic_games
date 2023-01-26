<script>
	import Nav_bar from './Nav_bar.svelte';
	import Footer from './Footer.svelte';
	import './app.css';
</script>

<div class="app">
	<Nav_bar />

	<main>
		<slot />
	</main>
    <div id='back_img'>
         
    </div>

	<Footer />
</div>

<style>
    .app{
        background-color: transparent;
    }
    #back_img{
        z-index: -100;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
	    background-image: url('../lib/images/img.jpg');
	    background-color: #cccccc;
	    background-position: center;
	    background-repeat: no-repeat;
	    background-size: cover;
	    filter: blur(8px);
	    -webkit-filter: blur(8px);
	
    }


</style>
