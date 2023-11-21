import deleteRestaurant from '@/libs/deleteRestaurant';
import {  revalidateTag,revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';

export default function DeleteButton({ id,token }: {id:string,token:string}){

    const deleteResto = async()=>{
        'use server'
        // console.log('delete')
        await deleteRestaurant(id,token)
        revalidateTag("deleteResto")
        revalidatePath('/')
        redirect('/')
    }
    return (
        <form action={deleteResto}>
        <button type="submit" className="flex h-9 px-6 items-center border-red-700 text-red-700 rounded-md font-medium font-sans text-sm border-2 hover:shadow-md hover:bg-red-100">DELETE</button>
        </form>
    )
}