// import { createBrowserRouter } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../page/Home";
import ErrorPage from "../page/ErrorPage";
import Maine from "../Layout/Maine";
import AboutUs from "../page/AboutUs";
import Services from "../page/Services";
import Portfolio from "../page/Portfolio";
import Testimonials from "../page/Testimonials";
import Bloge from "../page/Bloge";
import { ContactUs } from "../page/ContactUs";
import { BlogeDetails } from "../component/BlogeDetails";
import { ServicesDetails } from "../component/ServicesDetails";
import { ReadMor } from "../component/ReadMor";

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
        path: "/services/:id",
        element: <ServicesDetails></ServicesDetails>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/tastimonials",
        element: <Testimonials></Testimonials>,
      },
      {
        path: "/bloge",
        element: <Bloge></Bloge>,
      },
      {
        path: "/bloge/:id",
        element: <BlogeDetails></BlogeDetails>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/readmor",
        element: <ReadMor></ReadMor>,
      },
    ],
  },
]);
