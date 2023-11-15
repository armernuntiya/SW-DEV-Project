'use client'
import Image from 'next/image'
import {useState} from 'react';
// import { useRouter } from 'next/navigation';
// import {useSession} from 'next-auth/react'


export default function Banner() {
    const covers = ['/img/banner1.png','/img/banner2.jpg']
    const [index,setIndex] = useState(0)
    // const router = useRouter()

    // const {data:session} = useSession()

    return (
        <div className='flex flex-col shrink-0 items-start w-screen h-[410px]' onClick={()=>{setIndex(index+1)}}>
            <Image src={covers[index%2]} alt='banner' width="0" height="0" sizes='100vw' priority className='w-full h-[410px] object-cover'/>
            {/* <div className={styles.bannerText}>
                <h1>Get Vaccinated Today</h1>
                <h2>and Protect Your Loved Ones!</h2>
                <h6 style={{marginTop:'10px'}}>From Today To 28 AUG @ every Wellness centre in Thailand!</h6>
            </div> */}
            {/* {
                session? <div className='z-30 absolute top-5 right-10 font-semibold text-white shadow-sm text-xl'>{session.user?.name}</div> : null
            } */}

            {/* <button className="bg-white text-cyan-600 border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent" onClick={(e)=>{router.push('/hospital');e.stopPropagation()}}>
                Select Your hospital
            </button> */}
        </div>
    )
}