import React from "react"
import { Link } from "react-router-dom"

const Post = ({ post }) => {

    return (
        <div class="m-5">

            <Link to={`/post/${post.id}`}>
                <h1 class="divide-y divide-slate-200 ... text-center">{post.question}</h1>
            </Link>
            <h2 class="divide-y divide-slate-200 ... text-center" >{post.answer}</h2>

        </div>)
}

export default Post