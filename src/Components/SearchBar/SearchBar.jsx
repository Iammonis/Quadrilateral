import React, { useState } from "react";
import styles from "./SearchBar.module.css"
import SearchIcon from '@material-ui/icons/Search';
import RoomIcon from '@material-ui/icons/Room';
import { Room } from "@material-ui/icons";

export function SearchBar() {
    const [searchText, setSearchText] = useState("")
    const [searchLoc, setSearchLoc] = useState("")


    const handleSearch = () => {

    } 

    return(
        <div className = {styles.bigbox}>
            <div className = {styles.box}>
                <div className = {styles.left}>
                    <div className = {styles.left_top}> Find a job at India's No. 1 Job Site</div>
                    <div className = {styles.left_bottom}>
                        <div className = {styles.searchbar}>
                            <div className = {styles.searchbar_left}><SearchIcon/></div>
                            <input className = {styles.input1}
                            placeholder = "Skills, Designations, Companies"
                            value = {searchText}
                            onChange = {(e) => setSearchText(e.target.value)}
                            />
                        </div>
                        <div className = {styles.location}>
                            <div className = {styles.location_left}>
                                <Room/>
                            </div>
                        <input className = {styles.input2}
                        placeholder = "Enter locations..."
                        value = {setSearchLoc}
                        onChange = {(e) => setSearchLoc(e.target.value)}
                        />
                        </div>
                        <button className = {styles.search}
                        onClick = {handleSearch}
                        >Search</button>
                    </div>
                </div>
                <div className = {styles.mid}></div>
                <div className = {styles.right}>
                    <div className = {styles.right_top}>
                        <div> Get Personalised Jobs !! </div>
                        <div className = {styles.right_bottom_div}> Tell us what kind of a job you are looking out for and stay updated with latest opportunities. </div>
                    </div>
                    <div className = {styles.right_bottom}>
                        <div className = {styles.right_bottom_register}>
                        <button className = {styles.right_bottom_register_btn}>Register for free</button>
                        </div>
                        <div className = {styles.right_bottom_upload}>
                        <button className = {styles.right_bottom_upload_btn} > Upload CV</button>
                        <div className = {styles.extra}>Max 2MB, doc, docx, rtf, pdf</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}