export default async function getBookings(token:string) {
    const response = await fetch("http://localhost:5000/api/v1/bookings",{
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
        }
    })
    if (!response.ok) {
        throw new Error("Failed to fetch all booking or you aren't admin")
    }

    return await response.json()
}