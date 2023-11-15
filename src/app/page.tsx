import Banner from '@/components/Banner'
import RestaurantCard from '@/components/RestaurantCard'
import RestaurantPanel from '@/components/RestaurantPanel'


export default function Home() {
  const mockRestaurantRepo = new Map()
        mockRestaurantRepo.set('6547ba1eef37aee7edf3f6fe',{name:"Bankoku Buffet",
        foodtype:"อาหารญี่ปุ่น",
        address:"69 ซ.รุ่งเรือง ถ.สุทธิสารวินิจฉัย แขวงสามเสนนอก เขตห้วยขวาง กรุงเทพฯ",
        province:"กรุงเทพฯ",
        postalcode:"10310",
        tel:"0854055551",
        picture:"https://drive.google.com/uc?export=view&id=1pVyJ4U6eO_V6lPM0tx3Sov7xL4Fc8M5z"})
    
  return (
    <main className='bg-gray-200 flex flex-col gap-y-10 items-center pb-10'>
      <Banner/>
      <RestaurantPanel/>
    </main>
  )
}
