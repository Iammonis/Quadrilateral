import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import bell from '../assets/bell.png'
import white from '../assets/white-bell.png'

const useStyles = makeStyles({
    root: hidden => ({
        width: '100%',
        height: "70px",
        background: hidden ? "white" : "transparent",
        color: hidden ? "#666" : "white",
        position: "sticky",
        top:0,
        zIndex: hidden ? "100" : "100" ,
        display: 'flex',
        justifyContent:'center'
    }),
    links: hidden => ({
        display: 'flex',
        fontSize: '12px',

        '& .nav-link': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '85px',
            height: '70px',
            fontWeight: 700,
            lineHeight: '24px',
            cursor: 'pointer',
            position: 'relative'
        },
        '& .dropdown': {
            position: 'absolute',
            top: '70px',
            left: 0,
            background: '#f5f5f5',
            color: '#666'
        },
        '& p': {
            color: hidden ? "#666" : "white",
            textDecoration: 'none'
        },
        '& p:hover': {
            color: hidden ? "#4a90e2" : "white",
            borderBottom: hidden ? "4px solid #4a90e2" : "4px solid #ffffff",
        },
        '& .nav-link:hover': {
            background: hidden ? "#f5f5f5" : "transparent",
        },
        '& .jobs:hover .jobs-dropdown': {
            display: 'flex',
        },
        '& .jobs-dropdown':{
            display:'none',
            width: '300px',
            height: '150px',
            justifyContent:'space-evenly',
            
            
            '& div':{
                display:'flex',
                flexDirection:'column'
            },
            '& a':{
                textDecoration:'none',
                color:'#666',
            },
            '& a:hover':{
                textDecoration:'none',
                color:'#4a90e2'
            }
        },
        '& .recruiters:hover .recruiters-dropdown':{
            display:'flex'
        },
        '& .recruiters-dropdown':{
            flexDirection:'column',
            display:'none',
            width:'155px',
            alignItems:'center',

            '& a':{
                textDecoration:'none',
                color:'#666',
            },
            '& a:hover':{
                textDecoration:'none',
                color:'#4a90e2'
            }
        },
        '& .companies:hover .companies-dropdown':{
            display:'flex'
        },
        '& .companies-dropdown':{
            flexDirection:'column',
            display:'none',
            width: '155px',
            alignItems:'center',

            '& a':{
                textDecoration:'none',
                color:'#666',
            },
            '& a:hover':{
                textDecoration:'none',
                color:'#4a90e2'
            }
        },
        '& .tools:hover .tools-dropdown':{
            display:'flex'
        },
        '& .tools-dropdown':{
            flexDirection:'column',
            display:'none',
            width: '155px',
            alignItems:'center',

            '& a':{
                textDecoration:'none',
                color:'#666',
            },
            '& a:hover':{
                textDecoration:'none',
                color:'#4a90e2'
            }
        },
        '& .services:hover .services-dropdown':{
            display:'flex'
        },
        '& .services-dropdown':{
            display:'none',
            width: '500px',
            // height: '150px',
            justifyContent:'space-evenly',
            
            
            '& div':{
                display:'flex',
                flexDirection:'column'
            },
            '& a':{
                textDecoration:'none',
                color:'#666',
            },
            '& a:hover':{
                textDecoration:'none',
                color:'#4a90e2'
            }
        },
        '& .more:hover .more-dropdown':{
            display:'flex'
        },
        '& .more-dropdown':{
            display:'none',
            flexDirection:'column',
            width: '155px',
            alignItems:'center',

            '& a':{
                textDecoration:'none',
                color:'#666',
            },
            '& a:hover':{
                textDecoration:'none',
                color:'#4a90e2'
            }
        }
        
    }),
    wrapper: {
        width:'100%',
        maxWidth: '1360px',
        display: 'flex',
        alignItems: 'center',

        '& img': {
            margin: '0 50px'
        },
    },
    employee: hidden => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70px',
        width: '100%',
        
        '& p:hover': {
            color: hidden ? "#4a90e2" : "white",
            borderBottom: hidden ? "4px solid #4a90e2" : "4px solid #ffffff",
        },
        '& .bell-img': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            
            '& img': {
                padding:0,
                margin:0,
            }
        },
        '& .emp-login': {
            fontSize: '12px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '150px',
            height: '70px',
            background: "transparent",
            fontWeight: 700,
            lineHeight: '24px',
            cursor: 'pointer',
            position:'relative',

        },
        '& .emp-login:hover': {
            background: hidden ? "#f5f5f5" : "transparent"
        },
        '& .emp:hover .emp-dropdown': {
            display:'flex'
        },
        '& .emp-dropdown':{
            background: '#f5f5f5',
            flexDirection:'column',
            position: 'absolute',
            top: '70px',
            right: 0,
            display:'none',
            width:'155px',
            alignItems:'center',

            '& a':{
                textDecoration:'none',
                color: '#666',
            },
            '& a:hover':{
                color: '#4a90e2',
            }
        }
    })
})

export const Navbar = ({hide = false}) => {
    const [hidden, setHidden] = useState(hide)
    const classes = useStyles(hidden)
    
    const handleScroll = () => {
        if( window.scrollY > 45 ){
            setHidden(true)
        }
        if( window.scrollY <= 45 ){
            setHidden(false)
        }
    }

    useEffect(() => {
        hide === false && window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav className={classes.root}>
            <div className={classes.wrapper}>
                <img src={hidden ? "https://static.naukimg.com/s/4/100/i/naukri_Logo.png" : "https://static.naukimg.com/s/7/109/assets/images/naukri_Logo_white.911c7b34.png"} alt=""/>
                <div className={classes.links}>
                    <div className='nav-link jobs'>
                        <p>JOBS</p>
                        <div className="jobs-dropdown dropdown">
                            <div>
                                <a target="_blank" href="#"  >Search Jobs</a>
                                <a target="_blank" href="#">Advanced Search</a>
                                <a target="_blank" href="#"  >Create Free Job Alert</a>
                                <a target="_blank" href="#"  >Register Now</a>
                            </div>    
                            <div>
                                <a target="_blank" href="#"  >Jobs by Location</a>
                                <a target="_blank" href="#">Jobs by Skill</a>
                                <a target="_blank" href="#"  >Jobs by Designation</a>
                                <a target="_blank" href="#"  >Jobs by Company</a>
                                <a target="_blank" href="#">Jobs by Category</a>
                                <a target="_blank" href="#"  >Browser All Jobs</a>
                            </div>    
                        </div>
                    </div>
                    <div className='nav-link recruiters'>
                        <p>RECRUITERS</p>
                        <div className="recruiters-dropdown dropdown">
                            <a target="_blank" href="https://www.naukri.com/recruiters/browse-all-recruiters"  >Browse All Recruiters</a>
                            <a target="_blank" href="https://resume.naukri.com/contact-recruiters-hr?fftid=GNB_RC"  >Recruiter Connection</a>
                            <a target="_blank" href="https://naukrirecruiter.naukri.com?src=128"  >Go to NaukriRecruiter</a>
                        </div>
                    </div>
                    <div className='nav-link companies'>
                        <p>COMPANIES</p>
                        <div className="companies-dropdown dropdown">
                            <a target="_blank" href="#"  >Browse All Companies</a>
                            <a target="_blank" href="#"  >About Companies</a>
                            <a target="_blank" href="#"  >Interview Questions</a>
                            <a target="_blank" href="#"  >Write Company Review</a>
                            <a target="_blank" href="#"  >Write Interview Advice</a>
                            <a target="_blank" href="#"  >Company Reviews</a>
                            <a target="_blank" href="#"  >Company Salaries</a>
                        </div>
                    </div>
                    <div className='nav-link tools'>
                        <p>TOOLS</p>
                        <div className="tools-dropdown dropdown">
                            <a target="_blank" href="#"  >Career Dashboard</a>
                            <a target="_blank" href="#"  >Industry Trends</a>
                            <a target="_blank" href="#"  >Naukri Lab</a>
                        </div>
                    </div>
                    <div className='nav-link services'>
                        <p>SERVICES</p>
                        <div className="services-dropdown dropdown">
                                    <div>
                                        <h3>
                                            Resume Writing
                                        </h3>
                                        <a target="_blank" href="#" >
                                            Text Resume
                                        </a>
                                        <a target="_blank" href="#" >
                                            Visual Resume
                                        </a>
                                        <a target="_blank" href="#" >
                                            Resume Quality Score - Free
                                        </a>
                                        <a target="_blank" href="#" >
                                            Resume Samples
                                        </a>
                                        <h3>
                                            Jobs For You
                                        </h3>
                                        <a target="_blank" href="#" >
                                            Jobs4U
                                        </a>
                                        <h3>
                                            Interview Preparation
                                        </h3>
                                        <a target="_blank" href="#" >
                                            Interview Pro
                                        </a>
                                    </div>
                                    <div>
                                        <h3>
                                            Recruiter Reach
                                        </h3>
                                        <a target="_blank" href="#" >
                                            Resume Display
                                        </a>
                                        <a target="_blank" href="#" >
                                            <span className="newStatus"></span>
                                            RecruiterConnection
                                        </a>
                                        <a target="_blank" href="#" >
                                            <span className="newStatus"></span>
                                            Priority Applicant
                                        </a>
                                        <h3>
                                            Other
                                        </h3>
                                        <a target="_blank" href="#" >
                                            Help / FAQ
                                        </a>
                                        <a target="_blank" href="#" >
                                            Career Advice
                                        </a>
                                        <a target="_blank" href="#" >
                                            Contact Us
                                        </a>
                                        <h3>
                                            Monthly Subscriptions
                                        </h3>
                                        <a target="_blank" href="#" >
                                            Basic &amp; Premium Plans
                                        </a>
                                    </div>
                                    <div>
                                        <h3>
                                            Courses / Certifications
                                        </h3>
                                        <a target="_blank" href="#">
                                            Data Science
                                        </a>
                                        <a target="_blank" href="#" >
                                            Machine Learning
                                        </a>
                                        <a target="_blank" href="#" >
                                            Big Data
                                        </a>
                                        <a target="_blank" href="#" >
                                            Programming
                                        </a>
                                        <a target="_blank" href="#">
                                            Business Analytics
                                        </a>
                                        <a target="_blank" href="#">
                                            Project Management
                                        </a>
                                        <a target="_blank" href="#">
                                            Web Design
                                        </a>
                                        <a target="_blank" href="#">
                                            DevOps and Cloud computing
                                        </a>
                                        <a target="_blank" href="#">
                                            Marketing
                                        </a>
                                        <a target="_blank" href="#">
                                            Accounting and Finance
                                        </a>
                                        <a target="_blank" href="#">
                                            Banking
                                        </a>
                                        <a target="_blank" href="#">
                                            Logistics and Supply Chain
                                        </a>
                                        <a target="_blank" href="#">
                                            Strategy and Leadership
                                        </a>
                                    </div>
                        </div>
                    </div>
                    <div className='nav-link more'>
                        <p>MORE</p>
                        <div className="more-dropdown dropdown">
                            <h3>
                                Career Tools
                            </h3>
                            <a target="_blank" href="#">
                                Naukri Blog
                            </a>
                            <a target="_blank" href="#" >
                                FAQ
                            </a>
                            <a target="_blank" href="#" >
                                Take Home Calculator
                            </a>
                        </div>
                    </div>
                    <div className='nav-link'>
                        <p>LOGIN</p>
                    </div>
                </div>
                <div className={classes.employee}>
                    <div className='bell-img'>
                        <img src={hidden ? bell : white} alt=""/>
                    </div>
                    <div className='emp-login emp'>
                        <p>FOR EMPLOYEES</p>
                        <div className="emp-dropdown dropdown">
                            <a target="_blank" href="#"  >Buy Online</a>
                            <a target="_blank" href="#"  >Employee Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
