import React from 'react'
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './Login';
import Browser from './Browser';

const Body = () => {

    const netflixGPTRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browser",
            element:<Browser/>
        }
    ]);

  return (
    <div>
        <RouterProvider router={netflixGPTRouter} />
    </div>
  )
}

export default Body;