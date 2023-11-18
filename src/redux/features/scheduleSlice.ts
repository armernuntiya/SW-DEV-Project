import { createSlice,PayloadAction} from "@reduxjs/toolkit"
import { ReservationItem } from "../../../interfaces"

type ReservationState = {
    bookItems: ReservationItem[]
}

const initialState:ReservationState = { bookItems:[]}

export const ReservationSlice = createSlice({
    name: "Reservation",
    initialState,
    reducers:{
        addReservation: (state, action:PayloadAction<ReservationItem>)=>{
            state.bookItems.push(action.payload)
        },
        removeReservation: (state, action:PayloadAction<ReservationItem>)=>{
            const remainItem = state.bookItems.filter( obj => {
                return ( (obj.restaurant !== action.payload.restaurant)
                ||(obj.numOfGuests !== action.payload.numOfGuests)
                ||(obj.bookingDate !== action.payload.bookingDate))
            })
            state.bookItems = remainItem
        }
    }
})

export const { addReservation, removeReservation} = ReservationSlice.actions
export default ReservationSlice.reducer