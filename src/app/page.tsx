import Banner from '@/components/Banner'
import RestaurantPanel from '@/components/RestaurantPanel'
import getRestaurants from '@/libs/getRestaurants'

export default async function Home() {
  const restaurants = await getRestaurants()   
  return (
    <main className='bg-gray-200 flex flex-col gap-y-10 items-center pb-10'>
      <Banner/>
      <RestaurantPanel restaurantJson={restaurants}/>
    </main>
  )
}
