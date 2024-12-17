import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite-backend/auth'
import { logout } from '../../redux-toolkit/authSlice'

function LogOutButton() {
    const dispatch = useDispatch();
    const logOutHandler = () => {
        authService.logout()
        .then( () => {
            dispatch(logout())
        } )
    }
    return (
        <button
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logOutHandler}
        >LogOut</button>
    )
}

export default LogOutButton
