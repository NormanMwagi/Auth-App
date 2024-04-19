"use client";
import Link from "next/link";
import  React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
export default function LoginPage(){
    const router = useRouter();
    const[isLoading,setIsLoading] = useState(false);
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username:"",
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    useEffect(() =>{
        if(user.email.length> 0 && user.username.length > 0 && user.password.length >0){
            setButtonDisabled(false);
        }
        else{
            setButtonDisabled(true);
        }
    },[user]);

    const onSignUp  = async () => {
        try {
            setIsLoading(true);
            const response = await axios.post('/api/user/signup',user);
    
            toast.success("Signed up successfully",response.data);
            router.push("/login");
        } catch (error:any) {
            toast.error("An error occurred",error.message); 
            //console.error("Sign up error", error.response || error);
        }
        finally{
            setIsLoading(false);
        }
    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{isLoading? "Loading..." : "Sign up"}</h1>
            <hr/>
            <label htmlFor="username">Username</label>
            <input
             id="username"
             type="text"
            value ={user.username}
            onChange={(e) => {
                setUser({...user, username: e.target.value})
            }}
            placeholder="username"
            />
             <label htmlFor="email">Email</label>
            <input
             id="email"
             type="email"
            value ={user.email}
            onChange={(e) => {
                setUser({...user, email: e.target.value})
            }}
            placeholder="email"
            />
             <label htmlFor="password">Password</label>
            <input
             id="password"
             type="password"
            value ={user.password}
            onChange={(e) => {
                setUser({...user, password: e.target.value})
            }}
            placeholder="password"
            />
            <button onClick={onSignUp} className="p-2 border border-gray-300 rounded-lg mt-3 mb-4 focus:outline-none focus: border-gray-600">
                {buttonDisabled? "No signup": "Sign Up" }
            </button>
            <Link href="/login">Login here</Link>
        </div>
        )
}
 