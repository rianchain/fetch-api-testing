console.log("javascript is working....")


const endpoint = "https://reqres.in/api/users/5"


fetch(endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        email: "rianzi@gmail.com",
        firstName: "ujang",
    }),
})
    .then((result) => result.json())
    .then((data) => console.log(data))



// async function hitAPI() {
//     const api = await fetch(endpoint)
//     const { data } = await api.json()
//     console.log(data)
// }

// hitAPI()