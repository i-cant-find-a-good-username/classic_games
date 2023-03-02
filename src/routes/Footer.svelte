<script lang='ts'>
    import { show_footer } from './store';
	let show_foot: Boolean;

	show_footer.subscribe(value => {
		show_foot = value;
	});
</script>


<div id='footer'  >

    <div>
        <div>About us</div>
        <div>Terms of use</div>
        <div>Privacy policy</div>
        <div>Disclaimer</div>
        <div>Contact</div>
    </div>
    <div>Copyright © 2022-present - All rights reserved</div>

</div>

<style>
    #footer{
        box-sizing: border-box;
        width: 100%;
        background-color: #1f242d;
        color: #a6adbaff;
        padding: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 18px;
    }
    #footer > :first-child{
        display: flex;
        flex-direction: row;
    }
    #footer > :first-child > *{
        padding: 20px;
    }

</style>