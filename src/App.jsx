import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/dev',
    element: <p>dev</p>
  },
  {
    path: '/crafts',
    element: <p>crafts</p>
  },
  {
    path: '/pizza',
    element: <p>pizza</p>
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
