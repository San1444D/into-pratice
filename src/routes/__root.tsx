import {
  Outlet,
  createRootRoute,
  Link,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

async function GlobalLoader() {
  const isLoading = useRouterState({
    select: (s) => s.status === "pending",
  });

  if (!isLoading) return null;
      await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    // <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    //   <div className="bg-white px-6 py-3 rounded shadow">
    //     Loading...
    //   </div>
    // </div>
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-white/40  z-50">
        <div className="loading ">Loading...</div>
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    </>
  );
}

function OfflineBanner() {
  if (navigator.onLine) return null;
  return (
    <div className="loading">
      You are offline. Please check your internet connection.
    </div>
  );
}

const RootLayout = () => {
  return (
    <>
      <OfflineBanner />
      <GlobalLoader />

      <div className="w-full p-4 flex gap-4 bg-gray-900 text-white font-semibold">
        <Link to="/">Home</Link>
        <Link to="/posts">Post</Link>
      </div>
      <Outlet />
      <TanStackDevtools
        config={{
          position: "bottom-right",
        }}
        plugins={[
          {
            name: "Tanstack Router",
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  );
};

export const Route = createRootRoute({
  component: RootLayout,
  loader: async () => {
    // Simulate a 2-second loading delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return {}; // Return any data if needed (empty object here for simulation)
  },
});
