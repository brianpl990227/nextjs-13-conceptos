import { Suspense } from 'react';
import { ListOfPosts } from './ListOfPosts';


export default async function PostsPage() {
    const list = await ListOfPosts();

    return (
        <section>
            {list}
        </section>
    )
}

