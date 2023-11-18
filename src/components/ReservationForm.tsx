import { TextField,InputLabel,Select,MenuItem,} from "@mui/material"
import { useState } from "react"
import Link from "next/link"
import { DatePicker,LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import getRestaurants from "@/libs/getRestaurants"
import { Dayjs } from 'dayjs'
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';

export default async function ReservationForm({addReservation}:{addReservation:Function}){
    
    const restaurantsJson = await getRestaurants()
    
    console.log(restaurantsJson)

    return(
        <form action={addReservation} className="flex flex-col gap-y-3 w-[450px]">
                                <div className="flex flex-col gap-y-3">
                                        <InputLabel className="text-lg text-gray-600">Date</InputLabel>
                                        <input type="date" className="px-3 bg-red-50 border rounded-full h-10 w-full text-[#737373] border-black/25" required id="bookingDate" name="bookingDate"/>
                                </div>

                                <div className="flex flex-col gap-y-3">
                                        <InputLabel className="text-lg text-gray-600">Number of guests</InputLabel>
                                        <input type="number" className="px-3 bg-red-50 border rounded-full h-10 w-full text-[#737373] border-black/25" required id="numOfGuests" name="numOfGuests"/>
                                </div>

                                <div className="flex flex-col items-center gap-2 self-stretch">
                                        <button type="submit" className="flex h-9 px-6 mt-5 items-center bg-red-700 text-white rounded-full 
                                        font-normal font-sans text-sm tracking-widest
                                        hover:bg-red-800 hover:shadow-md">CONFIRM</button>
                                </div>
                        </form>
    )
}