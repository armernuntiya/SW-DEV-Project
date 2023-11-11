import TopMenuItem from "./TopMenuItem";

export default function TopMenu(){
    
    const session = false;

    return(
    <div className="w-full h-20 bg-red-700 flex flex-row 
                    justify-between items-center px-6 py-2
                    text-white font-medium text-xl fixed">
        <TopMenuItem title="Home" pageRef="."/>
        <div className="text-3xl">
            EatEase
        </div>
            {session?
                <div className="flex flex-row gap-x-4 
                justify-end items-center w-[230px]">
                    <TopMenuItem title="Reservation" pageRef="./reservation"/>
                    <TopMenuItem title="Sign out" pageRef="."/>
                </div>
                :
                <div className="flex flex-row gap-x-4 
                            justify-end items-center w-[230px]">
                    <TopMenuItem title="Sign up" pageRef="./signup"/>
                    <TopMenuItem title="Sign-in" pageRef="./signin" style="border rounded-lg border-white px-6 py-2"/>
                </div>
            }
            
    </div>
    )
}