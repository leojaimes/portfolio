import React from "react";
 import Profile from "./Profile/Profile";
//import Footer from "./Footer/Footer";
/*import Header from "./Header/Header";*/

import "./Home.css";
import Header from "./Header/Header";
import AboutMe from "./MainContainer/AboutMe/AboutMe";
import { GET_SCREEN_INDEX } from "utilities/commonUtil";

export default function Home(props) {
 console.log(GET_SCREEN_INDEX("Home"))
  return (
    <>
      <Profile />
       
    </>
  );
}
