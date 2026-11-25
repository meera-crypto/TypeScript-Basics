//promise with typescript
function fetchUser(id: number): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: "test" });
    }, 1000);
  });
}

fetchUser(1); //gives a promise

//async/await
async function getuserData(id: number): Promise<void> {
  try {
    const user = await fetchUser(id);
    console.log(user.name);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getuserData(1); //to produce an output

//generic async function
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json();
}
//This is a generic async function: T is a placeholder for the shape of the data you expect.
