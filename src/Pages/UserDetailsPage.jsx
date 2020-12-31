import React from 'react';
import { Container} from '@material-ui/core';
import styled from 'styled-components'
import {makeStyles} from '@material-ui/core/styles'
import {useMergeState} from '../Hooks/useMergeState'
import { PersonalDetail } from './PersonalDetail';
import { EducatioDetail } from './EducationDetail';
import {useDispatch} from 'react-redux';
import {registerUser} from '../Redux/Register/actions'

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
    display: flex;
    width: 100%;
    padding: 0;
    color: white;
    height: 70px;
    & div{
        display: flex;
        flex-direction: column;
        margin: "0 10px";
        & span{
            width: 100px;
            height: 5px;
            background: white;
        }
    }
`;


const useStyles = makeStyles((theme) => ({

    button:{
        marginBottom: "10px",
        background: "#4a90e2",
        width: "219px",
        borderRadius: 2,
        color: "white",
        '&:hover': {
          backgroundColor: '#4a90e2',
        }
    },
    form:{
        width: "70%",
        '& div':{
            '& div': {
                display: "flex",
                margin: "20px",
                '& input':{
                    width: "500px",
                    padding: "2px 10px",
                    height: 35
                }
            }
        }
    },
    courseTypeBtn : {
        width: "130px",
        height: "40px",
        marginLeft: 0,
        borderRadius: 0,
        outline: "none",
        border: "1px solid grey",
        background: "white"
    }

}));

const UserDetailsPage = () =>{
    const dispatch = useDispatch();
    const initState = {
        name : "",
        email : "",
        password: "",
        mobile_no: "",
        city: "",
        resume: "",
        course : "",
        specialization: "",
        university: "",
        passing : "",
        tags: ""
    }
    const [openTextAria, setOpenTextAria] = React.useState(false)
    const [showEducationForm, setShowEducationForm] = React.useState(false)
    const [skills, setSkills] = React.useState([])
    const [course_type, setCourse_type] = React.useState("")

    
    const classes = useStyles();
    const [detail, setDetail] = useMergeState(initState);

    React.useEffect(()=>{
        let newSkills = initState.tags.split(", ")
        setSkills(s => [...s, ...newSkills])
    },[detail.tags])
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setDetail({[name] : value})
    }
    const handleShowtextAria = () =>{
        setOpenTextAria(!openTextAria)
    }
    const handleEducationForm = () =>{
        setShowEducationForm(true)
    }
    const setCourseType = (val) =>{
        setCourse_type(val)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const {name,email, password,
                mobile_no,city,
                highest_qualifications, 
                course, specialization, 
                university, passing, skills} = detail
        const payload = {
            name,email, password,
                mobile_no,city,
                highest_qualifications, 
                course, specialization, 
                university, course_type, passing, skills
        }

        dispatch(registerUser(payload))
        //console.log(payload)
    }


    let category = ["Personal", "Education"]
    return(
        <div style={{padding: 0, margin:0, background:"#FCFCFC"}} >
            <Header>
                <div>
                    <img src="https://static.naukimg.com/s/5/104/i/naukri_Logo.png" alt="naukri_Logo"/>
                </div>
                <div>
                    Already Registered?<span> Login</span> here
                </div>
            </Header>
            <Banner>
               {
                   category.map(cat =>(
                       <div key={cat}>
                               <div>{cat}</div>
                               <span></span>
                       </div>
                   ))
               }
            </Banner>
            <Container>
                <form className={classes.form}> 
                    <div>
                        {
                            !showEducationForm ? (
                                <PersonalDetail detail={detail} 
                                                handleChange={handleChange} 
                                                classes={classes} 
                                                handleShowtextAria={handleShowtextAria} 
                                                handleEducationForm={handleEducationForm}
                                                openTextAria={openTextAria}/>
                            ):( 
                                <EducatioDetail detail={detail} 
                                                handleChange={handleChange} 
                                                classes={classes}
                                                handleSubmit={handleSubmit}
                                                setCourseType={setCourseType}/>
                            
                            )

                        }
                    </div>
                    
                </form>
            </Container>
        </div>
    )

}

export {UserDetailsPage}