import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/(public)/post/$postId')({
  loader: async ({params}) => {
    return {postId: params.postId }; // Return any data if needed (empty object here for simulation)
  },
  component: RouteComponent,
})


function RouteComponent() {
  const { postId } = Route.useLoaderData();
  return <div>Hello, {postId}</div>
}
