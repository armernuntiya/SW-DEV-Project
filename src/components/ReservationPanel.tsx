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


    if(profile.data.role=='admin'){
        Booking.data.map((data:object)=>{
            if(profile.data._id==data.user._id) myBooking.push(data)
            else otherBooking.push(data)
        })
    }else{
        Booking.data.map((data:object)=>{myBooking.push(data)})
    }
    
    return(
        <div className="flex flex-row justify-center pt-[100px] text-black min-h-screen">
            <div className="w-[1100px]">
                <div className="flex text-3xl items-end font-medium tracking-wide">My Reservation <div className="text-xl ml-2 text-gray-500"> ({myBooking.length})</div></div>

            <div className="flex flex-col bg-white mt-7 p-5 
                            border rounded-xl gap-y-4 w-[1100px] shadow-md">
                <div className="flex gap-x-6 text-lg font-semibold">
                    <div className="w-2/4 pl-4 text-gray-500 font-normal tracking-wide">Restaurant</div>
                    <div className="w-1/4 pl-[170px] text-gray-500 font-normal tracking-wide">Date</div>
                    <div className="w-1/4 pl-[5px] text-gray-500 font-normal tracking-wide">Guest</div>
                </div>
                <hr className="w-full border-1 border-gray-500"/>
                {myBooking.map((item:object)=>(
                    <ReservationCard key={item._id} info={item} show={false} token={session.user.token}/>
                ))}
            </div>
            {profile.data.role=='admin'?
            <div className="my-32">
                <div className="flex text-3xl items-end font-medium tracking-wide">All Reservations <div className="text-xl ml-2 text-gray-500"> ({otherBooking.length})</div></div>

                <div className="flex flex-col bg-white mt-7 p-5 
                                border rounded-xl gap-y-4 shadow-md">
                    <div className="flex gap-x-6 text-lg font-semibold">
                        <div className="w-2/4 pl-4 font-normal tracking-wide text-gray-500">Restaurant</div>
                        <div className="w-1/4 pl-[170px] font-normal tracking-wide text-gray-500">Date</div>
                        <div className="w-1/4 pl-[5px] font-normal tracking-wide text-gray-500">Guest</div>
                    </div>
                    <hr className="w-full border-1 border-gray-500"/>
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