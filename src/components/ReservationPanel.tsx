import { Button } from "@mui/material";
import ReservationCard from "./ReservationCard";
import AddIcon from '@mui/icons-material/Add';
import { getServerSession } from "next-auth";
import { AuthOptions } from "next-auth";
import getBooking from "@/libs/getBooking";

export default async function ReservationPanel(){
    
    const session = await getServerSession(AuthOptions)
    const bookingJson = await getBooking()

    // const role = 'admin'
    // const mockRestaurantReservation = [
    //     {
    //         bid:'001',
    //         bookingDate:'05/11/2565',
    //         numOfGuests:5,
    //         user: "Salmon",
    //         restaurant: {rid:"002",    
    //         name:"Bankoku Buffet",
    //         foodtype:"อาหารญี่ปุ่น",
    //         address:"69 ซ.รุ่งเรือง ถ.สุทธิสารวินิจฉัย แขวงสามเสนนอก เขตห้วยขวาง กรุงเทพฯ",
    //         province:"กรุงเทพฯ",
    //         postalcode:"10310",
    //         tel:"0854055551",
    //         picture:"https://drive.google.com/uc?export=view&id=1pVyJ4U6eO_V6lPM0tx3Sov7xL4Fc8M5z"},
    //         createdAt : '04/11/2565'
    //     },
    //     {
    //         bid:'002',
    //         bookingDate:'05/11/2565',
    //         numOfGuests:5,
    //         user:   "Salmon",
    //         restaurant: {rid:"002",    
    //         name:"Bankoku Buffet",
    //         foodtype:"อาหารญี่ปุ่น",
    //         address:"69 ซ.รุ่งเรือง ถ.สุทธิสารวินิจฉัย แขวงสามเสนนอก เขตห้วยขวาง กรุงเทพฯ",
    //         province:"กรุงเทพฯ",
    //         postalcode:"10310",
    //         tel:"0854055551",
    //         picture:"https://drive.google.com/uc?export=view&id=1pVyJ4U6eO_V6lPM0tx3Sov7xL4Fc8M5z"},
    //         createdAt : '05/11/2565'
    // }
    // ]

    return(
        <div className="flex flex-row justify-center pt-[200px] text-black">
            <div className="w-[1100px]">
            <div className="flex text-4xl items-end justify-between">
                <div className="flex text-4xl items-end font-semibold">My Reservation <div className="text-xl ml-2"> ({mockRestaurantReservation.length})</div></div>
                <a href="/reservation/create">
                    <Button variant="outlined" startIcon={<AddIcon /> } className="text-red-700 border-red-700 hover:bg-red-500/25 hover:border-red-800">Create</Button>
                </a>
            </div>

            <div className="flex flex-col bg-white mt-7 p-5 
                            border rounded-xl gap-y-4 w-[1100px] shadow-md">
                <div className="flex gap-x-6 text-lg font-semibold">
                    <div className="w-2/4 pl-4">Restaurant</div>
                    <div className="w-1/4 pl-[170px]">Date</div>
                    <div className="w-1/4 pl-[5px]">Guest</div>
                </div>
                <hr className="w-full border-1 border-black"/>
                {mockRestaurantReservation.map((item)=>(
                    <ReservationCard info={item} show={false}/>
                ))}
            </div>
            {role=='admin'?
            <div className="my-32">
                <div className="flex text-4xl items-end font-semibold">Reservations <div className="text-xl ml-2"> ({mockRestaurantReservation.length})</div></div>

                <div className="flex flex-col bg-white mt-7 p-5 
                                border rounded-xl gap-y-4 shadow-md">
                    <div className="flex gap-x-6 text-lg font-semibold">
                        <div className="w-2/4 pl-4">Restaurant</div>
                        <div className="w-1/4 pl-[170px]">Date</div>
                        <div className="w-1/4 pl-[5px]">Guest</div>
                    </div>
                    <hr className="w-full border-1 border-black"/>
                    {mockRestaurantReservation.map((item)=>(
                        <ReservationCard info={item} show={true}/>
                    ))}
                </div>
            </div>
            :null}
            </div>
        </div>
    )

}