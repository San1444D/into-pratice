import { createFileRoute } from '@tanstack/react-router'
import logo from './../../logo.svg'


export const Route = createFileRoute('/(public)/')({
  component: App,
  
})

function App() {
  return (<>
    <div className="text-center bg-gray-800 min-h-screen text-white">
      <h1>Home Page</h1>
      <div className="flex flex-col items-center justify-center">

        </div>
    </div>  
    </>
  )
}
