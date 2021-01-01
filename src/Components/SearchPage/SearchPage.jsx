import { useState, useEffect } from 'react'
import { Navbar } from '../Navbar'
import { Filtering } from '../Filter/Filtering'
import { AllPosts } from './AllPosts'
import { makeStyles } from '@material-ui/core'
import { getAllPosts } from '../../Redux/home_redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    root: () => ({
        width:'100%',
        background:'#FAFAFA',

        '& .mid': {
            display:'flex',
            paddingTop:"20px",
        }
    })
})

export const SearchPage = () => {
    const classes = useStyles()
    const location = useLocation()
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
    }, [url])

    return (
        <main className={classes.root}>
            <Navbar hide={true} />
            <div className='mid'>
                <Filtering setSliderValue={setSliderValue} setFreshness={setFreshness} freshness={freshness} addToUrl={addToUrl} />
                <AllPosts sliderValue={sliderValue} freshness={freshness}/>
            </div>
        </main>
    )
}
