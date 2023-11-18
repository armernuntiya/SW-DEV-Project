"use client"
import { TextField,InputLabel,Select,MenuItem,} from "@mui/material"
import { useState } from "react"
import Link from "next/link"

export default function BookingPage(){

    const [restaurant,setRestaurant] = useState("")
    return(
        <div className="bg-red-700 flex flex-row items-center justify-center h-screen w-screen">
        <div className="flex flex-col p-10 justify-center items-center gap-4 rounded-3xl bg-white shadow-md h-140 w-280">
            <div className="flex px-0 flex-col items-center gap-y-3 self-stretch ">
                <h3 className="text-red-700	 text-center font-sans text-4xl	not-italic	font-medium	leading-6	tracking-widest	">Reservation</h3>
                <h4 className="w-129 text-black text-center font-sans text-base not-italic font-light leading-6">Please fill the information below</h4>
            </div>
            <div className="flex flex-col gap-y-3">
                    <InputLabel className="text-lg text-gray-600">Date</InputLabel>
                    <TextField id="outlined-basic" placeholder="DD/MM/YYYY" variant="outlined" InputProps={{sx: {borderRadius:9999,width:399,fontSize:16, height:40,paddingBottom:2,textAlign:'center',paddingTop:2, background:'#FEF2F2', border:'1 solid #737373',padding:"0px 12px"}}} InputLabelProps={{}}  />
            </div>

            <div className="flex flex-col gap-y-3">
                    <InputLabel className="text-lg text-gray-600">Number of guests</InputLabel>
                    <TextField id="outlined-password-input" placeholder="Fill the number of guest" variant="outlined" InputProps={{sx: {borderRadius:9999,width:399,fontSize:16, height:40,paddingBottom:2,textAlign:'center',paddingTop:2, background:'#FEF2F2', border:'1 solid #737373',padding:"0px 12px"}}} InputLabelProps={{}} />
            </div>

            <div className="flex flex-col gap-y-3 w-full">
                    
                    <InputLabel className="text-lg text-gray-600">Location</InputLabel>
                    <Select name='restaurant' id='restaurant' value={restaurant}
                    onChange={(e)=>{setRestaurant(e.target.value)}}
                    className="bg-red-50 border rounded-full h-10 w-full text-[#737373] px-5 border-black/25  placeholder:text-gray-500">
                        <MenuItem value="SeeFah">SeeFah</MenuItem>
                        <MenuItem value="Hungry Nerd">Hungry Nerd</MenuItem> 
                    </Select>
            </div>

            

            <div className="flex flex-col items-center gap-2 self-stretch">
                    <button type="submit" className="flex h-9 px-6 items-center bg-red-700 text-white rounded-full 
                    font-normal font-sans text-sm tracking-widest
                    hover:bg-red-800 hover:shadow-md">CONFIRM</button>
                    
            </div>
                

    </div>
    </div>
    )
}
