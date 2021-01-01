import { useState, useEffect } from 'react'
import { Navbar } from '../Navbar'
import { Filtering } from '../Filter/Filtering'
import { AllPosts } from './AllPosts'
import { makeStyles } from '@material-ui/core'
import { getAllPosts } from '../../Redux/home_redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const useStyles = makeStyles({
    root: () => ({
        width:'100%',
        height:'100%',
        background:'#FAFAFA',

        '& .mid': {
            display:'flex'
        }
    })
})

export const SearchPage = () => {
    const classes = useStyles()
    const location = useLocation()
    const [url, setUrl] = useState(location.search);
    const dispatch = useDispatch()
    
    const loading = useSelector( state => state.filter1.loading )

    useEffect(() => {
        dispatch( getAllPosts(url) )
        // console.log(allPosts)
    }, [url])

    return (
        <main className={classes.root}>
            <Navbar hide={true} />
            <div className='mid'>
                <Filtering />
                <AllPosts />
            </div>
        </main>
    )
}
