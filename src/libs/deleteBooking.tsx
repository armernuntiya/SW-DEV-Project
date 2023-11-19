export default async function deleteBooking(id:string,token:string) {
    const response = await fetch(`http://localhost:5000/api/v1/bookings/${id}`,{
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        },
        next:{tags:['deleteBook']}
    })
    if (!response.ok) {
        const errorData = await response.json(); // Try to parse response body as JSON
        const errorMessage = errorData?.message || "Failed to delete booking"; // Use a default message if the response body doesn't contain a message
        throw new Error(errorMessage);
    }

    return await response.json()
}