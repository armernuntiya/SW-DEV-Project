export default async function getBooking(id:string,token:string) {
    const response = await fetch(`http://localhost:5000/api/v1/bookings/${id}`,{
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
        }
    })

    

    if (!response.ok) {
        const errorData = await response.json(); // Try to parse response body as JSON
        const errorMessage = errorData?.message || "Failed to fetch user's booking"; // Use a default message if the response body doesn't contain a message
        throw new Error(errorMessage);
    }

    return await response.json()
}