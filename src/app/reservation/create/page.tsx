import { TextField,InputLabel,Select,MenuItem,} from "@mui/material"
import { useSearchParams } from "next/navigation";
import Link from "next/link"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from 'next-auth'
import getUserProfile from "@/libs/getUserProfile";
import { dbConnect } from "@/db/dbConnect";
import Booking from "@/db/models/Booking";
import {  revalidateTag } from "next/cache";


export default function BookingPage(){

        const addReservation = (addReservationForm:FormData) => {
                const bookingDate = addReservationForm.get("bookingDate")
                const numOfGuests = addReservationForm.get("numOfGuests")
                const session = await getServerSession(authOptions)
                if (!session || !session.user.token) return
                const profile = await getUserProfile(session.user.token)

        }

        return(
                <div className="bg-red-700 flex flex-row items-center justify-center h-screen w-screen">
                <div className="flex flex-col p-10 justify-center items-center gap-4 rounded-3xl bg-white shadow-md h-140 w-280">
                        <div className="flex px-0 flex-col items-center gap-y-3 self-stretch ">
                                <h3 className="text-red-700	 text-center font-sans text-4xl	not-italic	font-medium	leading-6	tracking-widest	">Reservation</h3>
                                <h4 className="w-129 text-black text-center font-sans text-base not-italic font-light leading-6">Please fill the information below</h4>
                        </div>
                        
                        

                
                        

        </div>
        </div>
    )
}
