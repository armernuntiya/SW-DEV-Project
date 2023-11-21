'use server'
import deleteBooking from "@/libs/deleteBooking";
import {  revalidateTag,revalidatePath } from "next/cache";
import {redirect} from 'next/navigation'

export async function deleteReservationAction(id:string,token:string) {
    await deleteBooking(id,token)
    revalidatePath('/reservation')
    revalidateTag('deletereservation')
    redirect('/reservation') 
}

