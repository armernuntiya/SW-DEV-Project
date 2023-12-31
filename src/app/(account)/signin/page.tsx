"use client"

import { TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRef } from "react";

export default function SignInPage(){

    const email = useRef("")
    const pass = useRef("")

    const onSubmit= async()=>{
        const result = await signIn("credentials",{
            email:email.current,
            password:pass.current,
            redirect:true,
            callbackUrl:'/'
        })

    }

    return(
    <div className="bg-red-700 flex flex-col items-center py-20 h-screen">
        <div className="flex p-10 justify-center items-center gap-4 rounded-3xl bg-white shadow-md h-140 w-280">
        <Image src='/img/login.png' alt='login image' width={505} height={505} className="w-126 h-126"/>
        <div className="flex flex-col py-4 items-center g-12">
            <div className="flex py-3 px-0 flex-col items-center gap-3 self-stretch ">
                <h3 className="text-red-700	 text-center font-sans text-4xl	not-italic font-medium leading-6 tracking-widest">Welcome!</h3>
                <h4 className="w-129 text-black text-center font-sans text-base not-italic font-light leading-6">Sign in to your Account</h4>
            </div>
            <div className="flex flex-col py-4 items-center gap-12">
                <div className="flex flex-col items-center gap-5">
                    <TextField id="outlined-basic" type='email' placeholder="Email" variant="outlined" InputProps={{sx: {borderRadius:9999,width:399,fontSize:16, height:40,paddingBottom:2,textAlign:'center',paddingTop:2}}} InputLabelProps={{}} onChange={(e)=>{email.current = e.target.value}}/>
                    <TextField id="outlined-password-input" placeholder="Password" type='password' variant="outlined" InputProps={{sx: {borderRadius:9999,width:399,fontSize:16, height:40,paddingBottom:2,textAlign:'center',paddingTop:2}}} InputLabelProps={{}} onChange={(e)=>{pass.current = e.target.value}}/>
                </div>
                <div className="flex flex-col items-center gap-2 self-stretch">
                    <button type="submit" className="flex h-9 px-6 items-center bg-red-700 text-white rounded-full font-normal font-sans text-sm hover:bg-red-800 hover:shadow-md" onClick={onSubmit}>SIGN IN</button>
                    <div className="flex flex-row items-center gap-1">
                        <h4 className="w-129 text-gray-700 text-center font-sans text-sm not-italic font-light leading-6">Don't have an account?</h4>
                        <Link href='./signup' className="w-129 text-red-700 text-center font-sans text-sm not-italic font-light leading-6">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
    )
}