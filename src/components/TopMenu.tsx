import { getServerSession } from "next-auth";
import TopMenuItem from "./TopMenuItem";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function TopMenu(){
    
    const session = await getServerSession(authOptions) 

    return(
    <div className="w-full h-14 bg-red-700 flex flex-row 
                    justify-between items-center px-6 py-2
                    text-white font-medium text-xl fixed top-0 left-0 z-50">
        <TopMenuItem title="Home" pageRef="." style="text-base"/>
        <div className="text-3xl font-pacifico">
            EatEase
        </div>
            {session?
                <div className="flex flex-row gap-x-4 
                justify-end items-center w-[230px]">
                    <TopMenuItem title="Reservation" pageRef="/reservation" style="text-base"/>
                    <TopMenuItem title="Sign out"  pageRef="./api/auth/signout" style="text-base"/>
                    {session.user?.name}
                </div>
                :
                <div className="flex flex-row gap-x-4 
                            justify-end items-center w-[230px]">
                    <TopMenuItem title="Sign up" pageRef="./signup" style="text-base"/>
                    <TopMenuItem title="Sign-in" pageRef="./signin" style="border rounded-lg border-white px-6 py-2 text-base"/>
                </div>
            }
            
    </div>
    )
}