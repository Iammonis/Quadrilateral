import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Card,  Grid,  Paper,  Slider,  Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';


    const useStyles = makeStyles((theme) => ({
        root: {
          maxWidth: 345,
          cursor : "pointer",
        },
        avatar: {
            display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(1, 1),
    
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
        },
        slider : {
            margin : "auto",
            maxWidth: 250,
            textAlign : "center"
        },
        button : {
            width : 250
        }
      }));
export const UserPage =()=>{
    const {id} = useParams()
    const data = useSelector((state)=>state.log.data)
    const [item,setItem] = useState({})

    const handleItem =(num)=>{
        const items  = data?.find((item)=>item.id === Number(num))
         setItem(items)
        
    }
    React.useEffect(()=>{
        handleItem(id)
        console.log(item)
    },[])

    const [value, setValue] = React.useState(30);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
    const classes = useStyles();
    return(
        <>
            <Paper className = {classes.root}>
                <div className = {classes.avatar}>
              <Avatar >hr</Avatar>      
                </div>
                <div style = {{textAlign : "center"}}>
                <div><Typography variant = "h5">{item.name}</Typography></div>
                <div><Typography variant = "h7">{item.course}-{item.specialization}</Typography></div>
                <div><Typography variant = "h7">{item.university}</Typography></div></div>
                <div style = {{marginLeft : 30,fontFamily :"bold"}}>
                    <Typography variant = "h8" color ="primary" >Profile Completeness</Typography>
                <Slider value={65} onChange={handleChange} className = {classes.slider} aria-labelledby="continuous-slider" />
                </div>
                <div style = {{display : "flex",marginLeft : 30}}>
                   <Grid container spacing = {10}>
                     <Grid item>  <Typography variant = "h7" >DetailsMissing</Typography></Grid>
                     <Grid item><Typography variant = "h7" color ="primary">ADD DETAILS</Typography></Grid> </Grid>
                </div>
                <div style = {{display : "flex",justifyContent : "center",margin :10 }}>
                    <Button className = {classes.button} variant="contained" color = "primary">Update Profile</Button>
                </div>
                <div style = {{fontFamily : "bold",marginLeft : 30}}>
                <Typography variant = "h7">Profile Performence</Typography> 
                </div>
                <div style = {{display : "flex",margin : 30}}>
                <Grid container spacing = {2}>
                <Grid item> <Paper>
                    <Typography variant = "h5" color = "primary">06</Typography>
                    <Typography variant = "h7" color = "primary">Search Apearence</Typography>
                    </Paper></Grid>
                    <Grid item>
                          <Paper>
                          <Typography variant = "h5" color = "primary">02</Typography>
                    <Typography variant = "h7" color = "primary">Recruiter Action</Typography>
                        </Paper>
                              
                    </Grid>
                </Grid>
                </div>
                <div style = {{fontFamily : "bold",margin: 30}}>
                <Typography variant = "h7" color = "primary">Get professional help to increase CV views.</Typography>
                </div>

            </Paper>
        </>
    )
}