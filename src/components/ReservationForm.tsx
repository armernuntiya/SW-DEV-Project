'use client'

import { useState } from "react"
import getRestaurants from "@/libs/getRestaurants"
import { useSearchParams } from "next/navigation"
import { InputLabel } from "@mui/material"
import createBooking from "@/libs/createBooking"

export default function ReservationForm({token}:{token:string}){
    
        const urlParams = useSearchParams()
        const rid = urlParams.get('id')
        const name = urlParams.get('name')

        const [formData, setFormData] = useState({
                bookingDate: '',
                numOfGuests: 0,
        });
        

        const handleInputChange = (event) => {
                const { name, value } = event.target;
                setFormData({
                  ...formData,
                  [name]: value,
                });
        };

        const handleFormSubmit = async (event) => {
            console.log(formData,);    
            try {   
                        
                        const bookingResult = await createBooking(formData.bookingDate, Number(formData.numOfGuests), rid, token);
                        console.log('Booking result:', bookingResult);
                      } catch (error) {
                        console.error('Error submitting form:', error);
                      }
        };

    return(
        <form action={handleFormSubmit} className="flex flex-col gap-y-3 w-[450px]">
                                <div className="flex flex-col gap-y-3">
                                        <InputLabel className="text-lg text-gray-600">Date</InputLabel>
                                        <input type="date" className="px-3 bg-red-50 border rounded-full h-10 w-full text-[#737373] border-black/25" 
                                        required 
                                        id="bookingDate" name="bookingDate"
                                        value={formData.bookingDate}
                                        onChange={handleInputChange}
                                        />
                                </div>

                                <div className="flex flex-col gap-y-3">
                                        <InputLabel className="text-lg text-gray-600">Number of guests</InputLabel>
                                        <input type="number" className="px-3 bg-red-50 border rounded-full h-10 w-full text-[#737373] border-black/25" 
                                        required
                                        id="numOfGuests" name="numOfGuests"
                                        value={formData.numOfGuests}
                                        onChange={handleInputChange}
                                        />
                                </div>

                                <div className="flex flex-col items-center gap-2 self-stretch">
                                        <button type="submit" className="flex h-9 px-6 mt-5 items-center bg-red-700 text-white rounded-full 
                                        font-normal font-sans text-sm tracking-widest
                                        hover:bg-red-800 hover:shadow-md">CONFIRM</button>
                                </div>
                        </form>
    )
}