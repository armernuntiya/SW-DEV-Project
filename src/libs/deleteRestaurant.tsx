export default async function deleteRestaurant(id:string,token:string) {
    const response = await fetch(`http://localhost:5000/api/v1/restaurants/${id}`,{
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        },
        next:{tags:['deleteResto']}
    })
    if (!response.ok) {
        throw new Error("Failed to delete restaurant")
    }

    return await response.json()
}