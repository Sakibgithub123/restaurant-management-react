import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import SignUp from './components/Authentication/SignUp/SignUp.jsx';
import Login from './components/Authentication/Login/Login.jsx';
import FoodDetailsPage from './components/FoodDetailsPage/FoodDetailsPage.jsx';
import AddFood from './components/AddFood/AddFood.jsx';
import Blog from './components/Blog/Blog.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/addFood",
        element:<AddFood></AddFood>,
      },
      {
        path:"/foodDetails/:id",
        element:<FoodDetailsPage></FoodDetailsPage>,
        loader:({params})=>fetch(`bloodDonation.json/${params.id}`)
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
