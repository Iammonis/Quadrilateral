import React, {useState} from "react";
import { Navbar } from "../Navbar";
import { SearchBar } from "../SearchBar/SearchBar";
import styles from "./Final.module.css"
import { HorizontalGif } from "./HorizontalGif";
import { MiddleBox } from "./MiddleBox";
import { RightBox1 } from "./RightBox1";
import { VerticalGif } from "./VerticalGif1";
import { VerticalGif2 } from "./VerticalGif2";
import {Footer} from "../Recruiter/Footer"
import RegisterDrawer from '../../Components/RegisterDrawer'
import { Login } from '../Login'

export function FinalHome() {
    const [open, setOpen] = useState(false);
    const [loginOpen,setLoginOpen]=useState(false)
    return (
        <div className = {styles.fullpage}>
            {/* <div className = {styles.nav}> */}
                <Navbar setLoginOpen={setLoginOpen} hide={true}/>
            {/* </div> */}
            <div className = {styles.search}>
                <SearchBar setOpenDrawer={setOpen} />
            </div>
            <div className = {styles.bottombox}>
                <div className = {styles.bottomleft}>
                    <HorizontalGif/>
                    <div className = {styles.bottomleft_down}>
                        <VerticalGif/>
                        <MiddleBox/>
                    </div>
                    <div style = {{paddingLeft: "20px", paddingTop: "20px"}}>
                        <VerticalGif2/>
                    </div>
                </div>
                <div className = {styles.bottomright}>
                    <RightBox1/>
                </div>
            </div>
            <Footer/>
            <RegisterDrawer open={open} setOpenDrawer={setOpen} />
            <Login open={loginOpen} setOpen={setLoginOpen} />
        </div>
    )
}