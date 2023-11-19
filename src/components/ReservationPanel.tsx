import ReservationCard from "./ReservationCard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import getBookings from "@/libs/getBookings";

export default async function ReservationPanel(){
    
    const session = await getServerSession(authOptions)
    
    if (!session || !session.user.token) return <div className="flex flex-col font-red-800 
                                                                text-2xl justify-around">NO LOGIN</div>

    const profile = await getUserProfile(session.user.token)
        
    const Booking = await getBookings(session.user.token)

    const myBooking = Array()
    const otherBooking = Array()


    Booking.data.map((data:object)=>{
        if(profile.data._id==data.user._id) myBooking.push(data)
        else otherBooking.push(data)
    })
    

    return(
        <div className="flex flex-row justify-center pt-[200px] text-black min-h-screen">
            <div className="w-[1100px]">
                <div className="flex text-4xl items-end font-semibold">My Reservation <div className="text-xl ml-2"> ({myBooking.length})</div></div>

            <div className="flex flex-col bg-white mt-7 p-5 
                            border rounded-xl gap-y-4 w-[1100px] shadow-md">
                <div className="flex gap-x-6 text-lg font-semibold">
                    <div className="w-2/4 pl-4">Restaurant</div>
                    <div className="w-1/4 pl-[170px]">Date</div>
                    <div className="w-1/4 pl-[5px]">Guest</div>
                </div>
                <hr className="w-full border-1 border-black"/>
                {myBooking.map((item:object)=>(
                    <ReservationCard key={item._id} info={item} show={false} token={session.user.token}/>
                ))}
            </div>
            {profile.data.role=='admin'?
            <div className="my-32">
                <div className="flex text-4xl items-end font-semibold">Reservations <div className="text-xl ml-2"> ({otherBooking.length})</div></div>

                <div className="flex flex-col bg-white mt-7 p-5 
                                border rounded-xl gap-y-4 shadow-md">
                    <div className="flex gap-x-6 text-lg font-semibold">
                        <div className="w-2/4 pl-4">Restaurant</div>
                        <div className="w-1/4 pl-[170px]">Date</div>
                        <div className="w-1/4 pl-[5px]">Guest</div>
                    </div>
                    <hr className="w-full border-1 border-black"/>
                    {otherBooking.map((item)=>(
                        <ReservationCard key={item._id} info={item} show={true} token={session.user.token}/>
                    ))}
                </div>
            </div>
            :null}
            </div>
        </div>
    )

}