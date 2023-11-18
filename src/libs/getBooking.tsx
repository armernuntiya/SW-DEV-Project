export default async function getBooking(id:string) {
    const response = await fetch(`http://localhost:5000/api/v1/bookings/${id}`)
    if (!response.ok) {
        throw new Error("Failed to fetch user's booking")
    }

    return await response.json()
}