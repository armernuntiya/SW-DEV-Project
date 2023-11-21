import Link from "@mui/material/Link"

export default function PopupErrorBooking({isVisible, onClose}:{isVisible:Boolean,onClose:Function}){
    if (!isVisible) return null
    return(
        <div className='fixed inset-0 bg-black 
        bg-opacity-50 flex 
        justify-center items-center '>
            <div className="w-[512px]">
                <div className="bg-white p-6 rounded-lg flex flex-col gap-y-4">
                    <div className="font-semibold  text-2xl text-slate-800">Number of your reservations exceed 3 :(</div>
                    <div className="text-slate-400">Number of your reservations cannot exceed 3. To make new reservation, please delete an old one.</div>
                    <div className="flex flex-row gap-x-2 justify-end">
                        <Link href="/reservation">
                        <button className="flex h-9 px-6 items-center border-red-700 text-red-700 rounded-md 
                        font-medium font-sans text-sm border-2 
                        hover:shadow-md hover:bg-red-100 ">SEE RESERVATION</button>
                        </Link>
                        <button type="submit" className="flex h-9 px-6 items-center bg-red-700 text-white rounded-full 
                        font-normal font-sans text-sm tracking-widest
                        hover:bg-red-800 hover:shadow-md" onClick={()=>onClose()}>CLOSE</button>  
                    </div>
                </div>
            </div>
        </div>
    )
}