"use strict";
//promise with typescript
function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: "test" });
        }, 1000);
    });
}
fetchUser(1); //gives a promise
//async/await
async function getuserData(id) {
    try {
        const user = await fetchUser(id);
        console.log(user.name);
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
}
getuserData(1); //to produce an output
//generic async function
// async function fetchData<T>(url: string): Promise<T> {
//   const response = await fetch(url);
//   return response.json();
// }
async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }
    return response.json();
}
