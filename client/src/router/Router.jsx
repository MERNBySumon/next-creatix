// import { createBrowserRouter } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../page/Home";
import ErrorPage from "../page/ErrorPage";
import Maine from "../Layout/Maine";
import AboutUs from "../page/AboutUs";
import Services from "../page/Services";
import Portfolio from "../page/Portfolio";
import Price from "../page/Price";
import Testimonials from "../page/Testimonials";
import Bloge from "../page/Bloge";
import { ContactUs } from "../page/ContactUs";

export let router = createBrowserRouter([
  {
    path: "/",
    element: <Maine></Maine>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/price",
        element: <Price></Price>,
      },
      {
        path: "/tastimonials",
        element: <Testimonials></Testimonials>,
      },
      {
        path: "/Bloge",
        element: <Bloge></Bloge>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);
