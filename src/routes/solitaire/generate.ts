import { error, fail } from "@sveltejs/kit";
import { isModuleNamespaceObject } from "util/types";
import type { Card } from '../../types'


const uuidv4 = () => {
	let
		d = new Date().getTime(),
		d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
		let r = Math.random() * 16;
		if (d > 0) {
			r = (d + r) % 16 | 0;
			d = Math.floor(d / 16);
		} else {
			r = (d2 + r) % 16 | 0;
			d2 = Math.floor(d2 / 16);
		}
		return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
	});
};

let sent_cards_array

import spade from '$lib/images/spade.svg';
import club from '$lib/images/club.svg';
import heart from '$lib/images/heart.svg';
import diamond from '$lib/images/diamond.svg';

let cards = [
	{id: uuidv4(), type: spade, name: 'A', color: '#333333'},
	{id: uuidv4(), type: spade, name: '2', color: '#333333'},
	{id: uuidv4(), type: spade, name: '3', color: '#333333'},
	{id: uuidv4(), type: spade, name: '4', color: '#333333'},
	{id: uuidv4(), type: spade, name: '5', color: '#333333'},
	{id: uuidv4(), type: spade, name: '6', color: '#333333'},
	{id: uuidv4(), type: spade, name: '7', color: '#333333'},
	{id: uuidv4(), type: spade, name: '8', color: '#333333'},
	{id: uuidv4(), type: spade, name: '9', color: '#333333'},
	{id: uuidv4(), type: spade, name: '10', color: '#333333'},
	{id: uuidv4(), type: spade, name: 'J', color: '#333333'},
	{id: uuidv4(), type: spade, name: 'Q', color: '#333333'},
	{id: uuidv4(), type: spade, name: 'K', color: '#333333'},
	{id: uuidv4(), type: club, name: 'K', color: '#333333'},
	{id: uuidv4(), type: club, name: 'A', color: '#333333'},
	{id: uuidv4(), type: club, name: '2', color: '#333333'},
	{id: uuidv4(), type: club, name: '3', color: '#333333'},
	{id: uuidv4(), type: club, name: '4', color: '#333333'},
	{id: uuidv4(), type: club, name: '5', color: '#333333'},
	{id: uuidv4(), type: club, name: '6', color: '#333333'},
	{id: uuidv4(), type: club, name: '7', color: '#333333'},
	{id: uuidv4(), type: club, name: '8', color: '#333333'},
	{id: uuidv4(), type: club, name: '9', color: '#333333'},
	{id: uuidv4(), type: club, name: '10', color: '#333333'},
	{id: uuidv4(), type: club, name: 'J', color: '#333333'},
	{id: uuidv4(), type: club, name: 'Q', color: '#333333'},
	{id: uuidv4(), type: club, name: 'K', color: '#333333'},
	{id: uuidv4(), type: heart, name: 'A', color:'#eb5757ff'},
	{id: uuidv4(), type: heart, name: '2', color:'#eb5757ff'},
	{id: uuidv4(), type: heart, name: '3', color:'#eb5757ff'},
	{id: uuidv4(), type: heart, name: '4', color:'#eb5757ff'},
	{id: uuidv4(), type: heart, name: '5', color:'#eb5757ff'},
	{id: uuidv4(), type: heart, name: '6', color:'#eb5757ff'},
	{id: uuidv4(), type: heart, name: '7', color:'#eb5757ff'},
	{id: uuidv4(), type: heart, name: '8', color:'#eb5757ff'},
	{id: uuidv4(), type: heart, name: '9', color:'#eb5757ff'},
	{id: uuidv4(), type: heart, name: '10', color:'#eb5757ff'},
	{id: uuidv4(), type: heart, name: 'J', color:'#eb5757ff'},
	{id: uuidv4(), type: heart, name: 'Q', color:'#eb5757ff'},
	{id: uuidv4(), type: heart, name: 'K', color:'#eb5757ff'},
	{id: uuidv4(), type: diamond, name: 'A', color: '#eb5757ff'},
	{id: uuidv4(), type: diamond, name: '2', color: '#eb5757ff'},
	{id: uuidv4(), type: diamond, name: '3', color: '#eb5757ff'},
	{id: uuidv4(), type: diamond, name: '4', color: '#eb5757ff'},
	{id: uuidv4(), type: diamond, name: '5', color: '#eb5757ff'},
	{id: uuidv4(), type: diamond, name: '6', color: '#eb5757ff'},
	{id: uuidv4(), type: diamond, name: '7', color: '#eb5757ff'},
	{id: uuidv4(), type: diamond, name: '8', color: '#eb5757ff'},
	{id: uuidv4(), type: diamond, name: '9', color: '#eb5757ff'},
	{id: uuidv4(), type: diamond, name: '10', color: '#eb5757ff'},
	{id: uuidv4(), type: diamond, name: 'J', color: '#eb5757ff'},
	{id: uuidv4(), type: diamond, name: 'Q', color: '#eb5757ff'},
	{id: uuidv4(), type: diamond, name: 'K', color: '#eb5757ff'},
]
let ids = []

function shuffle(a: Card[]) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}





function get_cards(n: number, m: number){
	console.log(uuidv4())
	sent_cards_array = []
	for (let i = n; i < m-1; i++) {
		sent_cards_array.push({id: cards[i].id, mode: 'flipped' })
	}
	sent_cards_array.push(cards[m])
	return sent_cards_array
}







shuffle(cards)

export default {
	cards: cards.length,
	deck1: get_cards(0, 1),
	deck2: get_cards(1, 3),
	deck3: get_cards(3, 6),
	deck4: get_cards(6, 10),
	deck5: get_cards(10, 15),
	deck6: get_cards(15, 21),
	deck7: get_cards(21, 28),
	draw_pile: cards.slice(29, cards.length), 
}