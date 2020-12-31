import React, { useState } from "react";
import styles from "./SearchBar.module.css"
import SearchIcon from '@material-ui/icons/Search';
import RoomIcon from '@material-ui/icons/Room';
import { Room } from "@material-ui/icons";
import skills from "./skills.json"
import location from "./location.json"
import { Redirect, useHistory } from "react-router-dom";

const people = [...skills];
const places = [...location]


export function SearchBar() {
    const [searchText, setSearchText] = useState("")
    const [searchLoc, setSearchLoc] = useState("")
    const [open,setOpen] = useState(true)
    const [loc,setLoc] = useState(true)
    const history = useHistory()

    const handleSearch = () => {
        if(searchText!==""||searchLoc!==""){
           history.push("/search") 
        }
        
    } 
    const Skills = !searchText
    ? people
    : people.filter(person =>
        person.toLowerCase().includes(searchText.toLocaleLowerCase())
      );
    const Locations = !searchLoc
    ? places
    : places.filter(item=>
        item.toLowerCase().includes(searchLoc.toLocaleLowerCase())
        )

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
                            onChange = {(e) => {setSearchText(e.target.value)}}
                            />
                            <div>
                                
                            </div>
                        </div>
                        <div className = {styles.location}>
                            <div className = {styles.location_left}>
                                <Room/>
                            </div>
                        <input className = {styles.input2}
                        placeholder = "Enter locations..."
                        value = {searchLoc}
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
        <div>
            <div>    
                { searchText === "" ? null : open && (searchText.length >1 &&Skills.map(item => (
                <div onClick = {()=>{setSearchText(item)
                setOpen(false)}
                }>{item}</div>
                )))
                }
            </div>
            <div>
            { searchLoc === "" ? null : loc && (searchLoc.length > 1 &&Locations.map(item => (
                <div onClick = {()=>{setSearchLoc(item)
                setLoc(false)}
                }>
                    {item}
                </div>
                )))
                }
            </div>
        </div>
      
        </div>
    )
}