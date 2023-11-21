import updateRestaurant from "@/libs/updateRestaurant";
import {  revalidateTag,revalidatePath } from "next/cache";
import {redirect} from 'next/navigation'

export default function UpdateButton({id,token,name,address,foodtype,province,postalcode,tel,picture}:{id:string,token:string,name:string,address:string,foodtype:string,province:string,postalcode:string,tel:string,picture:string}) {

    const updateResto = async() => {
        // 'use server'
        // console.log('update')
        await updateRestaurant(id,token,name,address,foodtype,province,postalcode,tel,picture)
        // revalidateTag('updateResto')
        revalidatePath('/')
        redirect('/')    
    }

    return (
        <form action={updateResto}>
            <button type="submit" className="flex h-9 px-6 items-center bg-red-700 text-white rounded-full 
                    font-normal font-sans text-sm tracking-widest
                    hover:bg-red-800 hover:shadow-md">UPDATE</button> 
        </form>
    )
}