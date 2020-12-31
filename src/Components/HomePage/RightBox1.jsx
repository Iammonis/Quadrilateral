import React from "react";
import styles from "./RightBox1.module.css"

export const RightBox1 = () => {
    return (
        <div className = {styles.box}>
            <div className = {styles.top}>
                <div className = {styles.text}>
                    <div className = {styles.heading}>Search Jobs on the Go !!</div>
                    <div className = {styles.words}>Download the Naukri app for free and browse browse from a variety of jobs based on your preferences</div>
                </div>
                <div className = {styles.img}>
                    <img src = "https://static.naukimg.com/s/7/0/assets/images/src/widgets/download-app-link-wdgt/v1/assets/appInstallImg.9d15407f.png"/>
                </div>
            </div>
            <div className = {styles.inputbox}>
                <div>+91</div>
                <input/>
            </div>
            <div className = {styles.buttonbox}>
                <button className = {styles.button}>Send me download link</button>
            </div>
            <div className = {styles.bottom1}>
            </div>
            <div className = {styles.logos}>
                <img/>
                <img/>
            </div>
        </div>
    )
}