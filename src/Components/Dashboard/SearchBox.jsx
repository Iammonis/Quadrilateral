import React, { useState } from "react";
import styles from "./SearchBox.module.css"
import SearchIcon from '@material-ui/icons/Search';
import RoomIcon from '@material-ui/icons/Room';
import { Room } from "@material-ui/icons";
import skills from "../SearchBar/skills.json"
import location from "../SearchBar/location.json"
import { Redirect, useHistory } from "react-router-dom";

const people = [...skills];
const places = [...location]


export function SearchBox() {
    const [searchText, setSearchText] = useState("")
    const [searchLoc, setSearchLoc] = useState("")
    const [open,setOpen] = useState(true)
    const [loc,setLoc] = useState(true)
    const history = useHistory()

    const handleSearch = () => {

        if( searchText !== "" && searchLoc === "" ){
            let url = `?title_like=${searchText}`
            history.push(`/search${url}`) 
        }
        else if( searchText === "" && searchLoc !== "" ){
            let url = `?location.${searchLoc}=true`
            history.push(`/search${url}`)
        }
        else if( searchText !== "" && searchLoc !== "" ){
            let url = `?title_like=${searchText}&location.${searchLoc}=true`
            history.push(`/search${url}`)
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
               
            </div>
        <div>
            <div>    
                { searchText == "" ? null : open && (searchText.length >1 &&Skills.map(item => (
                <div onClick = {()=>{setSearchText(item)
                setOpen(false)}
                }>{item}</div>
                )))
                }
            </div>
            <div>
            { searchLoc == "" ? null : loc && (searchLoc.length >1 &&Locations.map(item => (
                <div onClick = {()=>{setSearchLoc(item)
                setLoc(false)}
                }>{item}</div>
                )))
                }
            </div>
        </div>
      
        </div>
    )
}