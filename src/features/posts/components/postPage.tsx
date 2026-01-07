import type { Post } from "../types/post-types"

export const PostPage = ({post}:{post:Post})=>{

    return (<>
        <div className="text-2xl">{post.title}</div>
    </>)
}