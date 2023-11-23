"use client"

import { TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from 'next/navigation';
import {Fragment, useRef, useState} from "react";
import userRegister from "@/libs/userRegister";
import PopupError from "@/components/PopupError";

export default function SignUpPage(){

    const rounter = useRouter()

    const name = useRef("")
    const email = useRef("")
    const tel = useRef("")
    const pass = useRef("")

    const message = useRef("")
    const [showError, setShowError] = useState(false)


    function isValidEmail(email: string): boolean {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
    

    function isValidTel(tel: string): boolean {
        const telPattern = /^\(?\d{10}$/
        return telPattern.test(tel);
    }

    const submitSignup = async()=>{
        const inValidForm: string[]=[]

        if(!isValidEmail(email.current)){
            inValidForm.push("Your email is not in the correct format.")
        }  

        if(!isValidTel(tel.current)){
            inValidForm.push("Your telephone number must have 10 digit.")
        }  

        if(inValidForm.length){
            message.current = inValidForm.join('')
            setShowError(true)
        }
        else{
        await userRegister(name.current,email.current,tel.current,pass.current)
        rounter.push('/signin')}
    }

    return(
    <Fragment>

        <div className="bg-red-700 flex flex-col items-center py-20 h-screen">
        <div className="flex p-10 justify-center items-center gap-4 rounded-3xl bg-white shadow-md h-140 w-280">
        <Image src='/img/login.png' alt='login image' width={505} height={505} className="w-126 h-126"></Image>
        <div className="flex flex-col py-4 items-center g-12">
            <div className="flex py-3 px-0 flex-col items-center gap-3 self-stretch ">
                <h3 className="text-red-700	 text-center font-sans text-4xl	not-italic	font-medium	leading-6	tracking-widest	">Registration</h3>
                <h4 className="w-129 text-black text-center font-sans text-base not-italic font-light leading-6">Create your Account</h4>
            </div>
            <div className="flex flex-col py-4 items-center gap-12">
                <div className="flex flex-col items-center gap-5">
                    <TextField id="outlined-basic" placeholder="Name" variant="outlined" InputProps={{sx: {borderRadius:9999,width:399,fontSize:16, height:40,paddingBottom:2,textAlign:'center',paddingTop:2}}} InputLabelProps={{}} onChange={(e)=>(name.current=e.target.value)}/>
                    <TextField id="outlined-password-input" type='email' placeholder="Email" variant="outlined" InputProps={{sx: {borderRadius:9999,width:399,fontSize:16, height:40,paddingBottom:2,textAlign:'center',paddingTop:2}}} InputLabelProps={{}} onChange={(e)=>(email.current=e.target.value)}/>
                    <TextField id="outlined-password-input" type='password' placeholder="Password" variant="outlined" InputProps={{sx: {borderRadius:9999,width:399,fontSize:16, height:40,paddingBottom:2,textAlign:'center',paddingTop:2}}} InputLabelProps={{}} onChange={(e)=>(pass.current=e.target.value)}/>
                    <TextField id="outlined-password-input" placeholder="Phone Number" variant="outlined" InputProps={{sx: {borderRadius:9999,width:399,fontSize:16, height:40,paddingBottom:2,textAlign:'center',paddingTop:2}}} InputLabelProps={{}} onChange={(e)=>(tel.current=e.target.value)}/>
                </div>
                <div className="flex flex-col items-center gap-2 self-stretch">
                    <button type="submit" className="flex h-9 px-6 items-center bg-red-700 text-white rounded-full font-normal font-sans text-sm hover:bg-red-800 hover:shadow-md" onClick={submitSignup}>SIGN UP</button>
                    <div className="flex flex-row items-center gap-1">
                        <h4 className="w-129 text-gray-700 text-center font-sans text-sm not-italic font-light leading-6">Already have an account?</h4>
                        <Link href='/signin' className="w-129 text-red-700 text-center font-sans text-sm not-italic font-light leading-6">Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <PopupError isVisible={showError} onClose={()=>setShowError(false)} header="Invalid input" body={message.current} />
    </Fragment>
    )
}