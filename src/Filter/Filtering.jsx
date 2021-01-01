import { useState, useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Slider} from '@material-ui/core';
import filter from '../../filter.json'
import {FilterItem} from './FilterItem'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../Redux/home_redux/actions'
import { useLocation } from 'react-router-dom'


const useStyles = makeStyles( theme => ({
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
    const [freshness, setFreshness] = useState("");
    const location = useLocation()
    const [url, setUrl] = useState(location.search);
    const dispatch = useDispatch()
    const allPosts = useSelector( state => state.filter1.allPosts )
    const loading = useSelector( state => state.filter1.loading )

    const handleURL = ( e, str ) => {
        if(!e){
            setUrl( prev => prev.replace(`&${str}`,'') )
            // console.log(e, str, url, 'checked')
        }
        else{
            setUrl( prev => prev + `&${str}` )
            // console.log(e, str, url, 'not checked')
        }
    }

    useEffect(() => {
        dispatch( getAllPosts(url) )
        console.log(allPosts)
    }, [url])

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
            <FilterItem handleURL={ handleURL } headerName="Location" filterName={filter.Location}/>
            <FilterItem handleURL={ handleURL } headerName="Salary" filterName={filter.Salary}/>
            <FilterItem handleURL={ handleURL } headerName="Job Type" filterName={filter.Job_type}/>
            <FilterItem handleURL={ handleURL } headerName="Posted by" filterName={filter.Posted_by}/>
            <FilterItem handleURL={ handleURL } headerName="Top Companies" filterName={filter.Top_componies}/>
            <FilterItem handleURL={ handleURL } headerName="Education" filterName={filter.Education}/>
            <FilterItem handleURL={ handleURL } headerName="Industries" filterName={filter.Industries}/>

        </div>
    )
}
export {Filtering}