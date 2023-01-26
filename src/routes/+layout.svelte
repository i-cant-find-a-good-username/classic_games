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

	<Footer />
</div>

<style>
    .app{
        
    }


</style>
