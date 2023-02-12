import type { Actions, PageServerLoad } from "./$types";
import { error, fail } from "@sveltejs/kit";








export const load: PageServerLoad = async ({ params }) => {
    const easy = Array.from({length: 10}, () => Math.floor(Math.random() * 64));
    const medium = Array.from({length: 40}, () => Math.floor(Math.random() * 256));
    const hard = Array.from({length: 100}, () => Math.floor(Math.random() * 512));
    return {
        "easy" : easy,
        "medium" : medium,
        "hard" : hard,
    }
}



export const actions: Actions = {

    func2: async ({ request, params }) => {
        console.log('gg')

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