// Add your code here
// Code for making the votes clickable and displaying animal images goes here
let name = "Sam"; 
let email = "sam@sam.com"; 
let body = document.querySelector("body"); 

// Define a function named submitData that takes userName and userEmail as parameters
const submitData = (userName, userEmail) => {
  // Make a request to a server at "http://localhost:3000/users" using the POST method.
  return fetch("http://localhost:3000/users", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json", // Specify the data as  JSON
      Accept: "application/json", // ask for  response  in JSON format
    },
    // Convert the userName and userEmail into a JSON-formatted string and set it as the request body
    body: JSON.stringify({
      name: userName,
      email: userEmail,
    }),
  }) 
  //  converts user data to JSON and send in the request body
  .then((resp) => {
    //when server responds ,parse the response as JSON
    return resp.json(); 
  })
  // parse the JSON data received from the server
  .then((data) => {
    // after receiving and processing the servers response, updatye HTML content
    body.innerHTML = `<p>${data.id}</p>`;
  })
  // display the error message in the dom body element
  .catch((error) => {
    // handle errors if there will be any and display error messages
    body.innerHTML = `${error.message}`;
  });
}
