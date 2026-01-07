import { Link } from '@tanstack/react-router';
import type { Post } from '../types/post-types';

export const PostList = ({postsData}: {postsData: Post[]}) => {
    return (<>
  <div className="">
    <h1 className="text-2xl font-bold mb-4">Posts List</h1>
    <ul>
      {postsData.map((post) => (
        <li key={post.id} className="mb-2">
          <Link to="/post/$postId" params={{ postId: post.id.toString() }} className="text-blue-500 hover:underline">
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
  </>)
}