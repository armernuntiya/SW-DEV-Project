import Image from 'next/image'
import getRestaurant from '@/libs/getRestaurant'
import getUserProfile from "@/libs/getUserProfile";
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import DeleteButton from '@/components/DeleteButton';

export default async function RestaurantDetailPage({params}:{params: {rid:string}}){
    
    const restaurantDetail = await getRestaurant(params.rid)
    const session = await getServerSession(authOptions)
    // console.log("render")

    async function checkAdmin(){
        console.log('admin')
        if (!session || !session.user || !session.user.token) return false
        const profile = await getUserProfile(session.user.token)
        return profile.data.role=='admin'
    }

    return(
        <div className="bg-gray-200 flex flex-col items-center py-20 min-h-screen">
            <div className="flex flex-col w-180 p-4 items-center gap-2 rounded-2xl bg-white shadow-md">
                <Image src={(restaurantDetail.data.picture)} alt='Restaurant Image' width={500} height={0} className='rounded h-76  object-fit'/>
                <div className='flex flex-col px-4 items-start gap-2 self-stretch'>
                    <h2 className='text-black font-sans text-2xl not-serif font-semibold '>{restaurantDetail.data.name}</h2>
                    <h2 className='text-red-700 font-sans text-base not-serif font-bold'>{restaurantDetail.data.foodtype}</h2>
                    <h3 className='text-gray-700 font-sans text-base not-serif font-normal'>{restaurantDetail.data.address}</h3>
                    <h3 className='text-gray-700 font-sans text-base not-serif font-normal'>Tel. {restaurantDetail.data.tel}</h3>
                </div>
                <div className='flex justify-center items-start gap-2'>
                    <a href={`/reservation/create?id=${params.rid}&name=${restaurantDetail.data.name}`}>
                    <button className="flex h-9 px-6 items-center bg-red-700 text-white rounded-full font-medium font-sans text-sm hover:bg-red-800 hover:shadow-md">BOOK NOW</button>
                    </a>
                    {
                        (await checkAdmin())?
                            <>
                                <Link href={`/restaurant/update?id=${params.rid}&name=${restaurantDetail.data.name}&foodtype=${restaurantDetail.data.foodtype}&address=${restaurantDetail.data.address}&province=${restaurantDetail.data.province}&postalcode=${restaurantDetail.data.postalcode}&tel=${restaurantDetail.data.tel}&picture=${restaurantDetail.data.picture}`}>
                                <button className="flex h-9 px-6 items-center border-red-700 text-red-700 rounded-md font-medium font-sans text-sm border-2 hover:shadow-md hover:bg-red-100">EDIT</button>
                                </Link>
                                <DeleteButton id={params.rid} token={session?.user.token}/>
                            </>
                        :null
                    }
                </div>
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    return [{rid:'6547ba1eef37aee7edf3f6fe'}]
}