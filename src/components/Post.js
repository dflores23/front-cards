import React from "react"
import { Link } from "react-router-dom"

const Post = ({post}) => {

    return <div>
        <Link to={`/post/${post.id}`}>
            <h1 class="text-center">{post.question}</h1>
        </Link>
        <h2 class="text-center" >{post.answer}</h2>
    </div>
}

export default Post