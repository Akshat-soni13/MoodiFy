import axios from "axios"


const api = axios.create({
    baseURL:"http://localopst:3000",
    withCredentials:true
})
// with credentials truw matlab cookie acess karnahai help kart ahia 

export async function register({email,password,username})
{
    const response = await api.post("/api/auth/register",{
        email,password,username
    }
    )
    return response.data 
}
export async function login({email,password,username})
{
    const response = await api.post("/api/auth/login",{
        email,password,username
    }
    )
    return response.data 
} 
export async function getMe()
{
    const response = await api.get("/api/auth/get-me")
    return response.data 
}
export async function register({email,password,username})
{
    const response = await api.post("/api/auth/logout")
    
    return response.data 
}
