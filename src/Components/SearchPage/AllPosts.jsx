import React from 'react'
import { PostCard } from './PostCard'
import { useSelector } from 'react-redux'


<<<<<<< HEAD
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
=======
export const AllPosts = () => {
    const allPosts = useSelector( state => state.filter1.allPosts )

    return (
        <div>
            {
                allPosts.map( item => <PostCard key={item.id} items={item} /> )
>>>>>>> 7c4d9a9... Employer auth (#24)
            }
        </div>
    )
}
