import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

const Login = () => {

    const[isSignInForm,setIsSignInForm] = useState(true);

    const handleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="login-screen-image" />
            </div>
            <div className="absolute p-12 bg-black w-3/12 right-0 left-0 mx-auto my-28 text-white opacity-90">
                <form>
                    {
                        !isSignInForm ? 
                        <>
                        <p className='text-3xl py-4'>Sing Up</p>
                        <input type="text" placeholder='Enter Your FullName' className="p-4 my-4 w-full rounded-lg bg-gray-800"/>
                        <input type="email" placeholder='Enter Your Email Address' className="p-4 my-4 w-full rounded-lg bg-gray-800"/>
                        <input type="password" placeholder='Enter Your Password' className="p-4 my-4 w-full rounded-lg bg-gray-800"/>
                        <input type="password" placeholder='ReEnter Your Password' className="p-4 my-4 w-full rounded-lg bg-gray-800"/>
                        <button className="p-3 my-6 w-full bg-red-700 rounded-lg">Sign Up</button>
                        <span className='text-gray-500'>Already a User. </span>
                        <span className='text-bold cursor-pointer' onClick={handleSignInForm}>Please Sign In</span>
                        </>
                        :
                        <>
                        <p className='text-3xl py-4'>Sing In</p>
                        <input type="email" placeholder='Enter Your Email Address' className="p-4 my-4 w-full rounded-lg bg-gray-800"/>
                        <input type="password" placeholder='Enter Your Password' className="p-4 my-4 w-full rounded-lg bg-gray-800"/>
                        <button className="p-3 my-6 w-full bg-red-700 rounded-lg">Sign In</button>
                        <span className="text-gray-500">New to Netflix?</span>
                        <span className="text-bold cursor-pointer" onClick={handleSignInForm}>Sign up now.</span>
                        </>
                    }
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default Login