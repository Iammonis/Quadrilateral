import React from 'react'
import { useState } from 'react'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { getRegisterData } from '../../../Redux/RecruiterRegister/GetRegister/getAction'
import { postRegisterData } from '../../../Redux/RecruiterRegister/PostRegister/postAction'
import { red } from '@material-ui/core/colors'

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
    wrapperRegister: ({
        display:'flex',
        alignSelf:'center',
        width: '1024px',
        maxHeight:'100%',
        paddingTop:'75px',

        '& .left-register': {
            width: '35%',
        },
        '& .left-register > div': {
            height: '338px',
            background: `url('https://static.naukimg.com/s/5/117/i/registration_Page.png')`,
            backgroundSize: '100% 100%'
        },
        '& .left-register > p:first-child': {
            color:'#2870c1',
            fontSize: '14px',
            fontWeight: 800,
            letterSpacing: '1px',
            lineHeight: '17px',
            textAlign: 'left',
        },
        '& .left-register > p:nth-last-child(2)': {
            color: '#414b5d',
            fontSize: '24px',
            fontWeight: 700,
            lineHeight: '38px',
            width: '399px',
            textAlign: 'left',
        },
        '& .right-register': {
            width: '65%',
            marginLeft: '20px' 
        },
        '& form': {
            display:'flex',
            flexDirection:'column'
        },
        '& input': {
            height:'36px',
            width:'326px',
            padding:'12px',
            fontSize: '14px',
            border: '1px solid #666',
            borderRadius: '2px',
            marginTop: '20px',
            lineHeight: '20px',
            outline:'none'
        },
        '& .small-input': {
            width:'150px',
            
        },
        '& button': {
            height:'36px',
            width:'326px',
            fontSize: '14px',
            borderRadius: '5px',
            marginTop: '20px',
            lineHeight: '20px',
            outline:'none',
            border: 'none',
            background:'#125CAF',
            color:'white',
            cursor:'pointer'
        }
    })
})

export const Register = () => {
    const [companyName, setCompanyName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [pin, setPin] = useState('')
    const [name, setName] = useState('')
    const [gst, setGST] = useState('') // optional
    const classes = useStyles()
    const recruiterData = useSelector((state)=>state.get.recruiterData)
    const dispatch = useDispatch()
    const status = useSelector((state)=>state.post.status)
    const [err,setErr] = useState(false)
    const payload = {
        company_name : companyName,
        email : email ,
        mobile : mobile,
        pin : pin,
        name : name,
        gst : gst
    }

    React.useEffect(()=>{
        dispatch(getRegisterData())
       
    },[recruiterData])

    const handleSubmit = e => {
        e.preventDefault()
        const item = recruiterData.map((item)=>(item.company_name === companyName && item.email === email)?(1):(0))
        console.log(item)
        var count = 0
        for(var i=0;i<item.length;i++){
            if(item[i]==1){
                count++
            }
        }
        console.log(count)
        if(companyName!="" && email!="" && mobile != ""&& pin != "" && name != ""){
            if(count == 0){
                dispatch(postRegisterData(payload)) 
                alert("Registration is Successfull") 
            }else{
                setErr(true)
            } 
        }

        
    }

    return (
        <main className={classes.root}>
            <Navbar />
            <div className={classes.wrapperRegister}>
                <div className="left-register">
                    <p>Welcome</p>
                    <p>Get started with Naukri <br /> Recruitment Solutions</p>
                    <div />
                </div>
                <div className="right-register">
                    <h3>Create Account</h3>
                    <p>or already registered? <a href="#">Login Now</a></p>
                    <form >
                        <input onChange={ e => setCompanyName(e.target.value) } value={companyName} placeholder='Company Name' type="text"/>
                        {err&&<div style = {{color : red}}>Comapny is Already Registered</div>}
                        <input onChange={ e => setEmail(e.target.value) } value={email} placeholder='Official Email' type="text"/>
                        <input onChange={ e => setMobile(e.target.value) } value={mobile} placeholder='Mobile / Landline' type="text"/>
                        <input onChange={ e => setPin(e.target.value) } value={pin} placeholder="Contact Person's Name" type="text"/>
                        <input onChange={ e => setName(e.target.value) } value={name} className='small-input' placeholder='Pin Code' type="text"/>
                        <input onChange={ e => setGST(e.target.value) } value={gst} className='small-input' placeholder='GSTIN (Optional)' type="text"/>
                        <button onClick = {handleSubmit}>Create Account</button>
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    )
}
