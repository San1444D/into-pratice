import { createFileRoute } from '@tanstack/react-router'
import { Home } from '../../features/home/components/home';

export const Route = createFileRoute('/(public)/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Home />;
}
