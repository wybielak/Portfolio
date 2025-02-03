import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import PortfolioSection from "./components/PortfolioSection"
import ResponsiveMenu from "./components/ResponsiveMenu"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/dev',
    element: <PortfolioSection title="Dev" />
  },
  {
    path: '/workshop',
    element: <PortfolioSection title="Workshop" />
  },
  {
    path: '/pizza',
    element: <PortfolioSection title="Pizza" />
  },
  {
    path: '/menu',
    element: <ResponsiveMenu />
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
