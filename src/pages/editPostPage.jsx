import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../components/index'
import  service  from '../appwrite-backend/config'
import { useNavigate, useParams } from 'react-router-dom'

function EditPostPage() {
    const [post, setPost] = useState(null);
    const {slug} = useParams(); 
    const navigate = useNavigate();
        
    useEffect( () => {
        if(slug){
            service.getDocument(slug)
            .then( (post) => {
                if(post){
                    setPost(post);
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate] )

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
    ) : null
}

export default EditPostPage
