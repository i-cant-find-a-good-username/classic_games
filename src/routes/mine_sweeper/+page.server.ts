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

    changed_diff: async ({ request, params }) => {
        console.log('gg')
        console.log('gg')
        console.log('gg')
        console.log('gg')
        console.log('gg')
        console.log('gg')
        console.log('gg')
        console.log('gg')
        console.log('gg')
        console.log('gg')
        console.log('gg')
        console.log('gg')
        console.log('gg')
        return('fuck you')
    },


    clicked_box: async ({ request, params }) => {
        const form_data = await request.formData()

    } 


    //updateArticle: async ({ request, params }) => {
    //    const { title, content } = Object.fromEntries(await request.formData()) as { title: string, content: string}
    //    try{
    //        await prisma.article.update({
    //            where: {
    //                id: Number(params.articleId)
    //            },
    //            data: {
    //                title, content
    //            }
    //        })
    //    }catch(err){
    //        console.log(err)
    //        return fail(500, {message: 'couldnt update'})
    //    }
    //    return{
    //        status: 200
    //    }
    //}
};