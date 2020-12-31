import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Slider} from '@material-ui/core';
import filter from '../filter.json'
import {FilterItem} from './FilterItem'

const useStyles = makeStyles(theme => ({
    experience:{
        width: 200
    },
    slider:{
        margin:"30px 10px",
        color: "grey"
    },
    root: {
        width: '300px',
    },
    typography: {
        fontWeight: 600,
    }
}))
const valuetext = (value) =>{
    return `${value}`;
}

const Filtering = ()=>{
    const classes = useStyles();
    const [freshness, setFreshness] = React.useState("");

     return(
        <div className={classes.root}>
            {/* experience slider */}
            <div className={classes.experience}>
                <Typography className={classes.typography}>
                    Experience
                </Typography>
                <Slider
                    className={classes.slider}
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    aria-labelledBy="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={0}
                    max={30}
                />

            </div>
            <div style={{display: "flex", margin: "20px 0"}}>
                <Typography className={classes.typography}>
                    Freshness
                </Typography>
                <select value={freshness} style={{marginLeft:"80px", width:"150px"}}>
                    {
                        filter.Freshness.map(item=>(
                            <option key={item} value={item}>{item}</option>
                        ))
                    }
                </select>

            </div>
            <FilterItem headerName="Location" filterName={filter.Location}/>
            <FilterItem headerName="Salary" filterName={filter.Salary}/>
            <FilterItem headerName="Job Type" filterName={filter.Job_type}/>
            <FilterItem headerName="Posted by" filterName={filter.Posted_by}/>
            <FilterItem headerName="Top Companies" filterName={filter.Top_componies}/>
            <FilterItem headerName="Education" filterName={filter.Education}/>
            <FilterItem headerName="Industries" filterName={filter.Industries}/>

            
        </div>
    )
}
export {Filtering}