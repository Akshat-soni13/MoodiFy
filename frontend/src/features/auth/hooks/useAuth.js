import {login, register , getMe , logout} from "../services/auth.api"
import { useContext, useEffect } from "react"
import { AuthContext } from "../auth.context"

export const useAuth =()=>{

    const context = useContext(AuthContext)
    const {user,setUser , loading , setLoading }= context

    async function HandleRegister(username,email,password) {
        setLoading(true)
        const data = await register({username,email,password})
        setUser(data.user)
        setLoading(false)
    }

    async function  HandleLogin ({ email , password}) {
        setLoading(true)
        const data = await login({email,password})
        setUser(data.user)
        setLoading(false)
    }

    async function  HandleGetMe() {
        setLoading(true)
        const data = await getMe()
        setUser(data.user)  
        setLoading(false) 
    }

    async function HandleLogout()
    {
        setLoading(true)
        const data = await logout()
        setUser(null)
        setLoading(false)
    }


    useEffect(()=>{
        HandleGetMe()
    },[])



    return {
        user,
        setUser,
        loading,
        setLoading,
        HandleRegister,
        HandleLogin,
        HandleGetMe,
        HandleLogout
    }

}