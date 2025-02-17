import { useState } from 'react'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { loginRegisterData } from '../../../Redux/RecruiterRegister/LoginRegister/loginRegisterAction'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    root: ({
        width: '100%',
        height: '100%',
        display:'flex',
        flexDirection:'column',
        color:'#666',
        

        '& a':{
            textDecoration:'none',
            color:'#226ec4'
        }
        
    }),
    wrapperLogin: ({
        display:'flex',
        alignSelf:'center',
        width: '1024px',
        maxHeight:'100%',
        paddingTop:'50px',

        '& .left-login': {
            width: '60%',
        },
        '& .left-login > div': {
            height: '338px',
            background: `url('https://static.naukimg.com/s/5/117/i/registration_Page.png')`,
            backgroundSize: '100% 100%',
            marginBottom: '150px',
        },
        '& .left-login > p:first-child': {
            color:'#2870c1',
            fontSize: '14px',
            fontWeight: 800,
            letterSpacing: '1px',
            lineHeight: '17px',
            textAlign: 'center',
        },
        '& .bold-p': {
            color: '#414b5d',
            fontSize: '24px',
            fontWeight: 700,
            lineHeight: '38px',
            textAlign: 'center',
        },
        '& .right-login': {
            width: '40%',
            marginLeft: '20px' 
        }
    }),
    forms: ({
        margin: '5px 0 20px',
        border: '1px solid #DFE6ED',
        borderRadius: '4px',
        display:'flex',
        flexDirection:'column',
        
        '& .forms':{
            display: 'flex',
            justifyContent: 'center'
        },
        '& .selector':{
            display: 'flex',
            borderBottom:'1px solid #DFE6ED',
        },
        '& .selector > h5':{
            margin: '30px 20px 0',
            height:'100%',
            paddingBottom: '5px',
            cursor: 'pointer'
            
        },
        '& form': {
            height:'fit-content',
            width:'377px',
            display:'flex',
            flexDirection:'column',
            background:'white',
            alignItems:'center',
            padding: '40px 0',
            color:'#666',
            transition: '0.4s cubic-bezier(0.6, -0.28, 0.74, 0.05)',
        },
        '& form > input, form > select': {
            border:'none',
            borderBottom: '1px solid #666',
            height:'36px',
            width:'326px',
            outline:'none',
            marginBottom:'20px'
        },
        '& form > option, form > button': {
            height:'40px',
            width:'326px',
            outline:'none'
        },
        '& form > button': {
            border: 'none',
            background: '#2870C1',
            color:'white',
            borderRadius:'2px'
        },
        '& .active': {
            borderBottom: '2px solid #ff3737',
            color:'black'
        },
        '& .login-tab': {
            fontSize:'12px',
            marginTop: '20px'
        },
        '& .login-tab > div': {
            marginTop:'5px'
        },
        '& .forgot-pass':{
            margin:'20px 0'
        },
        '& p': {
            width:'100%',
            textAlign:'left'
        },
        '& .client-para':{
            margin: '0 0 20px',
        },
        '& #form-bot': {
            width:'100%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            borderTop: '1px solid #666',
            paddingTop:'30px',
            marginTop:'20px',
        },
        '& #form-bot > button': {
            height:'36px',
            width:'326px',
            borderRadius:'2px',
            border: '1px solid #2870C1',
            background:'white',
            color:'#2870C1',
            cursor: 'pointer'
        },
        '& #form-bot > p': {
            textAlign: 'center'
        }
    })
})

export const Login = () => {
    const [loginTab, setLoginTab] = useState(false) 
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('') 
    const classes = useStyles()
    const dispatch = useDispatch()
    const loginData = useSelector((state)=>state.logReg.loginData)
    const [isAuth,setIsAuth] = useState(false)
    const [error,setError] = useState(false)
    const history = useHistory()

    React.useEffect(()=>{
        dispatch(loginRegisterData())
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        const item = loginData.map((item)=>(item.email==email && item.company_name == password) ? (1):(0) )
        const check = loginData.find((item)=>item.email==email && item.company_name == password)
        console.log(check)
        console.log(item)
        // console.log(loginData)
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
        isAuth && history.push(`/recruiter/${check.id}`)
    }

    return (
        <main className={classes.root}>
            <Navbar loginTab={loginTab} />
            <div className={classes.wrapperLogin}>
                <div className="left-login">
                    <p>NAUKRI EMPLOYER ZONE</p>
                    <p className='bold-p'>Hiring is Simpler, Smarter & <br /> Faster with Naukri</p>
                    <div />
                </div>
                <div className="right-login">
                    <div className={classes.forms}>
                        <div className='selector'>
                            <h5 onClick={ () => setLoginTab(false) } className={ loginTab ? null : 'active' }>Sales Enquiry</h5>
                            <h5 onClick={ () => setLoginTab(true) } className={ loginTab ? 'active' : null }>Login/Register</h5>
                        </div>
                        <div className='forms'>
                            {
                                !loginTab ? 
                                (<form className='sales-tab'>
                                    <input placeholder='Name' type="text"/>
                                    <input placeholder='Contact Number' type="text"/>
                                    <input placeholder='Company name' type="text"/>
                                    <input placeholder='Email ID' type="text"/>
                                    <input placeholder='City' type="text"/>
                                    <select>
                                        <option value="">I am looking for Recruitment solutions</option>
                                        <option value="">I am a job seeker</option>
                                    </select>
                                    <button>Submit Enquiry</button>
                                </form>) :
                                (<form className='login-tab'>
                                    <input onChange={ e => setEmail(e.target.value) } value={email} placeholder="Registered Email ID" type="text"/>
                                    <input onChange={ e => setPassword(e.target.value) } value={password} placeholder="Password" type="text"/>
                                    <button onClick = {handleSubmit}>Login</button>
                                    <a className='forgot-pass' href="#">Forgot Password ?</a>
                                    <p>Keep your account safe. <a href="#">Learn How</a></p>
                                    <div style={{width:'100%', display:'flex', justifyContent:'space-between'}}>
                                        <div><p>Have a Query? <a href="#">Contact Us</a></p></div>
                                        <div><a href="#">Fraud Alert!</a></div>
                                    </div>
                                    <div id='form-bot'> 
                                        <p className='client-para'>Are you a new client ?</p>
                                        <button onClick={ () => history.push( '/employee-register' ) } id='reg-btn'>Register Now</button>
                                    </div>
                                </form>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
