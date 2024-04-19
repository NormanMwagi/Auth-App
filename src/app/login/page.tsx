"use client";
import Link from "next/link";
import  React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function LoginPage(){
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })
    const onSignIn  = async () => {

    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Sign In</h1>
            <hr/>
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
            <button onClick={onSignIn} className="p-2 border border-gray-300 rounded-lg mt-3 mb-4 focus:outline-none focus: border-gray-600">
                Log In
            </button>
            <Link href="/signup">Register here</Link>
        </div>
        )
}
 