import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import PortfolioSection from "./components/PortfolioSection"
import ComingSoon from "./components/ComingSoom"
import LoadingScreen from "./components/LoadingScreen";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  // {
  //   path: '/dev',
  //   element: <PortfolioSection title="Dev" />
  // },
  // {
  //   path: '/workshop',
  //   element: <PortfolioSection title="Workshop" />
  // },
  // {
  //   path: '/pizza',
  //   element: <PortfolioSection title="Pizza" />
  // },
  // {
  //   path: '/menu',
  //   element: <ResponsiveMenu />
  // }
])

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    
    <>
    <LoadingScreen loading={loading} />

      {!loading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <RouterProvider router={router} />
        </motion.main>
      )}
      
    </>
  )
}

export default App
