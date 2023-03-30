import Link from "next/link";
import { Comment } from "../../interfaces/posts.interfaces";
import Image from "next/image";

interface ParamsProps{
    id: string
}

const fetchSinglePost = async (id: string) => {
    
    await new Promise(resolve => setTimeout(resolve, 5000))
   // throw new Error('Error al cargar los comentarios')
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        }
    }).then(response => response.json())

}

export default async function PostComponent({params}: {params: ParamsProps}): Promise<JSX.Element>
{

    const comments: Comment[]  = await fetchSinglePost(params.id)

    return(
         <ul>
            {comments.map(comment => {
                return(
                    <li key={comment.id}>
                        <Image width={50} height={50} alt={comment.email} src={`https://api.dicebear.com/6.x/pixel-art/svg?seed=${comment.email}.svg`}></Image>
                        <h2>{comment.name}</h2>
                        <p>{comment.body}</p>
                    </li>
                )
            })}
         </ul>
    )
}
