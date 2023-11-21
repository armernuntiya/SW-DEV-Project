'use server'
import createBooking from "@/libs/createBooking";
import {  revalidateTag,revalidatePath } from "next/cache";
import {redirect} from 'next/navigation'

export async function addReservationAction(bookingDate:string,numOfGuests:number,rid:string,token:string) {
    await createBooking(bookingDate, numOfGuests, rid, token)
    revalidatePath('/reservation')
    revalidateTag('addreservation')
    redirect('/reservation') 
}

