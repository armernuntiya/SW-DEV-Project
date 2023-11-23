'use client'


import { useSearchParams } from "next/navigation";
import { upDateAction } from "@/action/updateRestaurantAction";
import { Fragment, useRef, useState } from "react";
import PopupError from "./PopupError";

export default function RestaurantForm({token}:{token:string}) {
    
    const urlParams = useSearchParams()
    const id = urlParams.get("id")
    const name = urlParams.get("name")
    const foodtype = urlParams.get("foodtype")
    const address = urlParams.get("address")
    const province = urlParams.get("province")
    const postalcode = urlParams.get("postalcode")
    const tel = urlParams.get("tel")
    const picture = urlParams.get("picture")

    // const rount = useRouter()
    
    const message = useRef("")
    const [showError, setShowError] = useState(false)
    
    function isValidTel(tel: string): boolean {
        const telPattern = /^\(?\d{10}$/
        return telPattern.test(tel);
    }

    function isValidPostalCode(postalCode: string): boolean {
        const postalCodePattern = /^\(?\d{5}$/
        return postalCodePattern.test(postalCode);
    }

    function isValidUrl(url: string): boolean {
        const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d{1,5})?(\/[^\s]*)?$/;
        return urlPattern.test(url);
      }

    const updateResto = async(updateRestaurantForm:FormData)=>{
        // 'use server'
        const name2 = updateRestaurantForm.get("name")
        const foodtype2 = updateRestaurantForm.get("foodtype")
        const address2 = updateRestaurantForm.get("address")
        const province2 = updateRestaurantForm.get("province")
        const postalcode2 = updateRestaurantForm.get("postalcode")
        const tel2 = updateRestaurantForm.get("tel")
        const picture2 = updateRestaurantForm.get("picture")
        const inValidForm: string[]=[]
            
        if(!isValidTel(tel2)){
            inValidForm.push("Your telephone number must have 10 digit.")
        }  
        
        if(!isValidPostalCode(postalcode2)){
            inValidForm.push("Your postal code must have 5 digit.")
        }

        if(!isValidUrl(picture2)){
            inValidForm.push("PictureUrl is not in the correct format.")
        }

        if(inValidForm.length){
            message.current = inValidForm.join(' ')
            setShowError(true)
        }
        else{
            await upDateAction(id,token,name2,address2,foodtype2,province2,postalcode2,tel2,picture2)
        }

        // try {
        //     const updateResult = await updateRestaurant(id,token,name2,address2,foodtype2,province2,postalcode2,tel2,picture2) 
        //     // revalidateTag('updateResto')
        //     revalidatePath('/')
        //     redirect('/')               
        //     // rount.push('/')    
        // } catch (error) {
        //     console.error('Error update restaurant',error);
        // }
    }


    return (
        <Fragment>
        <form action={updateResto}>
        <div className="bg-red-700 flex flex-col items-center pt-24 p-20 h-full ">
           <div className="flex flex-col p-10 justify-center items-center gap-8 rounded-3xl bg-white shadow-md h-140 w-200">
                <div className="flex py-3 px-0 flex-col items-center gap-3 self-stretch ">
                    <h3 className="text-red-700	 text-center font-sans text-4xl	not-italic	font-medium	leading-6	tracking-widest	">Restaurant</h3>
                    <h4 className="w-129 text-black text-center font-sans text-base not-italic font-light leading-6">Please fill the information below</h4>
                </div>
                <div className="flex w-168 items-start content-center gap-y-8 gap-x-16 flex-col">
                    <div className="flex items-center gap-16">
                        <div className="flex flex-col items-start gap-3">
                            <h2 className="text-gray-600 font-sans not-serif text-lg font-normal">Name</h2>
                            <input  defaultValue={name? name:''} className="bg-red-50 border border-gray-400 rounded-full w-[399px] text-base py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-400 focus:border-2" type='text' required id='name' name='name' placeholder="Fill the name of the restaurant"/>

                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <h2 className="text-gray-600 font-sans not-serif text-lg font-normal">Food Type</h2>
                            <input defaultValue={foodtype? foodtype:''} className="bg-red-50 border border-gray-400 rounded-full w-[399px] text-base py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-400 focus:border-2" type='text' required id='foodtype' name='foodtype' placeholder="Fast Food, Dessert, etc."/>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                            <h2 className="text-gray-600 font-sans not-serif text-lg font-normal">Address</h2>
                            <input defaultValue={address? address:''} className="bg-red-50 border border-gray-400 rounded-full w-[860px] text-base py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-400 focus:border-2" type='text' required id='address' name='address' placeholder="House no, Street, Road ..."/>
                    </div>
                    <div className="flex items-center gap-16">
                        <div className="flex flex-col items-start gap-3">
                            <h2 className="text-gray-600 font-sans not-serif text-lg font-normal">Province</h2>
                            <input defaultValue={province? province:''} className="bg-red-50 border border-gray-400 rounded-full w-[399px] text-base py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-400 focus:border-2" type='text' required id='province' name='province' placeholder="Fill province of the restaurant"/>
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <h2 className="text-gray-600 font-sans not-serif text-lg font-normal">Postal code</h2>
                            <input defaultValue={postalcode? postalcode:''} className="bg-red-50 border border-gray-400 rounded-full w-[399px] text-base py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-400 focus:border-2" type='text' required id='postalcode' name='postalcode' placeholder="5-digit postal code"/>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                            <h2 className="text-gray-600 font-sans not-serif text-lg font-normal">Telephone Number</h2>
                            <input defaultValue={tel? tel:''} className="bg-red-50 border border-gray-400 rounded-full w-[860px] text-base py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-400 focus:border-2" type='text' required id='tel' name='tel' placeholder="XXXXXXXXXX"/>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                            <h2 className="text-gray-600 font-sans not-serif text-lg font-normal">Picture URL</h2>
                            <input defaultValue={picture? picture:''} className="bg-red-50 border border-gray-400 rounded-full w-[860px] text-base py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-400 focus:border-2" type='text' required id='picture' name='picture' placeholder="Fill URL of the picture"/>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2 self-stretch">
                    <button type="submit" className="flex h-9 px-6 items-center bg-red-700 text-white rounded-full 
                    font-normal font-sans text-sm tracking-widest
                    hover:bg-red-800 hover:shadow-md">CONFIRM</button>  
                </div>
            </div> 
        </div>
        </form>
        <PopupError isVisible={showError} onClose={()=>setShowError(false)} header="Invalid input" body={message.current} />
        </Fragment>
    )
}