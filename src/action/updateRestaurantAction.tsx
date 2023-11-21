'use server'
import updateRestaurant from "@/libs/updateRestaurant";
import {  revalidateTag,revalidatePath } from "next/cache";
import {redirect} from 'next/navigation'

export async function upDateAction(id:string,token:string,name:string,address:string,foodtype:string,province:string,postalcode:string,tel:string,picture:string) {
    await updateRestaurant(id,token,name,address,foodtype,province,postalcode,tel,picture)
    revalidatePath(`/${id}`)
    revalidatePath('/')
    revalidateTag('updateResto')
    redirect('/') 
}

