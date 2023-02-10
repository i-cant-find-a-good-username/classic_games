import type { Actions, PageServerLoad } from "./$types";
import { error, fail } from "@sveltejs/kit";








export const load: PageServerLoad = async ({ params }) => {
    return {bruh: 'ok ok'}
}



export const actions: Actions = {

    func2: async ({ request, params }) => {

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