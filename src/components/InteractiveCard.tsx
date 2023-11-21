'use client'
import React from 'react';
export default function InteractiveCard({children}:{children:React.ReactNode}) {
    function onCardMouseAction(event:React.SyntheticEvent) {
        if(event.type=='mouseover')
        {
            event.currentTarget.classList.remove('shadow-lg')
            event.currentTarget.classList.add('shadow-2xl')
            event.currentTarget.classList.remove('bg-white')
            event.currentTarget.classList.add('bg-neutral-200')
        }
        else
        {
            event.currentTarget.classList.remove('shadow-2xl')
            event.currentTarget.classList.add('shadow-lg')
            event.currentTarget.classList.remove('bg-neutral-200')
            event.currentTarget.classList.add('bg-white')
        }
    }
    return (
        <div className="flex w-[250px] h-72 pb-2 flex-col gap-3 shrink-0 bg-white shadow-md rounded-2xl relative" onMouseOver={(e)=>onCardMouseAction(e)} onMouseOut={(e)=>onCardMouseAction(e)}>
            { children }
        </div>
    )
}