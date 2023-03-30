import Link from "next/link";
import { Post } from "../interfaces/posts.interfaces";
import { ReactNode } from 'react';

interface ParamsProps{
    id: string
}

const fetchSinglePost = (id: string) => {

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    }).then(response => response.json())

}

export default async function PostComponent({children, params}: {params: ParamsProps, children: ReactNode}): Promise<JSX.Element>
{

    const post: Post = await fetchSinglePost(params.id)

    return(
         <article>
            <h1 style={{ color: '#09f' }}>{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/posts/${params.id}/comments`}>Ver comentarios</Link>
            {children}
         </article>
    )
}

//Si se va a poner otra ruta anidada se pone una carpeta dentro de [Id]