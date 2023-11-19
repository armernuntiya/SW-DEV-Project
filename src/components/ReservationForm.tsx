'use client'

import { use, useState } from "react"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { InputLabel } from "@mui/material"
import createBooking from "@/libs/createBooking"
import updateBooking from "@/libs/updateBooking"

export default function ReservationForm({token,action}:{token:string,action:string}){
    
        const urlParams = useSearchParams()
        const id = urlParams.get('id')
        const name = urlParams.get('name')
        const guests = urlParams.get('guests')
        const date = urlParams.get('reservedDate')
        
        const rount = useRouter()

        const [formData, setFormData] = useState({
                bookingDate: date,
                numOfGuests: guests
        });
        

        const handleInputChange = (event) => {
                const { name, value } = event.target;
                setFormData({
                  ...formData,
                  [name]: value,
                });
        };

        const handleFormSubmit = async (event) => {
            switch(action){
            case 'add':{
                try {   
                await new Promise((resolve)=>{
                        const bookingResult = createBooking(formData.bookingDate, Number(formData.numOfGuests), id, token);
                        setTimeout(resolve,25)})
                rount.push('./')
                } catch (error) {
                 console.error('Error submitting form:', error);
                }
                break;
            }
            case 'update':{
                try{
                await new Promise((resolve)=>{
                        const bookingResult = updateBooking(formData.bookingDate, Number(formData.numOfGuests), id, token)
                        setTimeout(resolve,25)
                })
                rount.push('./')
                } catch (error) {
                 console.error('Error submitting form:', error);
                }
                break;
            }
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
                                        min={1} max={8}
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