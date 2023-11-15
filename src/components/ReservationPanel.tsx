import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export default function ReservationPanel(){
    
    const role = 'admin'
    // const mockdata = {
    //     {},
    //     {},
    //     {},
    //     {}
    // }

    return(
        <div className="mx-[154px] mt-[200px] text-black">

            <div className="flex justify-between">
                <div className="flex text-4xl items-end ">My Reservation <div className="text-xl">(1)</div></div>
                <Button variant="outlined" startIcon={<DeleteIcon /> } className="text-red-700 border-red-700">Delete</Button>
            </div>

            <div className="flex flex-col bg-white mt-7 p-5 
                            border rounded-xl gap-y-4">
                <div className="flex gap-x-6 text-lg">
                    <div className="w-3/4 pl-4">Restaurant</div>
                    <div className="w-1/4 text-center">Date</div>
                    <div className="w-1/4">Guest</div>
                </div>
                <hr className="w-full border-1 border-black"/>
                <div className="bg-gray-50 rounded-xl h-32 flex flex-row gap-x-6 items-center"
                    // key={}
                    >
                        <Image src='https://drive.google.com/uc?export=view&id=1R9k3jr8OAEHPSV2jMlSWSmvAOQRYFDeP'
                        width={180} height={0} className="h-full rounded-bl-lg rounded-tl-lg" alt="drive image"/>
                        <div className="flex flex-col grow gap-y-4 border">
                            <div className="text-xl">name</div>
                            <div className="text-gray-500">Address</div>
                            {role=='admin'?
                                <div className="text-gray-500">
                                    Reserved at
                                </div>:null
                                }
                        </div>
                        <div className="font-light">
                            DD/MM/YYYY
                        </div>
                        <div className="px-11 font-light">
                            1
                        </div>
                        <div className="flex flex-col gap-y-3 mr-9">
                        <Link href={'./reservation?edit=true'}>
                                <Button variant="outlined" startIcon={<EditIcon />} className="text-red-700 border-red-700 w-full">Edit</Button>
                            </Link>
                            <Button variant="outlined" startIcon={<DeleteIcon /> } className="text-red-700 border-red-700">Delete</Button>
                        </div>
                        {/* <div className="text-xl">{reservaitonItem.carModel}</div>
                        <div className="text-sm">Pick-up {reservaitonItem.pickupDate} from {reservaitonItem.pickupLocation}</div>
                        <div className="text-sm">Return {reservaitonItem.returnDate} to {reservaitonItem.returnLocation}</div>
                        <div className="text-sm">Duration: {reservaitonItem.numOfDays}</div>
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
                            onClick={()=>dispatch(removeReservation(reservaitonItem))}>
                            Remove this Car
                        </button> */}
                </div>
            </div>
        </div>
    )

}