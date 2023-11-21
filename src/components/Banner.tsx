'use client'
import Image from 'next/image'
import {useState} from 'react';

export default function Banner() {
    const covers = ['/img/banner1.png','/img/banner2.jpg','/img/banner3.jpg','/img/banner4.jpg','/img/banner5.jpg']
    const [index,setIndex] = useState(0)

    return (
        <>
            <div className='flex flex-col shrink-0 items-start w-screen h-[550px]'>
                <Image src={covers[index%5]} alt='banner' width="0" height="0" sizes='100vw' priority className='w-full h-[550px] object-cover'/>
            </div>
            <div className='z-10 absolute top-64 right-5 w-8 h-8 content-center items-center shadow-md rounded-full bg-white cursor-pointer' onClick={()=>{setIndex(index+1)}}>
                <h2 className='text-xl font-semibold text-black not-serif font-abeezee pt-1 text-center'>{">"}</h2>
            </div>
            <div className='z-10 absolute top-64 left-5 w-8 h-8 content-center items-center shadow-md rounded-full bg-white cursor-pointer' onClick={()=>{setIndex(index-1)}}>
                <h2 className='text-xl font-semibold text-black not-serif font-abeezee pt-1 text-center '>{"<"}</h2>
            </div>
        </>
    )
}