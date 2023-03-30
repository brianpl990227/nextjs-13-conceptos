import Link from "next/link";
import LikeButton from "./LikeButton";
import { Post } from "./interfaces/posts.interfaces";

function fetchData(): Promise<Post[]> {

    //GetStaticProps
    // return fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())

    //GetServerSideProps
    // return fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'})
    // .then(response => response.json())
    

    //IncrementalStaticRegeneration
    //Eso del no-store es para decir que no guarde en el fichero estatico que genera el npm run build
    //los posts que se traen de una api
    // return fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'}).then(response => response.json())

    return fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    }).then(response => response.json())

}

export async function ListOfPosts(): Promise<JSX.Element> {
    const posts = await fetchData();

    return (
        <>
            <h1>Aqui mostramos los posts</h1>
            {
                posts.slice(0, 5).map(item => (
                    <article key={item.id}>
                        <Link href='/posts/[id]' as={`/posts/${item.id}`}>
                            <h3 style={{ color: '#09f' }}>{item.title}</h3>
                        </Link>
                        <p>{item.body}</p>
                        <LikeButton></LikeButton>
                    </article>
                ))
            }

        </>

    )

}