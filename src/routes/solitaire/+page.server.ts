import type { Actions, PageServerLoad } from "./$types";
import { error, fail } from "@sveltejs/kit";

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
  
  console.log(uuidv4());


const cards = [
    {name: 'A', type: 'spade', color: '#333333'},
    {name: '2', type: 'spade', color: '#333333'},
    {name: '3', type: 'spade', color: '#333333'},
    {name: '4', type: 'spade', color: '#333333'},
    {name: '5', type: 'spade', color: '#333333'},
    {name: '6', type: 'spade', color: '#333333'},
    {name: '7', type: 'spade', color: '#333333'},
    {name: '8', type: 'spade', color: '#333333'},
    {name: '9', type: 'spade', color: '#333333'},
    {name: '10', type: 'spade', color: '#333333'},
    {name: 'J', type: 'spade', color: '#333333'},
    {name: 'Q', type: 'spade', color: '#333333'},
    {name: 'K', type: 'club', color: '#333333'},
    {name: 'A', type: 'club', color: '#333333'},
    {name: '2', type: 'club', color: '#333333'},
    {name: '3', type: 'club', color: '#333333'},
    {name: '4', type: 'club', color: '#333333'},
    {name: '5', type: 'club', color: '#333333'},
    {name: '6', type: 'club', color: '#333333'},
    {name: '7', type: 'club', color: '#333333'},
    {name: '8', type: 'club', color: '#333333'},
    {name: '9', type: 'club', color: '#333333'},
    {name: '10', type: 'club', color: '#333333'},
    {name: 'J', type: 'club', color: '#333333'},
    {name: 'Q', type: 'club', color: '#333333'},
    {name: 'K', type: 'club', color: '#333333'},
    {name: 'A', type: 'heart', color:'#eb5757ff'},
    {name: '2', type: 'heart', color:'#eb5757ff'},
    {name: '3', type: 'heart', color:'#eb5757ff'},
    {name: '4', type: 'heart', color:'#eb5757ff'},
    {name: '5', type: 'heart', color:'#eb5757ff'},
    {name: '6', type: 'heart', color:'#eb5757ff'},
    {name: '7', type: 'heart', color:'#eb5757ff'},
    {name: '8', type: 'heart', color:'#eb5757ff'},
    {name: '9', type: 'heart', color:'#eb5757ff'},
    {name: '10', type: 'heart', color:'#eb5757ff'},
    {name: 'J', type: 'heart', color:'#eb5757ff'},
    {name: 'Q', type: 'heart', color:'#eb5757ff'},
    {name: 'K', type: 'heart', color:'#eb5757ff'},
    {name: 'A', type: 'diamond', color: '#eb5757ff'},
    {name: '2', type: 'diamond', color: '#eb5757ff'},
    {name: '3', type: 'diamond', color: '#eb5757ff'},
    {name: '4', type: 'diamond', color: '#eb5757ff'},
    {name: '5', type: 'diamond', color: '#eb5757ff'},
    {name: '6', type: 'diamond', color: '#eb5757ff'},
    {name: '7', type: 'diamond', color: '#eb5757ff'},
    {name: '8', type: 'diamond', color: '#eb5757ff'},
    {name: '9', type: 'diamond', color: '#eb5757ff'},
    {name: '10', type: 'diamond', color: '#eb5757ff'},
    {name: 'J', type: 'diamond', color: '#eb5757ff'},
    {name: 'Q', type: 'diamond', color: '#eb5757ff'},
    {name: 'K', type: 'diamond', color: '#eb5757ff'},
]



type type = 'spade' | 'club' | 'heart' | 'diamond'
type num = 'a' |  '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'j' | 'q' | 'k'
type card = `${type}_${num}`
const maagic : card = ''spade'_2'


export const load: PageServerLoad = async ({ params }) => {
    console.log('started')


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