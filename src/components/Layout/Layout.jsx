import {Outlet} from "react-router-dom"
import * as L from "./styes";
import Navbar from "../Navbar/index";

const Layout=()=>{
    return(
        <L.LayoutContainer>
            <Navbar/>
            <L.BodyContainer>
                <Outlet/>
            </L.BodyContainer>
        </L.LayoutContainer>
    )
}

export default Layout;