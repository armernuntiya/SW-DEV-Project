export default async function getBookings() {
    const response = await fetch("http://localhost:5000/api/v1/bookings",{next:{tags:['booking']}})
    if (!response.ok) {
        throw new Error("Failed to fetch all booking or you aren't admin")
    }

    return await response.json()
}