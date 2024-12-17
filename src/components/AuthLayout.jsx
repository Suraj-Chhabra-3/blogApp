import React from 'react'
import { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'


function AuthLayout({children, authentication = true}) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const authStatus = useSelector( (state) => state.status )

    useEffect( () => {
            if(authStatus && authentication !== authentication){
                navigate('/login')
            } else if (!authentication && authStatus !== authentication) {
                navigate('/')
            }
        setLoading(false)
    }, [authStatus, navigate, authentication] )
    return (
        loading ? (<h1>Loading</h1>) : <>{children}</>
    )
}

export default AuthLayout
