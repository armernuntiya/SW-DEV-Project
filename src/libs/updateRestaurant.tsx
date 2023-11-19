export default async function updateRestaurant(id:string,token:string,name:string,address:string,foodtype:string,province:string,postalcode:string,tel:string,picture:string) {
    const response = await fetch(`http://localhost:5000/api/v1/restaurants/${id}`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            "name":name,
            "address":address,
            "foodtype":foodtype,
            "province":province,
            "postalcode":postalcode,
            "tel":tel,
            "picture":picture
        }),
        next:{tags:['updateResto']}
    })
    if (!response.ok) {
        const errorData = await response.json(); // Try to parse response body as JSON
        const errorMessage = errorData?.message || "Failed to update booking"; // Use a default message if the response body doesn't contain a message
        console.log(token)
        throw new Error(errorMessage);
    }
    return await response.json()
}