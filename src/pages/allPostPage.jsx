import React from 'react'
import service from '../appwrite-backend/config'
import { Container, PostCard } from '../components/index'
import { useState, useEffect } from 'react'

function AllPostPage() {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        service.getPosts([])
            .then( (posts) => {
                if(posts){
                    setPosts(posts.documents);
                }
    })
    }, [] )

    return (
        <div className='py-8 w-full'>
            <Container>
            <div className='flex flex-wrap'>
                {posts.map( (i) => (
                    <div key={i.$id} className='p-2 w-1/4'>
                        <PostCard post={i}/>
                    </div>
                ) )}
            </div>
            </Container>
        </div>
    )
}

export default AllPostPage
