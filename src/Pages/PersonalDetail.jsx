import React from 'react';
import styled from 'styled-components';
import {Button } from '@material-ui/core';


const Label = styled.div`
    width: 120px;
    text-align: left;
    height: 15px;
    padding-bottom: 5px;
`;
const PersonalDetail = ({handleChange, detail, classes, handleShowtextAria, handleEducationForm,openTextAria }) =>{
    const {name, email, password, mobile_no, city,resume, course, specialization, university, passing_year, skils} = detail

    return(
         <>
            <div>
                <Label>Name</Label>
                <input type="text"
                        placeholder="Enter your full name"
                        value={name}
                        name="name"
                        onChange={handleChange}
                        required
                />
            </div>
            <div>
                <Label>Email ID</Label>
                <input type="email"
                        placeholder="Enter your active email id to receive relevant jobs"
                        value={email}
                        name="email"
                        onChange={handleChange}
                        required
                />
            </div>
            <div>
                <Label>Create Password</Label>
                <input type="password"
                        placeholder="Minimum 6 characters"
                        value={password}
                        name="password"
                        onChange={handleChange}
                        required
                />
            </div>
            <div>
                <Label>Mobile number</Label>
                <input type="number"
                        placeholder="Where recuiter can contact you"
                        value={mobile_no}
                        name="mobile_no"
                        onChange={handleChange}
                        required
                />
            </div>
            <div>
                <Label>Current City</Label>
                <input type="text"
                        placeholder="Tell us about current city"
                        value={city}
                        name="city"
                        onChange={handleChange}
                        required
                />
            </div>
            <div>
                <Label>Upload Resume</Label>
                <input type="file"
                        placeholder="Upload Resume"
                        style={{width: "180px", paddingTop:"10px"}}
                />
                <div className={classes}>
                    -or-
                </div>
                <div style={{color:"#4a90e2"}} onClick={handleShowtextAria}>
                    copy-paste your resume here
                </div>

            </div>
            <div>
            doc, docx, rtf, pdf - 2MB max
            Naukri preferred CV format - docx file
            </div>
            {
                openTextAria &&
                <div>
                    <input type="textaria"
                            placeholder="Paste your resume here"
                            value={resume}
                            name="resume"
                            onChange={handleChange}
                            style={{width: "500px", height:"80px"}}
                    />
                </div>
            }
            <div>
                <input type="checkbox" style={{width:20, marginRight:10}}/>
                <p>I agreed to the <span style={{color:"#4a90e2"}}>Terms and Conditions</span> and <span style={{color:"#4a90e2"}}>Privacy Policy</span> governing the use of Naukri.com.</p>
        
            </div>
            <div>
                <Button className={classes.button} onClick={handleEducationForm}>
                    Register Now
                </Button>
            </div>
        </>
    )
}
export {PersonalDetail}