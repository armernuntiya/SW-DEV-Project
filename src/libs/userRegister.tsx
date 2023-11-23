export default async function userRegister(userName:string, userEmail:string, userTel:string, userPassword:string) {

    const response = await fetch("http://localhost:5000/api/v1/auth/register",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
            tel: userTel,
            password: userPassword,
            role: "user",
        }),
    })
    
    if(!response.ok){
        const errorData = await response.json(); // Try to parse response body as JSON
        const errorMessage = errorData?.message || "Failed to register"; // Use a default message if the response body doesn't contain a message
        throw new Error(errorMessage);
    }

    return await response.json()

}