'use server'
import updateBooking from "@/libs/updateBooking";
import {  revalidateTag,revalidatePath } from "next/cache";
import {redirect} from 'next/navigation'

export async function updateReservationAction(bookingDate:string,numOfGuests:number,id:string,token:string) {
    await updateBooking(bookingDate,numOfGuests,id,token)
    revalidatePath('/reservation')
    revalidateTag('updatereservation')
    redirect('/reservation') 
}

