import type { Actions, PageServerLoad } from "./$types";
import { error, fail } from "@sveltejs/kit";




const easy = Array.from({length: 10}, () => Math.floor(Math.random() * 64));
const normal = Array.from({length: 40}, () => Math.floor(Math.random() * 256));
const hard = Array.from({length: 100}, () => Math.floor(Math.random() * 512));
let chosen_diff = "easy"




export const load: PageServerLoad = async ({ params }) => {
    return {
		chosen_diff: chosen_diff
	};
}



export const actions: Actions = {
	diffculty_change: async ({ request, cookies }) => {
		const data = await request.formData()
        const diff = data.get('diffculty');
        console.log(data)
        if (diff === "easy") {
            chosen_diff = "easy"
        } else if (diff === "normal") {
            chosen_diff = "normal"
        } else if (diff === "hard") {
            chosen_diff = "hard"
        }else{
            return fail(500, {message: 'select a valid difficulty'})
        }

        return{
            status: 201,
            message: 'changed',
            value: diff
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