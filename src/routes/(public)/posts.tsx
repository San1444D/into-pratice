import { createFileRoute } from '@tanstack/react-router'
import { PostList } from '../../features/posts/components/post-list';


export const Route = createFileRoute('/(public)/posts')({
  component: RouteComponent,
  loader: async () => {
    const postsData=[
      {id:1, title:"First Post"},
      {id:2, title:"Second Post"},
      {id:3, title:"Third Post"},
    ];
    return {postsData}; // Return any data if needed (empty object here for simulation)
  },
})

function RouteComponent() {
  const { postsData } = Route.useLoaderData();
  return <PostList postsData={postsData} />;
}
