import React from 'react';
import Home from './pages/Home';
import Product from './pages/Product';
import Navbar from './components/Navbar';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Footer from './sections/Footer';


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
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
