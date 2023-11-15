import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ReservationCard({info,show}:{info:object,show:boolean}){
    return(
        <div className="bg-gray-50 rounded-xl h-32 flex flex-row gap-x-6 items-center" key={info.bid}>
        <Image src={info.restaurant.picture}
        width={180} height={0} className="h-full rounded-bl-lg rounded-tl-lg" alt="drive image"/>
        <div className="flex flex-col grow gap-y-2 ">
            <div className="text-xl font-semibold">{info.restaurant.name}</div>
            <div className="text-gray-500">{info.restaurant.address}</div>
            {show?
                <div className="text-gray-500">
                    Reserved at {info.createdAt}
                </div>:null
                }
        </div>
        <div className="px-4 font-light">
            {info.bookingDate}
        </div>
        <div className="px-11 font-light">
            {info.numOfGuests}
        </div>
        <div className="flex flex-col gap-y-3 mr-9">
        <Link href={'./reservation?edit=true'}>
                <Button variant="outlined" startIcon={<EditIcon />} className="text-red-700 border-red-700 w-full hover:bg-red-500/25 hover:border-red-800">Edit</Button>
            </Link>
            <Button variant="outlined" startIcon={<DeleteIcon /> } className="text-red-700 border-red-700 hover:bg-red-500/25 hover:border-red-800">Delete</Button>
        </div>
        </div>
        )
}