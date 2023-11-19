export default async function updateBooking(bookingDate:string,numOfGuests:number,id:string,token:string) {
    const response = await fetch(`http://localhost:5000/api/v1/bookings/${id}`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            "bookingDate":bookingDate,
            "numOfGuests":numOfGuests
            
        }),
        next:{tags:['updateBooking']}
    })
    if (!response.ok) {
        const errorData = await response.json(); // Try to parse response body as JSON
        const errorMessage = errorData?.message || "Failed to update booking"; // Use a default message if the response body doesn't contain a message
        throw new Error(errorMessage);
    }

    return await response.json()
}