import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {login} from '../redux-toolkit/authSlice'
import {Input, Button, Logo, PostCard} from './index'
import { useNavigate } from 'react-router-dom'
import authService from '../appwrite-backend/auth'
import { Link } from 'react-router-dom'


function SignUp() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();

    const signUp = async(data) => {
        setError('')
        try {
            const user = await authService.createAccount(data);
            if(user){
                const userData = authService.getCurrentUser()
                if(userData) dispatch(login(userData))
                navigate('/')
            }
        } catch (error) {
            setError(error)
        }
    }

    return (
        <div className='flex items-center justify-center'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(signUp)}>
                    <div className='space-y-5'>

                        <Input 
                        label="Name"
                        placeholder="enter the Name"
                        {...register("name", {
                            required: true,
                        })}
                        />

                        <Input 
                        label="email"
                        placeholder="enter the email"
                        type="email"
                        {...register("email", {
                            required: true,
                        })}
                        />

                        <Input
                        label="password"
                        placeholder="enter the password"
                        type="password"
                        {...register("password", {
                            required: true,
                        })}
                        />

                        <Button
                        type='submit'
                        className='w-full'>Create Account</Button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
