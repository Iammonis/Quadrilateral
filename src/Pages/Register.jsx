import { Container, Box, Typography, Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme=>({
    mainPara : {
        margin:"auto",
        width: "450px",
        textAlign:"center",
        marginTop : "20px",
        color: "#707070",
        fontSize: "18px"
    },
    img:{
        width: "150px"
    },
    box:{
        width: "300px",
        textAlign:"center",
        margin: "10px 30px"
    },
    button:{
        marginBottom: "10px",
        fontSize: "18px",
        textAlign: "center",
        height: 45,
        margin: "25px 0 15px",
        background: "#F80",
        width: "220px",
        borderRadius: 2,
        '&:hover': {
          backgroundColor: '#F80',
        }
    },
    typography:{
      color: "#091e42",
      fontSize: 14,
      fontWeight: 400,
    }
    
})))

const Ul = styled.div`
    & ul{
        
        text-align: center;

        & li{
            list-style:none;
            color: #707070;
        }
    }
`
const Header = styled.div`
    display: flex;
    width: 100%;
    padding: 30px 0 20px;
    & div{
        width:50%;
        text-align: center;
    }
`;
const Banner = styled.div`
    background: #292929;
    width: 100%;
    padding: 0;
    color: white;
    height: 70px;
    & div{
        width:180px;
        margin:auto;
        padding-top: 22px;
        font-size:18px;
    }
`;
const Register = () =>{
    const classes = useStyles();

    return(
        <div style={{padding: 0}}>
            <Header>
                <div>
                    <img src="https://static.naukimg.com/s/5/104/i/naukri_Logo.png" alt="naukri_Logo"/>
                </div>
                <div>
                    Already Registered?<span> Login</span> here
                </div>
            </Header>
            <Banner>
                <div>Tell us about yourself</div>
            </Banner>
            <Container style={{textAlign:"center"}}>
                <div className={classes.mainPara}>Find the right job on Naukri.com. You are only few steps away from millions of jobs</div>
                
                <div style={{display: "flex", width:"90%",margin:"20px 20%"}}>

                    <Box color="text.primary" className={classes.box} >
                        <img className={classes.img} src="https://www.flaticon.com/svg/static/icons/svg/3210/3210074.svg" alt="bagpack"/>

                        <Button className={classes.button} variant="contained" color="primary">
                            I am a Fresher
                        </Button>
                        <Typography className={classes.typography}>I have just graduated/I haven't worked after graduation</Typography>
                    </Box>
                    <Box color="text.primary" className={classes.box} >
                        <img className={classes.img} src="https://www.flaticon.com/svg/static/icons/svg/1086/1086548.svg" alt="buisness-outline"/>

                        <Button className={classes.button} variant="contained" color="primary">
                          I am Experienced
                        </Button>
                        <Typography>
                        I have at least 1 month of work experience
                        </Typography>
                    </Box>
                </div>
                <div>
                    <Typography className={classes.mainPara} style={{width:500}}>More than 3 lakhs Jobs <i style={{margin:"0 15px"}}>|</i> More than 1 lakh Recruiters</Typography>
                    <p className={classes.mainPara} style={{margin:"30px auto", fontWeight : 600}}>After you register, you can:</p>
                    <Ul>

                    <ul>
                        <li>- Apply to jobs from the site while keeping your resume hidden from all recruiters.</li>
                        <br/>
                        <li>- Mark yourself as a 'passive jobseeker' if you are not actively looking for a job.</li>
                        <br/>
                        <li>- Block your company or other specific companies from viewing your profile.</li>
                    </ul>
                    </Ul>
                </div>
            </Container>
        </div>
    )
}

export {Register}