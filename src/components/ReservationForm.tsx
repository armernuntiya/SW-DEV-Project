'use client'

import { use, useState } from "react"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { InputLabel } from "@mui/material"
import { Fragment } from "react";
import PopupErrorBooking from "@/components/PopupErrorBooking";
import { addReservationAction } from "@/action/addReservationAction"
import { updateReservationAction } from "@/action/updateReservationAction"
import updateBooking from "@/libs/updateBooking"

export default function ReservationForm({token,action}:{token:string,action:string}){
    
        const urlParams = useSearchParams()
        const id = urlParams.get('id')
        const name = urlParams.get('name')
        const guests = urlParams.get('guests')
        const date = urlParams.get('reservedDate')
        
        const today = new Date().toISOString().split('T')[0]

        const [formData, setFormData] = useState({
                bookingDate: !date?today:date.split('T')[0],
                numOfGuests: !guests?'1':guests
        });
        
        const [showError, setShowError] = useState(false)
        

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
                const bookingResult = await addReservationAction(formData.bookingDate, Number(formData.numOfGuests), id, token);
                } catch (error) {
                setShowError(true)
                console.error('Error submitting form:', error);
                }
                
                break;
            }
            case 'update':{
                try{
                const updateBookingResult = await updateReservationAction(formData.bookingDate, Number(formData.numOfGuests), id, token)
                } catch (error) {
                 console.error('Error submitting form:', error);
                }
                break;
            }
        }
        };

    return(
    <Fragment>
        <div className="p-7 gap-4 rounded-3xl bg-white  h-140 w-280">
        <div className="flex px-0 flex-col items-center gap-y-3 self-stretch ">
                <h3 className="text-red-700	 text-center font-sans text-4xl	not-italic	font-medium	leading-6	tracking-widest	">Reservation</h3>
                <h4 className="w-129 text-black text-center font-sans text-base not-italic font-light leading-6 pb-2 text-gray-500">{name}</h4>
                                
        </div>
        <hr className="border-black p-2"/>
        <form action={handleFormSubmit} className="flex flex-col gap-y-3 w-[450px]">
                                
                                <div className="flex flex-col gap-y-3">
                                        <InputLabel className="text-lg text-gray-600">Date</InputLabel>
                                        <input type="date" className="px-3 bg-red-50 border rounded-full h-10 w-full text-[#737373] border-black/25" 
                                        required 
                                        id="bookingDate" name="bookingDate"
                                        value={formData.bookingDate}
                                        min={today}
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
        </div>
        <PopupErrorBooking isVisible={showError} onClose={()=>setShowError(false)}/>
        </Fragment>
    )
}