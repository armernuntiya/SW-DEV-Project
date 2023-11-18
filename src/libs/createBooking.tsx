export default async function createBooking(bookingDate:string,numOfGuests:number,rid:string,token:string) {    

    const response = await fetch(`http://localhost:5000/api/v1/restaurants/${rid}/bookings`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            "bookingDate":bookingDate,
            "numOfGuests":numOfGuests,
        })
    })
    if (!response.ok) {
        const errorData = await response.json(); // Try to parse response body as JSON
        const errorMessage = errorData?.message || 'Failed to create booking'; // Use a default message if the response body doesn't contain a message
        throw new Error(errorMessage);
    }

    return await response.json()
}
