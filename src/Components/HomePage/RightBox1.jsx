import React from "react";
import styles from "./RightBox1.module.css"

export const RightBox1 = () => {
    return (
        <>
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
            <div className = {styles.greytext}> Available on both iOS and Android devices </div>
            <div className = {styles.logos}>
                <img src = "data:image/png;base64,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"/>
                <div>Google Play </div>
                <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAoCAMAAACo9wirAAAAAXNSR0IArs4c6QAAARRQTFRFAAAAOTk5ExMTCAgIERER////GhoaBwcHAAAADQ0NDw8PAwMDEBAQGBgYAwMDHx8fVVVVCAgICAgIFxcXERERGhoaDQ0NBwcHGRkZGxsbDg4OFRUVQEBA////HBwcExMTDg4ODg4OFhYWKysrGBgYDAwMCwsLISEhgICAIiIiDQ0NBwcHDg4OHBwcJycnFhYWDw8PBwcHCAgIGhoaHR0dBwcHAwMDEhISAwMDJCQkSUlJBwcHDQ0NLi4uVVVVICAgEhISMzMzCAgIERERAAAAERERDw8PDQ0NFRUVFxcXCgoKS0tLKysrZmZmJCQkDQ0NMzMzFxcXFBQUHh4eGhoaBwcHDQ0NCQkJAwMDCQkJFBQUICAg8e6mCgAAAFx0Uk5TAAkoQTwBHUdPPSJPMBVOGQM/QhYuKDxIHy84JAgCEik3NSMMIEFDFwIPOUw2Gw0XMkk9FBpKTR1MFQdGOgsGGCsFPi0/LDM7JSE1ESQFBycKIiYRHk0mO0o8GQhBBtEWAAABZklEQVQ4jX2U2VbCQAyGUYwNRisoUsQKVFGRRUEFZSuIgqKC+/7+7+F0poBwGnI1zf+dJJNM6vN52Ny8fwG8BGWwqCEGeACWCBGX+QArutBpldWDIaHjWpAF1ml2AF/Y0TdmlBhBMqKeOoDjhs3YlinO21MMxBPJiLWzCw5npqy9/UD4ID3WDzNOaUjZXP7ouFCUH0gnp0P9rIRDI51GZyyfuze7QMao4ujVGqdjveEACeL0jOynrXF6zZQVNLkAFFUltrgA2qVqUYwDkqqZ0OaAK7dL1xzQcacQ4oCum+KGA/xqWFDgAD2uctxyAOZUjgrbaepJwDbYEOWUfGR3LIDUvRdEns0hiAcB9Pn3gMbAqeKRBzryIgP2RZSeVCuemSroxZ1XOuMNtEcr3PDsRfZ1vDlN3SNB7//qvb1Ln5HstCxNrdnHxHpC5fOrGOiZwgl2tK4Z3z/TKw6/1ZEL+vaMv9yk/QFOPC+2RTM6ZAAAAABJRU5ErkJggg=="/>
                <div>App Store</div>
            </div>
        </div>
        <div className = {styles.box} style = {{height: "200px"}}>
            <div className = {styles.top}>
                <div className = {styles.text}>
                    <div className = {styles.heading}>
                        Get best matched jobs directly in your mail.
                    </div>
                    <div className = {styles.words}>
                        Tell us what kind of a job you are looking out for and stay updated with latest oppotunities
                    </div>
                    <div className = {styles.greytext}>
                        No registration required!
                    </div>
                    <div className = {styles.buttonbox}>
                        <button className = {styles.button}>Create Job Alert</button>
                    </div>
                </div>
            </div>
        </div>
        <div className = {styles.box} style = {{height: "180px"}}>
            <div className = {styles.top}>
                <div className = {styles.text}>
                    <div className = {styles.heading}>
                        Naukri JobSpeak
                    </div>
                    <div className = {styles.words}>
                        A monthly Job Index that provides insight into hiring trends in your city, job function and industry.
                    </div>
                    <div className = {styles.bluetext}>
                        View the latest edition
                    </div>
                </div>
            </div>
        </div>
        <div className = {styles.box} style = {{height: "550px"}}>
            <div className = {styles.top}>
                <div className = {styles.text}>
                    <div className = {styles.heading} style = {{marginBottom: "40px"}}>
                        Premium Designations
                    </div>
                    <div className = {styles.bluetext1}>CEO Jobs</div>
                    <div className = {styles.bluetext1}>CFO Jobs</div>
                    <div className = {styles.bluetext1}>CMO Jobs</div>
                    <div className = {styles.bluetext1}>COO Jobs</div>
                    <div className = {styles.bluetext1}>CTO Jobs</div>
                    <div className = {styles.bluetext1}>Director Finance Jobs</div>
                    <div className = {styles.bluetext1}>VP HR Jobs</div>
                    <div className = {styles.bluetext1}>VP Engineering Jobs</div>
                    <div className = {styles.bluetext1}>VP Marketing Jobs</div>
                    <div className = {styles.bluetext1}>VP Sales Jobs</div>
                    <div className = {styles.bluetext1}>VP Business Development Jobs</div>
                    <div className = {styles.bluetext1}>VP Sales & Marketing Jobs</div>
                    <div className = {styles.bluetext1}>VP Finance Jobs</div>
                    <div className = {styles.bluetext1}>VP Operations Jobs</div>
                    <div className = {styles.bluetext1}>Marketing Head Jobs</div>
                    <div className = {styles.bluetext1}>Sales Head Jobs</div>
                    <div className = {styles.bluetext1}>IT Head Jobs</div>
                    <div className = {styles.bluetext1}>HR Head Jobs</div>
                    <div className = {styles.bluetext1}>Digital Marketing Head Jobs</div>
                    <div className = {styles.bluetext1}>Engineering Manager Jobs</div>
                    <div className = {styles.bluetext1}>Marketing Manager Jobs</div>
                    <div className = {styles.bluetext1}>Brand Manager Jobs</div>
                    <div className = {styles.bluetext1}>Product Manager Jobs</div>
                    <div className = {styles.bluetext1}>Data Scientist Jobs</div>
                    <div className = {styles.bluetext1}>Business Analyst Jobs</div>
                    <div className = {styles.bluetext}>View all Designations</div>
                </div>
            </div>
        </div>
        <div className = {styles.box} style = {{height: "480px"}}>
            <div className = {styles.top}>
                <div className = {styles.text}>
                    <div className = {styles.heading} style = {{marginBottom: "40px"}}>
                        Top Skill
                    </div>
                    <div className = {styles.bluetext1}>Mechanical Engineering Jobs</div>
                    <div className = {styles.bluetext1}>BPO Jobs</div>
                    <div className = {styles.bluetext1}>Networking Jobs</div>
                    <div className = {styles.bluetext1}>Java Jobs</div>
                    <div className = {styles.bluetext1}>Online Marketing Jobs</div>
                    <div className = {styles.bluetext1}>Animation Jobs</div>
                    <div className = {styles.bluetext1}>Design Engineer Jobs</div>
                    <div className = {styles.bluetext1}>Analytics Jobs</div>
                    <div className = {styles.bluetext1}>UI/UX Jobs</div>
                    <div className = {styles.bluetext1}>NLP Jobs</div>
                    <div className = {styles.bluetext1}>Banking Jobs</div>
                    <div className = {styles.bluetext1}>MBA Jobs</div>
                    <div className = {styles.bluetext1}>Teaching Jobs</div>
                    <div className = {styles.bluetext1}>MArketing Jobs</div>
                    <div className = {styles.bluetext1}>Accounting Jobs</div>
                    <div className = {styles.bluetext1}>Travel Jobs</div>
                    <div className = {styles.bluetext1}>Retail Jobs</div>
                    <div className = {styles.bluetext1}>Accounting Jobs</div>
                    <div className = {styles.bluetext1}>Merchandiser Jobs</div>
                    <div className = {styles.bluetext1}>Architecture Jobs</div>
                    <div className = {styles.bluetext}>View all Skills</div>
                    </div>
            </div>
        </div>
        <div className = {styles.box} style = {{height: "480px"}}>
            <div className = {styles.top}>
                <div className = {styles.text}>
                    <div className = {styles.heading} style = {{marginBottom: "40px"}}>
                        Jobs by Category
                    </div>
                    <div className = {styles.bluetext1}>Graphic Designer Jobs</div>
                    <div className = {styles.bluetext1}>Engineering Jobs</div>
                    <div className = {styles.bluetext1}>Mainframe Jobs</div>
                    <div className = {styles.bluetext1}>Legal Jobs</div>
                    <div className = {styles.bluetext1}>IT Jobs</div>
                    <div className = {styles.bluetext1}>R&D Jobs</div>
                    <div className = {styles.bluetext1}>Government Jobs</div>
                    <div className = {styles.bluetext1}>PSU Jobs</div>
                    <div className = {styles.bluetext1}>Oil & Gas Jobs</div>
                    <div className = {styles.bluetext1}>Pharma Jobs</div>
                    <div className = {styles.bluetext1}>Telecom Jobs</div>
                    <div className = {styles.bluetext1}>Media Jobs</div>
                    <div className = {styles.bluetext1}>Automobile Jobs</div>
                    <div className = {styles.bluetext1}>Insurance Jobs</div>
                    <div className = {styles.bluetext1}>Bank Jobs</div>
                    <div className = {styles.bluetext1}>Agriculture Jobs</div>
                    <div className = {styles.bluetext1}>Defense Jobs</div>
                    <div className = {styles.bluetext1}>NGO Jobs</div>
                    <div className = {styles.bluetext1}>Real Estate Jobs</div>
                    <div className = {styles.bluetext1}>Shipping Jobs</div>
                    <div className = {styles.bluetext}>View all Categories</div>
                    </div>
            </div>
        </div>
        <div className = {styles.box} style = {{height: "340px"}}>
            <div className = {styles.top}>
                <div className = {styles.text}>
                    <div className = {styles.heading} style = {{marginBottom: "40px"}}>
                        Jobs by Location
                    </div>
                    <div className = {styles.bluetext1}>Jobs in Delhi</div>
                    <div className = {styles.bluetext1}>Jobs in Mumabi</div>
                    <div className = {styles.bluetext1}>Jobs in Chennai</div>
                    <div className = {styles.bluetext1}>Jobs in Gurgaon</div>
                    <div className = {styles.bluetext1}>Jobs in Noida</div>
                    <div className = {styles.bluetext1}>Jobs in Kolkata</div>
                    <div className = {styles.bluetext1}>Jobs in Hyderabad</div>
                    <div className = {styles.bluetext1}>Jobs in Pune</div>
                    <div className = {styles.bluetext1}>Jobs in Bangalore</div>
                    <div className = {styles.bluetext1}>Jobs in Ahmedabad</div>
                    <div className = {styles.bluetext}>View all Locations</div>
                    </div>
            </div>
        </div>
        <div className = {styles.box} style = {{height: "370px"}}>
            <div className = {styles.top}>
                <div className = {styles.text}>
                    <div className = {styles.heading} style = {{marginBottom: "40px"}}>
                        Naukri Learning Courses
                    </div>
                    <div className = {styles.bluetext1}>Data Science Courses</div>
                    <div className = {styles.bluetext1}>Machine Learning Courses</div>
                    <div className = {styles.bluetext1}>Big Data Courses</div>
                    <div className = {styles.bluetext1}>Programming Courses</div>
                    <div className = {styles.bluetext1}>Business Analytics Courses</div>
                    <div className = {styles.bluetext1}>Project Management Courses</div>
                    <div className = {styles.bluetext1}>Web Design Courses</div>
                    <div className = {styles.bluetext1}>DevOps and cloud computing Courses</div>
                    <div className = {styles.bluetext1}>Marketing Courses</div>
                    <div className = {styles.bluetext1}>Accounting and Finance Courses</div>
                    <div className = {styles.bluetext1}>Banking Courses</div>
                    <div className = {styles.bluetext1}>Logistics and supply chain Courses</div>
                    <div className = {styles.bluetext1}>Strategy and Leadership Courses</div>
                    <div className = {styles.bluetext}>View all</div>
                    </div>
            </div>
        </div>

        </>
    )
}