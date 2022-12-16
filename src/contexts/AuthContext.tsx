import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SkeletonLoading } from '../components/SkeletonLoading';
import { api } from '../services/api';
import { IUser } from '../types/UserProps';


interface UserContextProps {
    user?: IUser | null;
    authenticated: boolean;
    handleLoginWithPassword: (email: string, password: string) => Promise<void>;
    handleCreateAccountWithPhoneNumber: (phone: string) => Promise<void>;
    handleLoginWithOtp: (phone: string, otp: string) => Promise<void>;
    handleLogout: () => void;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
}

interface UserContextProviderProps {
    children: ReactNode;
}
export const AuthContext = createContext({} as UserContextProps)

export function AuthContextProvider({children}: UserContextProviderProps) {
    const navigate = useNavigate()
    const [ user, setUser ] = useState<IUser | null>()
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('token')
        const user = getUserLocalStorage();

        if(token) {
            api.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
            setUser(user)
        }

        setLoading(false)
    }, [])

    function setUserLocalStorage(user: IUser | null) {
        localStorage.setItem('user', JSON.stringify(user))
    }

    function getUserLocalStorage() {
        const userJson = localStorage.getItem('user')

        if(!userJson) {
            return null;
        }

        const user = JSON.parse(userJson)

        return user ?? null;
    }

    async function handleCreateAccountWithPhoneNumber(phone: string) {
        const { data } = await api.post('/register/phone', {
            phone,
            password: '',
            email: ''
        })
     
        localStorage.setItem('phone', JSON.stringify(phone))
        // Redirect to signup otp
        navigate('/signup/otp')
    }

    async function handleLoginWithOtp(phone: string, otp: string) {
        
        const { data } = await api.post('/login/phone', {
            phone,
            otp
        })
        

        const payload = data.userWithoutPassword

        setUser(payload)
        
        setUserLocalStorage(payload)
        localStorage.setItem('token', JSON.stringify(data.token));
        api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`
        setAuthenticated(true)

        // Redirect to profile page
        navigate('/user-profile')
    
    }

    async function handleLoginWithPassword(email: string, password: string) {
        const { data } = await api.post('/login', {
            email,
            password
        })

        const payload = data.userWithoutPassword

        setUser(payload)
        
        setUserLocalStorage(payload)
        localStorage.setItem('token', JSON.stringify(data.token));
        api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`
        setAuthenticated(true)
        console.log(setUser(data.userWithoutPassword), 'log')

        // Redirect to profile page
        navigate('/user-profile')
    
    }

    function handleLogout() {
        setAuthenticated(false)

        setUserLocalStorage(null)
        localStorage.removeItem('token');
        localStorage.removeItem('phone');
        api.defaults.headers.common["Authorization"] = undefined
        
        // Rediret to sign up page
        navigate('/signup')
        
    }

    if(loading) { 
        return <SkeletonLoading/>
    }

    return (
        <AuthContext.Provider value={{  user, authenticated, handleLoginWithPassword, handleCreateAccountWithPhoneNumber, handleLoginWithOtp, handleLogout, setLoading, loading }}>
            { children }
        </AuthContext.Provider>
    )
}