import React from 'react';
import styled from 'styled-components';
import {Button,Typography } from '@material-ui/core';
import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab'


const Label = styled.div`
    width: 120px;
    text-align: right;
    height: 15px;
    padding-bottom: 5px;
`;
const EducatioDetail = ({detail, handleChange,classes,handleSubmit, setCourseType, course_type}) =>{
    
    const {course, specialization, university, passing,tags} = detail
   
    return(
        <>
            <div>
                <Label>Highest Qualification</Label>
                <select name="highest_qualifications" style={{width: "520px", height: "45px", padding: "5px 10px"}}>
                    <option value="Doctorate/PhD">Doctorate/PhD</option>
                    <option value="Masters/Post-Graduation">Masters/Post-Graduation</option>
                    <option value="Graduation/Diploma">Graduation/Diploma</option>
                    <option value="12th">12th</option>
                    <option value="10th">10th</option>
                    <option value="Below 10th">Below 10th</option>
                </select>
            </div>
            <div>
                <Label>Course</Label>
                <input type="text"
                   placeholder="Select your course"
                   value={course}
                   name="course"
                   onChange={handleChange}
                   required
               />
            </div>
            <div>
                <Label>Specialization</Label>
                <input type="text"
                    placeholder="Select specialization"
                    value={specialization}
                    name="specialization"
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <Label>University/College</Label>
                <input type="text"
                    placeholder="Institute Name"
                    value={university}
                    name="university"
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <Label>Course Type</Label>
                <div style={{display : "flex", margin: 0}}>
                    <button className={classes.courseTypeBtn} onClick={(e)=>setCourseType(e.target.innerHTML)}>Full Time</button>
                    <button className={classes.courseTypeBtn} onClick={(e)=>setCourseType(e.target.innerHTML)}>Part Time</button>
                    <button className={classes.courseTypeBtn} onClick={(e)=>setCourseType(e.target.innerHTML)}>correspondence</button>
                    {/* <div className={classes.toggleContainer}>
                        <ToggleButtonGroup
                          value={course_type}
                          exclusive
                          onChange={setCourseType}
                          aria-label="Job Types"
                        >
                          <ToggleButton value="Full Time" aria-label="full time">
                            <Typography>Full Time</Typography>
                          </ToggleButton>
                          <ToggleButton value="Part Time" aria-label="part time">
                            <Typography>Part Time</Typography>
                          </ToggleButton>
                          <ToggleButton value="correspondence" aria-label="correspondence">
                            <Typography>correspondence</Typography>
                          </ToggleButton>
                         
                        </ToggleButtonGroup>
                    </div> */}
                </div>
            </div>
            <div>
                <Label>Passing year</Label>
                <input type="number"
                    placeholder="Passing year"
                    value={passing}
                    name="passing"
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <Label>skills</Label>
                <input type="text"
                    placeholder=" Skills (add ',' between two skills)"
                    value={tags}
                    name="tags"
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <Button className={classes.button} onClick={handleSubmit}>
                    Continue
                </Button>
            </div>

        </>
    )
}
export {EducatioDetail}