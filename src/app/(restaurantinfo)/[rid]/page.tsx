import Image from 'next/image'
import getRestaurant from '@/libs/getRestaurant'

export default async function RestaurantDetailPage({params}:{params: {rid:string}}){
    
    const restaurantDetail = await getRestaurant(params.rid)
    
    // const mockRestaurantRepo = new Map()
    //     mockRestaurantRepo.set('123',{name:"Bankoku Buffet",
    //     foodtype:"อาหารญี่ปุ่น",
    //     address:"69 ซ.รุ่งเรือง ถ.สุทธิสารวินิจฉัย แขวงสามเสนนอก เขตห้วยขวาง กรุงเทพฯ",
    //     province:"กรุงเทพฯ",
    //     postalcode:"10310",
    //     tel:"0854055551",
    //     picture:"https://drive.google.com/uc?export=view&id=1pVyJ4U6eO_V6lPM0tx3Sov7xL4Fc8M5z"})
    
    return(
        <div className="bg-gray-200 flex flex-col items-center py-20 h-screen">
            <div className="flex flex-col w-180 p-4 items-center gap-2 rounded-2xl bg-white shadow-md">
                <Image src={(restaurantDetail.data.picture)} alt='Restaurant Image' width={500} height={0} className='rounded h-76  object-fit'/>
                <div className='flex flex-col px-4 items-start gap-2 self-stretch'>
                    <h2 className='text-black font-sans text-2xl not-serif font-semibold '>{restaurantDetail.data.name}</h2>
                    <h2 className='text-red-700 font-sans text-base not-serif font-bold'>{restaurantDetail.data.foodtype}</h2>
                    <h3 className='text-gray-700 font-sans text-base not-serif font-normal'>{restaurantDetail.data.address}</h3>
                    <h3 className='text-gray-700 font-sans text-base not-serif font-normal'>Tel. {restaurantDetail.data.tel}</h3>
                </div>
                <div className='flex justify-center items-start gap-2'>
                <button className="flex h-9 px-6 items-center bg-red-700 text-white rounded-full font-medium font-sans text-sm hover:bg-red-800 hover:shadow-md">BOOK NOW</button>
                <button className="flex h-9 px-6 items-center border-red-700 text-red-700 rounded-md font-medium font-sans text-sm border-2 hover:shadow-md hover:bg-red-100">EDIT</button>
                <button className="flex h-9 px-6 items-center border-red-700 text-red-700 rounded-md font-medium font-sans text-sm border-2 hover:shadow-md hover:bg-red-100">DELETE</button>
                    
                    
                </div>
            </div>
        </div>
        
    )
}

export async function generateStaticParams() {
    return [{rid:'6547ba1eef37aee7edf3f6fe'}]
}