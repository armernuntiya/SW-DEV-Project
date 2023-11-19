'use client'

import { useSearchParams } from "next/navigation";
import updateRestaurant from "@/libs/updateRestaurant";
import {  revalidateTag,revalidatePath } from "next/cache";
import {redirect} from 'next/navigation'
import { useRouter } from "next/navigation"

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

    const rount = useRouter()

    const updateResto = async(updateRestaurantForm:FormData)=>{
        // 'use server'
        const name2 = updateRestaurantForm.get("name")
        const foodtype2 = updateRestaurantForm.get("foodtype")
        const address2 = updateRestaurantForm.get("address")
        const province2 = updateRestaurantForm.get("province")
        const postalcode2 = updateRestaurantForm.get("postalcode")
        const tel2 = updateRestaurantForm.get("tel")
        const picture2 = updateRestaurantForm.get("picture")
        try {
            const updateResult = await updateRestaurant(id,token,name2,address2,foodtype2,province2,postalcode2,tel2,picture2)                
            rount.push('/')    
        } catch (error) {
            console.error('Error update restaurant',error);
        }
    }


    return (
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
                            {/* <TextField id="outlined-basic" placeholder="Fill the name of the restaurant" variant="outlined" InputProps={{sx: {borderRadius:9999,width:399,fontSize:16, height:40,paddingBottom:2,textAlign:'center',paddingTop:2, background:'#FEF2F2', border:'1 solid #737373'}}} InputLabelProps={{}}  /> */}

                            <input  defaultValue={name? name:''} className="bg-red-50 border border-gray-400 rounded-full w-[399px] text-base py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-400 focus:border-2" type='text' required id='name' name='name' placeholder="Fill the name of the restaurant"/>

                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <h2 className="text-gray-600 font-sans not-serif text-lg font-normal">Food Type</h2>
                            {/* <TextField   id="outlined-basic" placeholder="Fast Food, Dessert, etc." variant="outlined" InputProps={{sx: {borderRadius:9999,width:399,fontSize:16, height:40,paddingBottom:2,textAlign:'center',paddingTop:2, background:'#FEF2F2', border:'1 solid #737373'}}} InputLabelProps={{}}  /> */}
                            <input defaultValue={foodtype? foodtype:''} className="bg-red-50 border border-gray-400 rounded-full w-[399px] text-base py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-400 focus:border-2" type='text' required id='foodtype' name='foodtype' placeholder="Fast Food, Dessert, etc."/>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                            <h2 className="text-gray-600 font-sans not-serif text-lg font-normal">Address</h2>
                            {/* <TextField  id="outlined-basic" placeholder="House no, Street, Road ..." variant="outlined" InputProps={{sx: {borderRadius:9999,width:860,fontSize:16, height:40,paddingBottom:2,textAlign:'center',paddingTop:2, background:'#FEF2F2', border:'1 solid #737373'}}} InputLabelProps={{}}  /> */}
                            <input defaultValue={address? address:''} className="bg-red-50 border border-gray-400 rounded-full w-[860px] text-base py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-400 focus:border-2" type='text' required id='address' name='address' placeholder="House no, Street, Road ..."/>
                    </div>
                    <div className="flex items-center gap-16">
                        <div className="flex flex-col items-start gap-3">
                            <h2 className="text-gray-600 font-sans not-serif text-lg font-normal">Province</h2>
                            {/* <TextField   id="outlined-basic" placeholder="Fill province of the restaurant" variant="outlined" InputProps={{sx: {borderRadius:9999,width:399,fontSize:16, height:40,paddingBottom:2,textAlign:'center',paddingTop:2, background:'#FEF2F2', border:'1 solid #737373'}}} InputLabelProps={{}}  /> */}
                            <input defaultValue={province? province:''} className="bg-red-50 border border-gray-400 rounded-full w-[399px] text-base py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-400 focus:border-2" type='text' required id='province' name='province' placeholder="Fill province of the restaurant"/>
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <h2 className="text-gray-600 font-sans not-serif text-lg font-normal">Postal code</h2>
                            {/* <TextField   id="outlined-basic" placeholder="5-digit postal code" variant="outlined" InputProps={{sx: {borderRadius:9999,width:399,fontSize:16, height:40,paddingBottom:2,textAlign:'center',paddingTop:2, background:'#FEF2F2', border:'1 solid #737373'}}} InputLabelProps={{}}  /> */}
                            <input defaultValue={postalcode? postalcode:''} className="bg-red-50 border border-gray-400 rounded-full w-[399px] text-base py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-400 focus:border-2" type='text' required id='postalcode' name='postalcode' placeholder="5-digit postal code"/>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                            <h2 className="text-gray-600 font-sans not-serif text-lg font-normal">Telephone Number</h2>
                            {/* <TextField   id="outlined-basic" placeholder="xxx-xxx-xxxx" variant="outlined" InputProps={{sx: {borderRadius:9999,width:860,fontSize:16, height:40,paddingBottom:2,textAlign:'center',paddingTop:2, background:'#FEF2F2', border:'1 solid #737373'}}} InputLabelProps={{}}  /> */}
                            <input defaultValue={tel? tel:''} className="bg-red-50 border border-gray-400 rounded-full w-[860px] text-base py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-400 focus:border-2" type='text' required id='tel' name='tel' placeholder="XXXXXXXXXX"/>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                            <h2 className="text-gray-600 font-sans not-serif text-lg font-normal">Picture URL</h2>
                            {/* <TextField   id="outlined-basic" placeholder="Fill URL of the picture" variant="outlined" InputProps={{sx: {borderRadius:9999,width:860,fontSize:16, height:40,paddingBottom:2,textAlign:'center',paddingTop:2, background:'#FEF2F2', border:'1 solid #737373'}}} InputLabelProps={{}}  /> */}
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
    )
}