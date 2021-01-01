import React, { useState } from 'react'
import { Avatar, Button, Card,  Divider,  Grid,  Paper,    Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../Redux/home_redux/actions';
import { useLocation } from 'react-router-dom';
import { timeAgo } from '../../utils/timeAgo';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 680,
      cursor : "pointer",
      fontSize : 15
    },
    div : {
        marginLeft : 30,
        margin : 10
    }
   
  }));

export const UserPostCard =()=>{
    const classes = useStyles();
    const [err,setErr] = useState(false)
    const location = useLocation()
    // const [data,setData] = useState([])
    const data = useSelector((state)=>state.filter1.allPosts)
    const [item,setItem] = useState({}) 
    const dispatch = useDispatch()
    const [url, setUrl] = useState(location.search);

    const handleItem =()=>{
        const items  = data.find((item)=>item.id === 0)
         setItem(items)
        
    }


    React.useEffect(()=>{

        dispatch(getAllPosts(url))
        handleItem()
        console.log(data)
    },[url])

    const truncate = (str, no_words) => {
        return str.split(" ").splice(0,no_words).join(" ");
    }

    return(
        <>
            <Paper className = {classes.root} elevation={3}>
                <div className = {classes.div}>
                    <Typography variant = "h6">12 New Recommended Job(s)</Typography>
                </div>
                <Divider/>
                 <div className = {classes.div}>
                <div><Typography variant = "h6">{item.title}</Typography></div>
                <div><Typography variant = "">{item.company_name}</Typography></div>
                </div>
                <div className = {classes.div}>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/1063/1063376.svg" alt="" style = {{height :15}}/>
                    --{item.experience} yeras
                </div>
                <div className ={classes.div} style = {{display: "flex"}} >
                    <img src="https://www.flaticon.com/svg/static/icons/svg/684/684809.svg" alt="" style = {{height :15}}/>
                     __{Object.keys(item.location).map( (location) => <p key="location"> {location} , </p> )}
                </div>
                <div className ={classes.div} style = {{display: "flex"}}>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/3056/3056378.svg" alt="" style = {{height :15}}/>
                    __ {Object.keys(item.keywords).map( (keyword) => <p key="keyword">{keyword} ,  </p> )}
                </div>
                <div className ={classes.div}>
                    <img src="https://www.flaticon.com/premium-icon/icons/svg/3131/3131430.svg" alt="" style = {{height :15}}/>
                    __  {truncate(item.description, 12)} ...
                </div>
                <div  style = {{display: "flex"}}>
                <Grid container spacing = {2}>
                   <Grid item> <div className ={classes.div} style = {{display: "flex",width:400}}>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/892/892220.svg" alt="" style = {{height :15}}/>
                         __ 300,000 - 600,000 PA
                    </div></Grid>
                    <Grid item> <div className ={classes.div}>
                    Posted - {timeAgo(item.date_posted)}
                    </div></Grid></Grid>
                </div>
                <div style = {{display : 'flex',flexDirection: 'row-reverse',margin:30}}>
                    <Typography variant = "h6" color = 'primary'>View All</Typography>
                </div>{/* */}
            </Paper>

        </>
    )
}