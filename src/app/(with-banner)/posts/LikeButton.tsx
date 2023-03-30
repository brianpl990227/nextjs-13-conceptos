'use client'
import { useState } from "react";

export default function LikeButton() {

    const [like, setLike] = useState(false)

    const handleClick = () => {
        setLike(!like)
    }

    return (
        <button onClick={event => handleClick()}>
            {like ? '💖' : '🤍' }
        </button>
    )
}