import React from "react"
import {Link} from "react-router-dom"

const SinglePost = ({posts, match, edit, deleteTodo}) => {

    // grab the id from params
    const id = parseInt(match.params.id)
    // find the single post from the posts array
    const post = posts.find((post) => post.id === id )



    return <div>
        <h1>{post?.question}</h1>
        <h2>{post?.answer}</h2>
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={(event) => edit(post)}>Edit</button>
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={(event) => deleteTodo(post)}>Delete</button>
        <Link to="/"><button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" >Go back</button></Link>
    </div>
}

export default SinglePost

