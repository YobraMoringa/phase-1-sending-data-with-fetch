// Add your code here
function submitData(userNameInput, userEmailInput) {
    const newUserObj = {
        name: userNameInput,
        email: userEmailInput
    }

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newUserObj)
    }
    return fetch("http://localhost:3000/users", configurationObject).then(response => response.json()).then(newUserObj => {
        const p = document.createElement("p");
        p.append(newUserObj.id);
        document.body.append(p);
    }).catch(obj => {
        const h1 = document.createElement("h1");
        h1.append(obj.message);
        document.body.append(h1);
    })
}