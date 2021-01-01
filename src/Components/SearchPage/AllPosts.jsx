import React from 'react'
import { PostCard } from './PostCard'
import { useSelector } from 'react-redux'


export const AllPosts = () => {
    const allPosts = useSelector( state => state.filter1.allPosts )

    return (
        <div>
            {
                allPosts.map( item => <PostCard key={item.id} items={item} /> )
            }
        </div>
    )
}
