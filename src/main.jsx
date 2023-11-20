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
import UpdateFood from './components/AddFood/UpdateFood.jsx';
import AllFoodPage from './components/AllFood/AllFoodPage.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import MyAddedFoodItems from './components/MyProfile/MyAddedFoodItems.jsx';
import MyAdd_A_FoodItem from './components/MyProfile/MyAdd_A_FoodItem.jsx';
import MyOrderPage from './components/MyProfile/MyOrderPage.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import UpdateMyAddedFood from './components/MyProfile/UpdateMyAddedFood.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home title="Phero|Home"></Home>
      },
      {
        path:"/about",
        element:<AboutUs></AboutUs>
      },
      {
        path:"/allfood",
        element:<AllFoodPage></AllFoodPage>,
        loader:()=>fetch('https://restaurant-management-server-two.vercel.app/foodcount')
      },
     
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/addFood",
        element:<AddFood></AddFood>,
        loader:()=>fetch('https://restaurant-management-server-two.vercel.app/food')
      },
      {
        path:"/updateFood/:id",
        element:<UpdateFood></UpdateFood>,
        loader:({params})=>fetch(`https://restaurant-management-server-two.vercel.app/food/${params.id}`)
      },
      {
        path:"/updateMyFood/:id",
        element:<PrivateRoute><UpdateMyAddedFood></UpdateMyAddedFood></PrivateRoute>,
        loader:({params})=>fetch(`https://restaurant-management-server-two.vercel.app/food/${params.id}`)
      },
      {
        path:"/foodDetails/:id",
        element:<PrivateRoute><FoodDetailsPage></FoodDetailsPage></PrivateRoute>,
        loader:({params})=>fetch(`https://restaurant-management-server-two.vercel.app/food/${params.id}`)
       
      },
      {
        path:"/myAddedFood",
        element:<PrivateRoute><MyAddedFoodItems></MyAddedFoodItems></PrivateRoute>
      },
      {
        path:"/myAddAfoodItem",
        element:<PrivateRoute><MyAdd_A_FoodItem></MyAdd_A_FoodItem></PrivateRoute>
      },
      {
        path:"/myOrderPage",
        element:<PrivateRoute><MyOrderPage></MyOrderPage></PrivateRoute>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      {
        path:"/login",
        element:<Login></Login>
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
