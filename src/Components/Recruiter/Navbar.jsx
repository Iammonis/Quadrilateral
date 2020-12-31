import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: () => ({
        width: '100%',
        height: '70px',
        position: 'sticky',
        background: '#fff',
        display:'flex',
        justifyContent:'center',
        color: '#666',
        boxShadow:'0 1px 4px 0 rgba(9,50,131,.2)',
        
        '& .wrapper': {
            height: '100%',
            width:'1024px',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between'
        },
        '& .left': {
            width:'100%',
            height: '100%',
            display:'flex',
            alignItems:'center'
        },
        '& .left > div': {
            height: '100%',
            width:'80px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            cursor:'pointer'
        },
        '& .down-arrow': {
            height: '5px',
            width:'10px',
            marginTop: '5px',
            marginLeft: '5px'
        },
        '& .phone-icon': {
            height: '20px',
            width:'20px',
        },
        '& .right': {
            height: '100%',
            width:'100%',
            display:'flex',
            justifyContent:'flex-end',
            alignItems:'center'
        },
        '& .phone': {
            height: '100%',
            width:'100%',
            display:'flex',
            alignItems:'left',
            justifyContent:'center',
            flexDirection:'column',
            width:'fit-content',
            margin: '0 20px',
            position:'relative'
        },
        '& .phone div:first-child': {
            fontSize:'10px',
            fontWeight:600,
        },
        '& .phone > div:nth-last-child(2)': {
            display:'flex',
            alignItems:'center',
        },
        '& .phone:hover .phone-dropdown': {
            display:'flex'
        },
        '& .right > div': {
            height: '100%',
            display:'flex',
            cursor:'pointer'
        },
        '& .cart': {
            display:'flex',
            alignItems:'center'
        },
        '& .cart p': {
            margin: '0 10px'
        },
        '& .cart-icon': {
            height: '20px',
            width: '20px',
        },
        '& .job-link': {
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            margin: "0 20px"
        },
        '& .job-link a': {
            color: '#2870c1',
            textDecoration: 'none'
        },
        '& .a-link': {
            height: '15px',
            width: '15px',
            margin: '5px 10px 0'
        },
        '& .left > div:last-child': {
            position:'relative',
        },
        '& .left > div:last-child:hover .products-dropdown': {
            display:'flex',
        },
        '& .products-dropdown':{
            position:'absolute',
            top:'72px',
            left:'0',
            width:'300px',
            display:'none',
            flexDirection:'column',
            background: '#fff',
            boxShadow:'rgba(9,50,131,.2) 0 3px 8px 0'
        },
        '& .products-dropdown div':{
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '20px',
            padding: '10px 5px 10px 14px',
        },
        '& .products-dropdown div:hover':{
            background:'#F2F5F9'
        },
        '& .phone-dropdown':{
            position:'absolute',
            top:'72px',
            left:'0',
            width:'335px',
            display:'none',
            flexDirection:'column',
            background: '#fff',
            boxShadow:'rgba(9,50,131,.2) 0 3px 8px 0'
        },
        '& .phone-dropdown > div':{
            margin: '10px 20px',
            display:'flex',
            flexDirection:'column',
            justifyContent:'left'
        },
        '& .phone-dropdown h4':{
            color: '#666',
            fontSize: '16px',
            fontWeight: 600,
            marginBottom: '5px',
        },
        '& .phone-dropdown > h4':{
            margin:' 10px 20px'
        },
    })
})

export const Navbar = ({ loginTab }) => {
    const classes = useStyles()
    return (
        <nav className={classes.root}>
            <div className="wrapper">
                <div className="left">
                    <img src="https://static.naukimg.com/s/5/114/i/naukriLogo.png" alt=""/>
                    <div>
                        <p>Home</p>
                    </div>
                    <div>
                        <p>Products</p>
                        <img className='down-arrow' src="https://static.naukimg.com/s/5/114/i/dropdwon_grey.png" alt=""/>
                        <div className='products-dropdown'>
                            <div>Products On Offer (Buy Online)</div>
                            <div>Resume Database Access (RESDEX)</div>
                            <div>Job Posting</div>
                            <div>Recruitment Management System (RMS)</div>
                            <div>Referral Solutions</div>
                            <div>Branding Solutions</div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className='phone'>
                        { loginTab ? <div>Recruiter Toll Free (10 AM to 6 PM)</div> : <div>India Sales Toll Free (9:30 AM to 6:30PM)</div>}
                        <div>
                            <img className='phone-icon' src="https://static.naukimg.com/s/5/114/i/phone_grey.png" alt=""/>
                            <p>1800-102-2558</p>
                            <img className='down-arrow' src="https://static.naukimg.com/s/5/114/i/dropdwon_grey.png" alt=""/>
                        </div>
                        <div className='phone-dropdown'>
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
                    {/* <div className='cart'>
                        <img className='cart-icon' src="https://static.naukimg.com/s/5/114/i/cart_grey.png" alt=""/>
                        <p>Cart</p>
                        <img className='down-arrow' src="https://static.naukimg.com/s/5/114/i/dropdwon_grey.png" alt=""/>
                    </div> */}
                    <div className='job-link'>
                        <a href="#">Job seeker </a>
                        <a href="#"><img className='a-link' src="https://static.naukimg.com/s/5/114/i/jobseeker_header_blue_icon.png" alt=""/></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
