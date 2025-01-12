import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    element: <p>Home</p>
  },
  {
    path: '/dev',
    element: <p>dev</p>
  },{
    path: '/craft',
    element: <p>craft</p>
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
