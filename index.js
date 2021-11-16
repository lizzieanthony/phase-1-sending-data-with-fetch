// Add your code here
const body = document.getElementsByTagName('body')[0];

function submitData(firstName, email){
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
        },
        body: JSON.stringify({
            "name": firstName,
            "email": email,
        }),
    };
    return fetch('http://localhost:3000/users', configObj)
     .then(response => response.json())
     .then(object => {
         document.getElementsByTagName('body')[0].innerHTML = object.id
     })
     .catch(error => {
         console.log(error)
        // console.log(error.document.body)
        // console.log(error.message)
        document.body.innerHTML = error.message
    })
        
     // .catch(error => addNewError(error.document.body))

    //  .catch(function (error){
    //     alert("Bad things! Ragnarők!");
    //     console.log(error.message);
    //  });
 }
function addNewError(error){
    document.getElementsByTagName('body').innerHTML = error;
}

function addNewContact(newID){
    document.getElementsByTagName('body')[0].innerHTML = newID;
}
submitData("name", "email@email.com")