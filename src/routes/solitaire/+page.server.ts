import type { Actions, PageServerLoad } from "./$types";
import { error, fail } from "@sveltejs/kit";



type type = 'spade' | 'club' | 'heart' | 'diamond'
type num = 'a' |  '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'j' | 'q' | 'k'
type card = `${type}_${num}`
const maagic : card = 'spade_2'


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