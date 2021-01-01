import React from 'react'
import { makeStyles } from '@material-ui/core'
import { timeAgo } from '../../utils/timeAgo'

const useStyles = makeStyles({
    root: () => ({
        boxShadow:'0 1px 2px 0 rgba(0,106,194,.2)',
        border: '1px solid #ebf0f6',
        padding:'24px 24px 16px',
        width:'615px',
        height:'212px',
        background:"#fff",
        display:'flex',
        flexDirection:'column',

        '& .info': {
            // width:'100%',
            display:'flex',
            // justifyContent:'space-evenly'
        },
        '& .location': {
            // width:'100%',
            display:'flex',
            // justifyContent:'space-evenly'
        },
        '& .keywords': {
            // width:'100%',
            display:'flex',
            // justifyContent:'space-evenly'
        },
        '& .card-bottom': {
            width:'100%',
            display:'flex',
            justifyContent:'space-between'
        }
    })
})

export const PostCard = ({items}) => { 
    const classes = useStyles()

    const truncate = (str, no_words) => {
        return str.split(" ").splice(0,no_words).join(" ");
    }

    return (
        <div className={classes.root}>
            <h2>{items.title}</h2>
            <p>{items.company_name}</p>
            <div className='info'>
<<<<<<< HEAD
                <p>0 to {items.experience} Years</p>
                <p>{items.salary}</p>
                <div className="location">{items.location.map( (location) => <p key="location"> {location}</p> )}</div>
=======
                <p>{items.experience.replace('to'," - ")} Years</p>
                <p>{items.salary}</p>
                <div className="location">{Object.keys(items.location).map( (location) => <p key="location"> {location}</p> )}</div>
>>>>>>> 7c4d9a9... Employer auth (#24)
            </div>
            <div className='desc'>
                {truncate(items.description, 8)} ...
            </div>
            <div className='keywords'>
<<<<<<< HEAD
            {items.keywords.map( (keyword) => <p key="keyword">{keyword} </p> )}
=======
            {Object.keys(items.keywords).map( (keyword) => <p key="keyword">{keyword} </p> )}
>>>>>>> 7c4d9a9... Employer auth (#24)
            </div>

            <div className='card-bottom'>
                <p>{timeAgo(items.date_posted)}</p>
                <p>save</p>
            </div>
        </div>
    )
}
