import React from 'react'
import { PostCard } from './PostCard'
import { useSelector } from 'react-redux'


export const AllPosts = ({freshness, sliderValue}) => {
    const allPosts = useSelector( state => state.filter1.allPosts )
    
    const filterByFreshness = d => {
        console.log(d)
        const date1 = new Date(d);
        const date2 = new Date(Date.now());
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        return diffDays
    }
    const filteredData = allPosts.filter( item => filterByFreshness(item.date_posted) <= freshness && sliderValue >= item.experience )
    
    return (
        <div>
            {
                filteredData.map( item => <PostCard key={item.id} items={item} /> )
            }
        </div>
    )
}
