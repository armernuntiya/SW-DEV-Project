import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import RestaurantForm from "@/components/RestaurantForm";

export default async function RestaurantUpdatePage(){

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return false

    return(
        <>
        <RestaurantForm token={session.user.token}/>
        </>
    )
}
