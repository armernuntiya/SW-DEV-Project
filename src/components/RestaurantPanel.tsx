import RestaurantCard from "./RestaurantCard"
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Link from "next/link";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from 'next-auth'
import getUserProfile from "@/libs/getUserProfile";

export default async function RestaurantPanel({restaurantJson}:{restaurantJson:Object}) {
    
    const restaurantJsonReady = await restaurantJson
    const session = await getServerSession(authOptions)
    
    
    async function checkAdmin(session:object){
        if (!session || !session.user.token) return false
        const profile = await getUserProfile(session.user.token)
        return profile.data.role=='admin'
    }
    

    return (
        <div className="inline-flex p-4 flex-col items-center gap-4 rounded-2xl bg-white">
            <div className="flex px-4 justify-between items-center self-stretch">
                <div className="flex flex-col items-start gap-1">
                    <h1 className="text-black font-sans not-serif text-3xl font-semibold tracking-wide">Recommend restaurants</h1>
                    <h4 className="w-129 text-black text-center font-sans text-base not-italic font-light leading-6">Book your table! Enjoy your food!</h4>
                </div>
                {
                    (await checkAdmin(session))?
                    <Link href='/booking'>
                        <Button variant="outlined" startIcon={<AddIcon /> } className="text-red-700 border-red-700 hover:bg-red-500/25 hover:border-red-800">Create</Button>
                        </Link>
                    : null
                }
            </div>
            <div className="flex w-[1110px] p-2 justify-center items-start content-start gap-y-6 gap-x-12 flex-wrap">
                {
                    restaurantJsonReady.data.map((restaurantItem:Object) => (
                        <Link href={`/${restaurantItem.id}`} className="w-1/5">
                        
                        <RestaurantCard name={restaurantItem.name} Province={restaurantItem.province} foodType={restaurantItem.foodtype} imgSrc={restaurantItem.picture}
                        />
                        
                        </Link>
                        )
                    )    
                }
            </div>
        </div>
    )
}