import React from 'react';
import Home from './pages/Home';
import Product from './pages/Product';
import Navbar from './components/Navbar';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Footer from './sections/Footer';
import AboutPage from './pages/AboutPage';


const Layout = () => {
  return(
    <main className="flex flex-col">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </main>
  )
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/products',
        element: <Product/>
      },
      {
        path: '/about',
        element: <AboutPage/>
      },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
