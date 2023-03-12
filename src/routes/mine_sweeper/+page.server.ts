import type { Actions, PageServerLoad } from "./$types";
import { error, fail } from "@sveltejs/kit";








export const load: PageServerLoad = async ({ params }) => {
    console.log('started')

    const easy = Array.from({length: 10}, () => Math.floor(Math.random() * 64));
    const medium = Array.from({length: 40}, () => Math.floor(Math.random() * 256));
    const hard = Array.from({length: 100}, () => Math.floor(Math.random() * 512));
    
    let chosen_diff = easy


}



export const actions: Actions = {
	diffculty_change: async ({ request, cookies }) => {
		console.log('i8888888888888888888888888888888888888888888888888888')
		var ll = await request.formData()
		console.log(ll)
        return {
            some_darta: 'hello there'
        }
	},


	pressed_cell: async ({ request, cookies }) => {
		console.log('i8888888888888888888888888888888888888888888888888888')
		var ll = await request.formData()
		console.log(ll)
        return {
            some_darta: 'hello there'
        }
	},

};