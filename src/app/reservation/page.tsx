import { TextField,InputLabel,Select,MenuItem } from "@mui/material"

export default function BookingSchedulesPage(){
    return(
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
                            <TextField id="outlined-basic" placeholder="Fill the name of the restaurant" variant="outlined" InputProps={{sx: {borderRadius:9999,width:399,fontSize:16, height:40,paddingBottom:2,textAlign:'center',paddingTop:2, background:'#FEF2F2', border:'1 solid #737373'}}} InputLabelProps={{}}  />
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <h2 className="text-gray-600 font-sans not-serif text-lg font-normal">Food Type</h2>
                            <TextField id="outlined-basic" placeholder="Fast Food, Dessert, etc." variant="outlined" InputProps={{sx: {borderRadius:9999,width:399,fontSize:16, height:40,paddingBottom:2,textAlign:'center',paddingTop:2, background:'#FEF2F2', border:'1 solid #737373'}}} InputLabelProps={{}}  />
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                            <h2 className="text-gray-600 font-sans not-serif text-lg font-normal">Address</h2>
                            <TextField id="outlined-basic" placeholder="House no, Street, Road ..." variant="outlined" InputProps={{sx: {borderRadius:9999,width:860,fontSize:16, height:40,paddingBottom:2,textAlign:'center',paddingTop:2, background:'#FEF2F2', border:'1 solid #737373'}}} InputLabelProps={{}}  />
                    </div>
                    <div className="flex items-center gap-16">
                        <div className="flex flex-col items-start gap-3">
                            <h2 className="text-gray-600 font-sans not-serif text-lg font-normal">Province</h2>
                            <TextField id="outlined-basic" placeholder="Fill province of the restaurant" variant="outlined" InputProps={{sx: {borderRadius:9999,width:399,fontSize:16, height:40,paddingBottom:2,textAlign:'center',paddingTop:2, background:'#FEF2F2', border:'1 solid #737373'}}} InputLabelProps={{}}  />
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <h2 className="text-gray-600 font-sans not-serif text-lg font-normal">Postal code</h2>
                            <TextField id="outlined-basic" placeholder="5-digit postal code" variant="outlined" InputProps={{sx: {borderRadius:9999,width:399,fontSize:16, height:40,paddingBottom:2,textAlign:'center',paddingTop:2, background:'#FEF2F2', border:'1 solid #737373'}}} InputLabelProps={{}}  />
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                            <h2 className="text-gray-600 font-sans not-serif text-lg font-normal">Telephone Number</h2>
                            <TextField id="outlined-basic" placeholder="xxx-xxx-xxxx" variant="outlined" InputProps={{sx: {borderRadius:9999,width:860,fontSize:16, height:40,paddingBottom:2,textAlign:'center',paddingTop:2, background:'#FEF2F2', border:'1 solid #737373'}}} InputLabelProps={{}}  />
                    </div>
                    <div className="flex flex-col items-start gap-3">
                            <h2 className="text-gray-600 font-sans not-serif text-lg font-normal">Picture URL</h2>
                            <TextField id="outlined-basic" placeholder="Fill URL of the picture" variant="outlined" InputProps={{sx: {borderRadius:9999,width:860,fontSize:16, height:40,paddingBottom:2,textAlign:'center',paddingTop:2, background:'#FEF2F2', border:'1 solid #737373'}}} InputLabelProps={{}}  />
                    </div>
                </div>
            </div> 
        </div>
    )
}