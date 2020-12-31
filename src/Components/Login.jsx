import React from 'react'
import { useState } from 'react'
import { Typography, Drawer, Divider,TextField,Button,IconButton} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchLoginData } from '../Redux/LoginRedux/loginAction';
import { SearchBar } from './SearchBar/SearchBar';
const drawerWidth = 400;
const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      marginLeft: 30,
      width : 300,
      marginTop : 30
    },
    input :{
        width : 300,
        
        
    },
    button : {
        marginLeft: 20
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    
    drawerHeader: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(5, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end"
    },
    
    
  }));
export const Login = ()=>{
    const classes = useStyles();
    const [open,setOpen]=useState(false)
    const [log,setLog] = useState(true)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [mobile,setMobile] = useState("")
    const data = useSelector((state)=>state.log.data)
    const dispatch = useDispatch()
    const [error,setError] = useState(false)
    const [isAuth,setIsAuth] = useState(false)

    React.useEffect(()=>{
        dispatch(fetchLoginData())
    },[])
    
    const handleLogin=()=>{
        
       const item = data.map((item)=>(item.email==email && item.password == password) ? (1):(0) )
        console.log(item)
        var count =0
        for(var i=0;i<item.length;i++){
            if(item[i]==1){
                count++
            }
        }
        if( count==1){
            setError(false)
            setIsAuth(true)
        }
        else {
            setError(true)
            setIsAuth(false)
            setEmail("")
            setPassword("")
        }

    }
    return(
        <>
        
        <Link to="/login">
            <h2 onClick = {()=>setOpen(!open)}>Login</h2></Link>
            <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
              paper: classes.drawerPaper
            }}
            >
               <div>
                   {/* close the login tab */}
                   <IconButton aria-label="close" style= {{float : "right"}} onClick = {()=>setOpen(false)}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                    <Typography className = {classes.root}  variant="h4"> Login </Typography>
               
               </div>
                <div style= {{textAlign : "center"}}>
                    {/* login with the faceBook  or Google */}
                    <div style= {{marginTop:50}}>
                        <Button className = {classes.button} variant="contained"><img src="https://www.flaticon.com/svg/static/icons/svg/145/145802.svg" alt="" style = {{height:20}}/>  Facebook</Button>
                        <Button className = {classes.button} variant="contained"><img src="https://www.flaticon.com/svg/static/icons/svg/2702/2702602.svg" alt="" style = {{height:20}}/> Google</Button>
                    </div>
                    
                    
                    <Typography  variant="h12"> All your activity will remain private. </Typography>
                </div>
                
                <Divider/>
                {/* Required credentials to login*/}
               {
               log ?  (<div>
                    <form className = {classes.input}>
                        <div   style = {{marginTop : 30}}>
                            <h3 style = {{marginLeft : 30}}><label htmlFor="email">Email</label></h3>
                            <TextField required
                            label="Email" variant="filled" 
                            className = {classes.input}
                            type = "email"
                            value = {email}
                            onChange = {(e)=>setEmail(e.target.value)}
                            style = {{marginLeft : 30}}
                            /> 
                        </div>
                        <div style = {{marginTop : 30}}>
                            <h3 style = {{marginLeft : 30}}><label htmlFor="password">Password</label></h3>
                            <TextField required
                            label="password" variant="filled" 
                            className = {classes.input}
                            type = "password"
                            value = {password}
                            onChange = {(e)=>setPassword(e.target.value)}
                            style = {{marginLeft : 30}}
                            /> 
                        </div>
                    <Typography style= {{float : "right"}} variant="h9"> ForgotPassword?</Typography>
                    {/* submit credentials */}
                    <Button className = {classes.root} variant="contained" color="primary" onClick= {handleLogin} >
                        Login
                    </Button>

                    
                    </form>
                    {
                        isAuth && <div style = {{color: "red",textAlign:"center"}}>Login success</div>
                    }
                    {/* if the credentials are wrong */}
                    {
                        error&&<div style = {{color: "red",textAlign:"center"}}>Wrong Credentilas</div>
                    }
                    <div style= {{textAlign : "center",marginTop:10}}>
                        or
                    </div>
                    <Button className = {classes.root} style = {{border: "1px solid blue",color: "blue"}} onClick={()=>setLog(false)} >
                        Use OTP To Login
                    </Button>
                </div>):
                (
                    <div>

                    <div style = {{marginTop : 30}}>
                            <h3 style = {{marginLeft : 30}}><label htmlFor="password">mobile</label></h3>
                            <TextField required
                            label="mobile" variant="filled" 
                            className = {classes.input}
                            type = "number"
                            value = {mobile}
                            onChange = {(e)=>setMobile(e.target.value)}
                            style = {{marginLeft : 30}}
                            /> 
                        </div>
                    
                    {/* submit credentials */}
                    <Button className = {classes.root} variant="contained" color="primary" onClick= {handleLogin} >
                        Get OTP
                    </Button>

                    
                    
                    {/* if the credentials are wrong */}
                    {
                        error&&<div style = {{color: "red",textAlign:"center"}}>Wrong Credentilas</div>
                    }
                    <div style= {{textAlign : "center",marginTop:10}}>
                        or
                    </div>
                    <Button className = {classes.root} style = {{border: "1px solid blue",color: "blue"}} onClick={()=>setLog(true)} >
                        Use Email To Login
                    </Button></div>
                )}

                <div style= {{textAlign : "center",marginTop:10}}>
                    <Typography  variant="h9"> New to Naukari?</Typography>
                    {/* for New Registrations */}
                    <Typography  variant="h9" style = {{color: "blue"}}> Register for free</Typography>
                </div>
                
            </Drawer>

        </>
    )
}