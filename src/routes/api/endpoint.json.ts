import type { RequestHandler } from '@sveltejs/kit'
import { getMovies, getBlogPosts } from '$lib/utils'
import type { Movie, Blog } from '$lib//structure'

export const post: RequestHandler = async (request) => {
    const requstQuery = request.url.searchParams.get('query')

    let reponse: (Movie[] | Blog[] | undefined);

    switch (requstQuery) {
        case 'getBlogPosts':
            reponse = await getBlogPosts()
            break
        case 'getMovies':
            reponse = await getMovies()
            break
        default:
            console.log('no route')

    }
    if (reponse !== undefined) {
        return {
            status: 200,
            body: reponse
        }
    }
    else {
        return {
            status: 400
        }
    }

}