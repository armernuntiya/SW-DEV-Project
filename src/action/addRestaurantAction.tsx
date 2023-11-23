'use server'

import { dbConnect } from "@/db/dbConnect";
import Restaurant from "@/db/models/Restaurant";
import {  revalidateTag,revalidatePath } from "next/cache";
import {redirect} from 'next/navigation'

export async function addAestaurantaction(name:string,foodType:number,address:string,province:string,postalCode:string,tel:string,picture:string) {
    try{
        await dbConnect()
        const restaurant = await Restaurant.create({
                "name":name,
                "foodtype":foodType,
                "address":address,
                "province":province,
                "postalcode":postalCode,
                "tel":tel,
                "picture":picture
        })
    } catch(error) {
        console.log(error)
    }
    
    revalidateTag("restaurants")
    redirect("/")
}



