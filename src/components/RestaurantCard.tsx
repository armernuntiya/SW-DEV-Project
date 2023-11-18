import Image from "next/image"
import InteractiveCard from "./InteractiveCard"
export default function RestaurantCard({name,foodType,Province,imgSrc}:{name:string,foodType:string,Province:string,imgSrc:string}){
    // https://drive.google.com/uc?export=view&id=1pVyJ4U6eO_V6lPM0tx3Sov7xL4Fc8M5z
    return (
        <InteractiveCard>
            <div className="flex flex-col p-2 items-start gap-2 absolute left-3 top-2 bg-gray-700/60 rounded-lg text-white shadow-md z-10">{Province}</div>
            <div className="w-full h-52 relative rounded-t-2xl">
                <Image src={imgSrc} alt='Restaurant Image' fill={true}  className="object-cover rounded-t-2xl"></Image>
            </div>
            <div className="flex px-4 flex-col items-start gap-1 self-stretch">
                <h2 className="text-black font-sans text-xl not-serif font-semibold">{name}</h2>
                <h3 className="text-gray-700 font-sans text-base font-medium">{foodType}</h3>
            </div>
        </InteractiveCard>
    )
}