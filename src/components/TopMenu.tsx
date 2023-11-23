import { getServerSession } from "next-auth";
import TopMenuItem from "./TopMenuItem";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function TopMenu(){
    
    const session = await getServerSession(authOptions) 

    return(
    <div className="w-full h-14 bg-red-700 flex flex-row 
                    justify-between items-center px-4 py-2
                    text-white font-medium text-xl fixed top-0 left-0 z-50 font-normal">
        <TopMenuItem title="Home" pageRef="/" style="text-base hover:bg-red-800 rounded-lg px-4 py-2 hover:shadow-inner-md"/>
        <div className="text-3xl font-pacifico">
            EatEase
        </div>
            {session?
                <div className="flex flex-row gap-x-4 
                justify-end items-center w-[230px]">
                    <TopMenuItem title="Reservation" pageRef="/reservation" style="text-base font-normal hover:bg-red-800 rounded-lg px-6 py-2 hover:shadow-inner-md"/>
                    <TopMenuItem title="Sign out"  pageRef="./api/auth/signout" style="text-base border-white font-normal hover:bg-red-800 rounded-lg px-3 py-2 hover:shadow-inner-md"/>
                </div>
                :
                <div className="flex flex-row gap-x-4 
                            justify-end items-center w-[230px]">
                    <TopMenuItem title="Sign up" pageRef="./signup" style="text-base font-normal hover:bg-red-800 rounded-lg px-4 py-2 hover:shadow-inner-md"/>
                    <TopMenuItem title="Sign-in" pageRef="./signin" style="border rounded-lg border-white px-5 py-2 text-base font-normal hover:bg-red-800"/>
                </div>
            }
            
    </div>
    )
}