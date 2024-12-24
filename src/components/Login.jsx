import React from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/authSlice';
import OAuthProviders from '../config/oauthConfig';
import Button from './Button';
import codeant from "../assets/Frame 10.png"
import { Navigate, useNavigate } from 'react-router-dom';

const Login = ({ type, onToggleType }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const providers = OAuthProviders[type];

    const handleLogin = (authUrl) => {
        // Simulate OAuth login (replace with real OAuth logic)
        const dummyToken = 'dummy-token';
        const dummyUser = { name: 'UtkarshDhairya', email: 'user@example.com' };

        dispatch(loginSuccess({ user: dummyUser, token: dummyToken }));
        navigate(authUrl)
    };

    return (
        <>
            <div className=' flex flex-col gap-3 items-center'>
                <div className="flex justify-center items-center  ">
                    <div className="lg:w-[40vw] md:w-[60vw] bg-white drop-shadow-2xl rounded-lg p-4">

                        <div className="h-[30vh] flex flex-col items-center justify-end p-8 border-b-2">
                            <img src={codeant} alt="" />
                            <h1 className='text-3xl py-9 '> Welcome to CodeAnt AI</h1>
                            <div className="flex">
                                <button
                                    className={`px-4 py-2 rounded-tl-md rounded-bl-md lg:w-[250px] md:w-[200px] font-medium transition ${type === 'saas'
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200 hover:bg-gray-300'
                                        }`}
                                    onClick={() => onToggleType('saas')}
                                >
                                    SAAS
                                </button>
                                <button
                                    className={`px-4 py-2 lg:w-[250px] md:w-[200px] rounded-tr-md rounded-br-md font-medium transition ${type === 'selfHosted'
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200 hover:bg-gray-300'
                                        }`}
                                    onClick={() => onToggleType('selfHosted')}
                                >
                                    Self Hosted
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center h-[35vh] gap-4 overflow-y-auto max-h-[350px]">
                            {providers.map((provider) => (
                                <Button
                                    key={provider.name}
                                    onClick={() => handleLogin(provider.authUrl)}
                                    className=" text-black hover:bg-zinc-100 border-gray-300 border-[1px]  flex items-center justify-center gap-3"
                                >

                                    <div className='w-[25vw] flex items-center justify-center gap-4'>
                                        <img
                                            src={provider.icon}
                                            alt={`${provider.name} icon`}
                                            className="w-5 h-5"
                                        />

                                        {type === 'saas' ? `Sign in with ${provider.name}` : provider.name}
                                    </div>
                                </Button>


                            ))}


                        </div>

                    </div>
                </div>
                <div className=''>By signing up you agree to the Privacy policy </div></div>
        </>
    );
};

export default Login;
