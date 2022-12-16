import { useContext, useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'


export function PrivateRoutes() {
    const { authenticated } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(!authenticated) navigate('/signup')
    })

    return authenticated ? (
        <Outlet/>
    ) : (
        <Navigate to='/'/>
    )
}