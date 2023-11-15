import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export default function ReservationPanel(){
    
    const role = 'admin'
    const mockRestaurantReservation = [
        {
            bid:'001',
            bookingDate:'05/11/2565',
            numOfGuests:5,
            user: "Salmon",
            restaurant: {rid:"002",    
            name:"Bankoku Buffet",
            foodtype:"อาหารญี่ปุ่น",
            address:"69 ซ.รุ่งเรือง ถ.สุทธิสารวินิจฉัย แขวงสามเสนนอก เขตห้วยขวาง กรุงเทพฯ",
            province:"กรุงเทพฯ",
            postalcode:"10310",
            tel:"0854055551",
            picture:"https://drive.google.com/uc?export=view&id=1pVyJ4U6eO_V6lPM0tx3Sov7xL4Fc8M5z"},
            createdAt : '04/11/2565'
        },
        {
            bid:'002',
            bookingDate:'05/11/2565',
            numOfGuests:5,
            user:   "Salmon",
            restaurant: {rid:"002",    
            name:"Bankoku Buffet",
            foodtype:"อาหารญี่ปุ่น",
            address:"69 ซ.รุ่งเรือง ถ.สุทธิสารวินิจฉัย แขวงสามเสนนอก เขตห้วยขวาง กรุงเทพฯ",
            province:"กรุงเทพฯ",
            postalcode:"10310",
            tel:"0854055551",
            picture:"https://drive.google.com/uc?export=view&id=1pVyJ4U6eO_V6lPM0tx3Sov7xL4Fc8M5z"},
            createdAt : '05/11/2565'
    }
    ]

    return(
        <div className="mx-[154px] mt-[200px] text-black">

            <div className="flex text-4xl items-end justify-between">
                <div>My Reservation <div className="text-xl">({mockRestaurantReservation.length})</div></div>
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
                {mockRestaurantReservation.map((item)=>(
                <div className="bg-gray-50 rounded-xl h-32 flex flex-row gap-x-6 items-center" key={item.bid}>
                        <Image src={item.restaurant.picture}
                        width={180} height={0} className="h-full rounded-bl-lg rounded-tl-lg" alt="drive image"/>
                        <div className="flex flex-col grow gap-y-4">
                            <div className="text-xl">{item.restaurant.name}</div>
                            <div className="text-gray-500">{item.restaurant.address}</div>
                            {role=='admin'?
                                <div className="text-gray-500">
                                    Reserved at {item.createdAt}
                                </div>:null
                                }
                        </div>
                        <div className="px-4 font-light">
                            {item.bookingDate}
                        </div>
                        <div className="px-11 font-light">
                            {item.numOfGuests}
                        </div>
                        <div className="flex flex-col gap-y-3 mr-9">
                        <Link href={'./reservation?edit=true'}>
                                <Button variant="outlined" startIcon={<EditIcon />} className="text-red-700 border-red-700 w-full">Edit</Button>
                            </Link>
                            <Button variant="outlined" startIcon={<DeleteIcon /> } className="text-red-700 border-red-700">Delete</Button>
                        </div>
                </div>
                ))}
            </div>
        </div>
    )

}