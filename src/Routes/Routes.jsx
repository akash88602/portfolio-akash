import { createBrowserRouter } from "react-router";
import Root from "../Coomponents/Root/Root";
import Home from "../Coomponents/Home/Home";
import AboutPages from "../pages/AboutPages/AboutPages";
import SkillsPages from "../pages/SkillsPages/SkillsPages";
import ProjcetPages from "../pages/ProjcetPages/ProjcetPages";
import ExperiencePages from "../pages/ExperiencePages/ExperiencePages";
import ContactPage from "../pages/ContactPage/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component :Root,
    children : [
        {
            index:true,
            Component :Home,
        },
       {
        path:'/about',
        Component: AboutPages,
       },
       {
        path:'/skills',
        Component : SkillsPages,
       },
       {
        path:'/project',
        Component : ProjcetPages,
       },
       {
        path:'/experience',
        Component:ExperiencePages,
       },
       {
        path:'/contact',
        Component :ContactPage,
       }
    ]
  },
]);