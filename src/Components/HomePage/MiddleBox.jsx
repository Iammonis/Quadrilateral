import React, { useEffect, useState } from "react";
import names_jobs from "./names.json"
import styles from "./MiddleBox.module.css"
import { Category } from "./Category";


export function MiddleBox() {
    const [category, setCategory] = React.useState("")
    const [all, setAll] = useState(true)
    const [names, setNames] = useState([])
    console.log(names)

    useEffect(() => {
        setNames(names_jobs)
    }, [])


    const handleIT = () => {
        setNames(names_jobs)
        for(var i = 0; i < names_jobs.length; i++) {
            if(names_jobs[i].category === "Information Technology") {
                console.log(names[i])
                setNames([names_jobs[i]])
                break
            }
        }
    }

    const handleAnalytics = () => {
        console.log("btn")
        for(var j = 0; j < names_jobs.length; j++) {
            if(names_jobs[j].category === "Manufacturing") {
                setNames([names_jobs[j]])
                console.log(names[j])
                break
            }
        }
    }

    const handleService = () => {
        console.log("btn")
        for(var k = 0; k < names_jobs.length; k++) {
            if(names_jobs[k].category === "Services") {
                console.log(names[k])
                setNames([names_jobs[k]])
            }
        }
    }

    const handleAll = () => {
        setNames(names_jobs)
    }

    return (
        <div className = {styles.box} >
            <div className = {styles.top}>
                <div className = {styles.heading}>
                    Best Places to Work
                </div>
                <div className = {styles.bar}>
                    <div onClick = {handleAll} className = {styles.text}>All Sectors</div>
                    <div onClick = {handleIT} className = {styles.text}>Information Technology</div>
                    <div onClick = {handleAnalytics} className = {styles.text}>Manufacturing</div>
                    <div onClick = {handleService} className = {styles.text}>Services</div>
                </div>
            </div>
            <div className = {styles.bottom}>
                {
                    names.map((item) => (
                        <div>
                        <div className = {styles.category_name} > {item.category} </div>
                        <Category category = {item.sub_categories}/>
                        </div>
                ))
                }
            </div>
        </div>
    )
}