import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from 'next-auth'
import ReservationForm from "@/components/ReservationForm";

export default async function BookingPage(){
        
        const session = await getServerSession(authOptions)

        if(!session||!session.user.token) return
        const token = session.user.token

        return(
        <div className="bg-red-700 flex flex-row items-center justify-center h-screen w-screen">
                
                        <ReservationForm token={token} action="add"/>  
            
        </div>
    )
}
