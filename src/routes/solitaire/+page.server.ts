import type { Actions, PageServerLoad } from "./$types";
import { error, fail } from "@sveltejs/kit";
import { isModuleNamespaceObject } from "util/types";

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
}
  


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

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


type type = 'spade' | 'club' | 'heart' | 'diamond'
type num = 'a' |  '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'j' | 'q' | 'k'
type card = `${type}_${num}`
const maagic : card = 'spade_2'


function get_cards(n, m){
    sent_cards_array = []
    for (let i = n; i < m-1; i++) {
        sent_cards_array.push({id: cards[i].id, mode: 'flipped' })
    }
    sent_cards_array.push(cards[m])
    return sent_cards_array
}


export const load: PageServerLoad = async ({ params }) => {
    
    shuffle(cards)
    return {
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


}



export const actions: Actions = {

    changed_diff: async ({ request, params }) => {
        console.log('gg')
        return('fuck you')
    },


    clicked_box: async ({ request, params }) => {
        const form_data = await request.formData()

    } 

};