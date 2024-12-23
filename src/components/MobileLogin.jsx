import React from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/authSlice';
import OAuthProviders from '../config/oauthConfig';
import Button from './Button';
import codeant from "../assets/Frame 10.png"

const LoginMobile = ({ type, onToggleType }) => {
    const dispatch = useDispatch();
    const providers = OAuthProviders[type];

    const handleLogin = (authUrl) => {
        // Simulate OAuth login (replace with real OAuth logic)
        const dummyToken = 'dummy-token';
        const dummyUser = { name: 'User', email: 'user@example.com' };

        dispatch(loginSuccess({ user: dummyUser, token: dummyToken }));
        window.location.href = authUrl + `?redirect_uri=${OAuthProviders.redirectUri}`;
    };

    return (
        <>
            <div className='flex flex-col gap-3 items-center px-4'>
                <div className="flex justify-center items-center w-full">
                    <div className="w-full bg-white drop-shadow-2xl rounded-lg p-4">

                        <div className="h-auto flex flex-col items-center justify-end p-8 border-b-2">
                            <img src={codeant} alt="CodeAnt AI Logo" className="w-40 " />
                            <h1 className='text-xl py-6 text-center'>Welcome to CodeAnt AI</h1>
                            <div className="flex w-full">
                                <button
                                    className={`px-4 py-2 rounded-t-md w-full font-medium transition ${type === 'saas'
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200 hover:bg-gray-300'
                                        }`}
                                    onClick={() => onToggleType('saas')}
                                >
                                    SAAS
                                </button>
                                <button
                                    className={`px-4 py-2 w-full rounded-b-md font-medium transition ${type === 'selfHosted'
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200 hover:bg-gray-300'
                                        }`}
                                    onClick={() => onToggleType('selfHosted')}
                                >
                                    Self Hosted
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center h-auto gap-4 overflow-y-auto max-h-[350px]">
                            {providers.map((provider) => (
                                <Button
                                    key={provider.name}
                                    onClick={() => handleLogin(provider.authUrl)}
                                    className="text-black hover:bg-zinc-100 border-gray-300 border-[1px] w-full flex items-center justify-center gap-3"
                                >
                                    <img
                                        src={provider.icon}
                                        alt={`${provider.name} icon`}
                                        className="w-5 h-5"
                                    />
                                    {type === 'saas' ? `Sign in with ${provider.name}` : provider.name}
                                </Button>
                            ))}
                        </div>

                    </div>
                </div>
                <div className='text-center text-sm py-4'>By signing up you agree to the <a href="/privacy-policy" className="text-blue-500">Privacy Policy</a></div>
            </div>
        </>
    );
};

export default LoginMobile;
