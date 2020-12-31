import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    footer: {
        width:'100%',
        display:'flex',
        justifyContent:'center',
        background:'#01204F',
        color: 'white',
        marginTop:'50px',
        paddingTop:'50px',
        
        '& .footer-wrapper': {
            width:'1024px',
            display:'flex',
            flexDirection:'column',
            // alignSelf:'center',
            // justifyContent:'center'
        },
        '& h4': {
            margin:'20px 0'
        },
        '& .top-footer': {
            display:'flex',
        },
        '& .top-footer > div': {
            width: '50%'
        },
        '& form': {
            height:'fit-content',
            width:'377px',
            display:'flex',
            flexDirection:'column',
            background:'white',
            alignItems:'center',
            padding: '40px 0',
            color:'#666'
        },
        '& input, select': {
            border:'none',
            borderBottom: '1px solid #666',
            height:'36px',
            width:'326px',
            outline:'none',
            marginBottom:'20px'
        },
        '& option, button': {
            height:'36px',
            width:'326px',
            outline:'none'
        },
        '& button': {
            border: 'none',
            background: '#2870C1',
            color:'white',
            borderRadius:'2px'
        },
        '& .bottom-footer': {
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            margin:'20px 0'
        }
    }
})

export const Footer = () => {
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <div className="footer-wrapper">

                <div className='top-footer'>
                    <div>
                        <div>
                            <h4>Recruiter Services</h4>
                            <p>Resdex</p>
                            <p>RMS</p>
                            <p>Referral</p>
                            <p>Transition Services</p>
                        </div>
                        <div>
                            <h4>Information</h4>
                            <p>About Us</p>
                            <p>Clients</p>
                            <p>Careers</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy policy</p>
                            <p>Jobseeker Home</p>
                            <p>FAQs</p>
                            <p>Site Map</p>
                        </div>
                        <div>
                            <h4>Legal</h4>
                            <p>Grievances</p>
                            <p>Summons and Notice</p>
                            <p>Trust and Safety</p>
                            <p>Whitehat</p>
                        </div>
                        <div>
                            <h4>For Sales Enquiry</h4>
                            <div>
                                <h4>India:</h4>
                                <p>Toll Free: 1800 - 102 -2558 (9:30 AM to 6:30PM)</p>
                                <p>+91 - 9818882211</p>
                                <p>sales@naukri.com</p>
                            </div>
                            <div>
                                <h4>USA:</h4>
                                <p>Toll Free: +1 866 557 3340</p>
                                <p>usa@naukri.com</p>
                            </div>
                            <div>
                                <h4>Europe/UK:</h4>
                                <p>Toll Free: +44 808 120 2323</p>
                                <p>europe@naukri.com</p>
                            </div>
                            <div>
                                <h4>Middle East/Africa & South East Asia:</h4>
                                <p>Mobile: +91 - 98183 17555</p>
                                <p>middleeast@naukri.com</p>
                            </div>
                            <div>
                                <h4>Recruiter Helpline</h4>
                                <p>Toll Free No. 1800-102-5558 (10 AM to 6 PM, Mon - Sat)</p>
                            </div>
                        </div>
                    </div>
                        
                    <div>
                        <form>
                            <h4>Sales Enquiry</h4>
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
                        </form>
                    </div>
                </div>
            
                <div className='bottom-footer'>
                    <p>Contact Us | Report a problem</p>
                    <p>All rights reserved © 2020 Info Edge India Ltd.</p>
                </div>
            </div>
        </footer>
    )
}


                        

                        

                            
                        