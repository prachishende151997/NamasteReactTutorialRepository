import React ,{lazy,Suspense, useEffect, useState} from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider , Outlet} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
//import Grocery from './components/Grocery';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';




const Grocery = lazy(()=>import("./components/Grocery"));



const AppLayout=() => {

//authentication
const[userName ,setUserName]=useState();

useEffect(()=>{
//Make an API Call and send username and password
const data = {
    name:"Prachi Shende"
}
setUserName(data.name);
},[])

return(

    <Provider store={appStore}>
{/* //we r wrapping whole app inside usercontext provider */}
    <UserContext.Provider value={{loggedInUser :userName,setUserName
    }}>
    <div className='app'>
        <Header/>
        <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
);
}

const appRouter= createBrowserRouter([
    {
    path:'/',
    element:<AppLayout/>,
    children:[
           {
            path:'/',
            element:<Body/>,
           },
           {
            path:'/about',
            element:<About/>,
           },
           {
            path:'/contact',
            element:<Contact/>
           },
           {
            path:'/grocery',
            element:<Suspense fallback={<h1>Loading.......</h1>}><Grocery/></Suspense>
           },
           
           {
            path:'/restaurants/:resId',
            element:<RestaurantMenu/>
           },
           {
            path:'/cart',
            element:<Cart/>
           }
           
    ],
    errorElement: <Error/>
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout/>);

root.render(<RouterProvider router={appRouter}/>);

