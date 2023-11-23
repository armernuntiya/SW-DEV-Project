"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteReservationAction } from "@/action/deleteReservationAction";


export default function ReservationCard({info,show,token}:{info:object,show:boolean,token:string}){
    
    const formatDate = (date:string)=>{
        const inputDate = new Date(date)
        const day = String(inputDate.getDate()).padStart(2, '0')
        const month = String(inputDate.getMonth() + 1).padStart(2, '0') // Month is zero-based
        const year = inputDate.getFullYear()
        const formattedDate = `${day}/${month}/${year}`
        return formattedDate
    }

    const delectItemBooking = async()=>{
        try {   
            const result = await deleteReservationAction(info._id,token)
        } catch (error) {
            console.error('Error submitting form:', error)
        }
        
    }

    return(
        <div className="bg-gray-50 rounded-xl h-32 flex flex-row gap-x-6 items-center hover:bg-neutral-200" key={info._id}>
        <Image src={info.restaurant.picture}
        width={180} height={0} className="h-full rounded-bl-lg rounded-tl-lg" alt="drive image"/>
        <div className="flex flex-col grow gap-y-2 ">
            <div className="text-xl font-semibold">{info.restaurant.name}</div>
            <div className="text-gray-500">{info.restaurant.address} {info.restaurant.province}</div>
            {show?
                <div className="text-gray-500">
                    Reserved at {formatDate(info.createdAt)} by {info.user.name}
                </div>:null
                }
        </div>
        <div className="px-4 font-light">
            {formatDate(info.bookingDate)}
        </div>
        <div className="px-11 font-light">
            {info.numOfGuests}
        </div>
        <div className="flex flex-col gap-y-3 mr-9">
        <Link href={`./reservation/update?id=${info._id}&guests=${info.numOfGuests}&name=${info.restaurant.name}`}>
                <Button variant="outlined" startIcon={<EditIcon />} className="text-red-700 border-red-700 w-full hover:bg-red-500/25 hover:border-red-800">Edit</Button>
            </Link>
            <Button variant="outlined" startIcon={<DeleteIcon /> } className="text-red-700 border-red-700 hover:bg-red-500/25 hover:border-red-800" onClick={delectItemBooking}>Delete</Button>
        </div>
        </div>
        )
}