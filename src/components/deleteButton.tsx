'use client'

// import { MouseEventHandler } from "react"

interface DeleteButtonProps {
    deleteFunction: string;
  }

export default function DeleteButton({ deleteFunction }: DeleteButtonProps){
    const parsedFunction = new Function(`return ${deleteFunction}`)();
    return (
        <button onClick={() => parsedFunction()} className="flex h-9 px-6 items-center border-red-700 text-red-700 rounded-md font-medium font-sans text-sm border-2 hover:shadow-md hover:bg-red-100">DELETE</button>
    )
}