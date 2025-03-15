"use strict"

getDATA()
async function getDATA(){
    
    const body = JSON.stringify({ message: "Myfavoritecolorispurple"})
    const options = {
    method: "POST",
    headers: {"Content-Type": "application/json" },
    body }
};

try {
    const responseKey = fetch ("https://proxy-key-u0q4.onrender.com",);
    
    const data = responseKey.json()
    console.log(data)
} catch (error) {
    console.log(error)
}