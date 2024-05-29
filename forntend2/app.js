import React from "react";
import ReactDOM from "react-dom/client";
import Header, {Tital } from "./src/component/Header.js";
import Body from "./src/component/Body.js";
import Footer from "./src/component/Footer.js";
// import About from "./src/component/About";
// import Error from "./src/component/Error";
// import Error1 from "./src/component/Error1.js";
// import Contact  from "./src/component/contact.js";
// import Cart from "./src/component/Cart.js";
import RestaurantMenu from "./src/component/RestaurantMenu.js";
import { createBrowserRouter ,RouterProvider ,Outlet} from "react-router-dom";
const AppContainer = () => {
  return (
    <div className="app">
      <Header/> 
      <Outlet/> 
      <Footer/>
    </div>
  );
};
const appRouter=createBrowserRouter([
  {
path:"/",
element:<AppContainer/>,
// errorElement:<Error/>,
children:[ 
{
    path:"/",
    element:<Body/>,
},
// {
//   path:"/about",
//   element:<About/>,
// },
// {
// path:"/contact",
// element:<Contact/>,
// },
// {
// path:"/cart",
// element:<Cart/>,
// },
{
path:"/restaurant/:resId",
element:<RestaurantMenu/>,
},
],
}, 
]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);