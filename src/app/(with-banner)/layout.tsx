import { ReactNode } from "react";
import Count from "./posts/Count";


export default function PostsLayout({ children }: {children: ReactNode}) {

    return (
        <>
            <small>Home &bull; Posts</small>
            <marquee>Brian Perez Lopez</marquee>
            <Count></Count>
            {children}
        </>
    )
}