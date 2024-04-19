import  connect  from "@/dbConfig/dbConfig.ts";
import User from "@/models/userModel.js"
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {email,username,password} = reqBody;
        //check if user exists
        const user = await User.findOne({email});
        if(user){
            return NextResponse.json({error: "User exists"}, {status:400})
        }
        //hash password
        const salt = await bcryptjs.genSalt(10);
        const passwordHashed = await bcryptjs.hash(password,salt);
        
        const newUser = new User({
            username,
            email,
            password: passwordHashed
        })

        const savedUser = await newUser.save();

        return NextResponse.json({
            message: " User created successfully",
            success: true,
            savedUser
        })


    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({error: error.message}),
            {status: 500});
    }
    
}