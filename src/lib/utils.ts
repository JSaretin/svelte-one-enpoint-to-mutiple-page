import type { Movie, Blog } from './structure'


export const getBlogPosts = async () => {
    const blogs: Blog[] = [
        {
            id: 1,
            title: 'Blog 1'
            , content: 'this is the first blog content'
        },
        {
            id: 2,
            title: 'Blog 2'
            , content: 'this is the second blog content'
        }
    ]
    return blogs
}


export const getMovies = async () => {
    const movies: Movie[] = [
        {
            id: 1,
            title: 'Movie 1',
            description: 'this is the first movie description',
            preview: 'movie1-preview.png',
        },
        {
            id: 2,
            title: 'Movie 2',
            description: 'this is the second movie description',
            preview: 'movie2-preview.png',
        }
    ]
    return movies
}