export default function PopupError({isVisible, onClose, header, body}:{isVisible:Boolean,onClose:Function,header:string,body:string}){
    if (!isVisible) return null
    return(
        <div className='fixed inset-0 bg-black 
        bg-opacity-50 flex 
        justify-center items-center '>
            <div className="w-[512px]">
                <div className="bg-white p-6 rounded-lg flex flex-col gap-y-4">
                    <div className="font-semibold  text-2xl text-slate-800">{header}</div>
                    <div className="text-slate-400">{body}</div>
                    <div className="flex flex-row gap-x-2 justify-end">
                        <button type="submit" className="flex h-9 px-6 items-center bg-red-700 text-white rounded-full 
                        font-normal font-sans text-sm tracking-widest
                        hover:bg-red-800 hover:shadow-md" onClick={()=>onClose()}>CLOSE</button>  
                    </div>
                </div>
            </div>
        </div>
    )
}