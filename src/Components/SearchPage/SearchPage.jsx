import { useState, useEffect } from 'react'
import { Navbar } from '../Navbar'
import { Filtering } from '../Filter/Filtering'
import { AllPosts } from './AllPosts'
import { makeStyles } from '@material-ui/core'
import { getAllPosts } from '../../Redux/home_redux/actions'
import { useDispatch, useSelector } from 'react-redux'
<<<<<<< HEAD
import { useLocation, useHistory } from 'react-router-dom'
=======
import { useLocation } from 'react-router-dom'
>>>>>>> 7c4d9a9... Employer auth (#24)

const useStyles = makeStyles({
    root: () => ({
        width:'100%',
<<<<<<< HEAD
        background:'#FAFAFA',

        '& .mid': {
            display:'flex',
            paddingTop:"20px",
=======
        height:'100%',
        background:'#FAFAFA',

        '& .mid': {
            display:'flex'
>>>>>>> 7c4d9a9... Employer auth (#24)
        }
    })
})

export const SearchPage = () => {
    const classes = useStyles()
    const location = useLocation()
<<<<<<< HEAD
    const [url, setUrl] = useState(location.search)
    const dispatch = useDispatch()
    const history = useHistory()
    const [freshness, setFreshness] = useState(30);  
    const [sliderValue, setSliderValue] = useState(1)
    
    const loading = useSelector( state => state.filter1.loading )

    

    const handleRedirect = () => {
        history.push(`${location.pathname}${url}`)
    }

    const replaceURL = (headerName, str) => {
        let modifiedURL
        if( location.search.includes(`&${headerName}_like=${str}`) ){
            modifiedURL = url.replace( `&${headerName}_like=${str}`, "" )
        }
        else{
            if( url[url.length-1] === str[str.length-1] ){
                modifiedURL = url.replace( `?${headerName}_like=${str}`, "" )
            }
            else{
                modifiedURL = url.replace( `${headerName}_like=${str}&`, "" )
            }
        }
        return modifiedURL
    }

    const addToUrl = (e, str, headerName) => {
        console.log(e.target.checked)
        headerName = headerName.toLowerCase()
        if( e.target.checked ){
            if( location.search.includes('?') ){
                setUrl( prev => prev + `&${headerName}_like=${str}` )
            }
            else{
                setUrl( prev => prev + `?${headerName}_like=${str}` )
            }
        }
        else{
            console.log('rep')
            setUrl( replaceURL(headerName, str) )
        }
        
    }

    useEffect(() => {
        console.log(location)
        dispatch( getAllPosts(url) )
        // console.log(allPosts)
    }, [location.search])

    useEffect(() => {
        handleRedirect()
=======
    const [url, setUrl] = useState(location.search);
    const dispatch = useDispatch()
    
    const loading = useSelector( state => state.filter1.loading )

    useEffect(() => {
        dispatch( getAllPosts(url) )
        // console.log(allPosts)
>>>>>>> 7c4d9a9... Employer auth (#24)
    }, [url])

    return (
        <main className={classes.root}>
            <Navbar hide={true} />
            <div className='mid'>
<<<<<<< HEAD
                <Filtering setSliderValue={setSliderValue} setFreshness={setFreshness} freshness={freshness} addToUrl={addToUrl} />
                <AllPosts sliderValue={sliderValue} freshness={freshness}/>
=======
                <Filtering />
                <AllPosts />
>>>>>>> 7c4d9a9... Employer auth (#24)
            </div>
        </main>
    )
}
