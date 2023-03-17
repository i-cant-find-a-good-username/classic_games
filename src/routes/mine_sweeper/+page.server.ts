import type { Actions, PageServerLoad } from "./$types";
import { error, fail } from "@sveltejs/kit";




const easy = Array.from({length: 10}, () => Math.floor(Math.random() * 64));
const normal = Array.from({length: 40}, () => Math.floor(Math.random() * 256));
const hard = Array.from({length: 100}, () => Math.floor(Math.random() * 512));

console.log(easy)
console.log(normal)
console.log(hard)

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
            chosen_diff: diff
        } 
        
	},


	pressed_cell: async ({ request, cookies }) => {
		const ll = await request.formData()
		const cell = ll.get('cell')

        console.log(cell)
        console.log(parseInt(cell))

        return {
            some_data: 'hello there'
        }
	},

};