
// app.js
document.getElementById('fetchUsersBtn').addEventListener('click', fetchData);

async function fetchData() {
    try {
        const response = await fetch('https://reqres.in/api/users');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayData(data) {
    const userDataElement = document.getElementById('userData');

    // Clear previous data
    userDataElement.innerHTML = '';

    // Display new data
    data.data.forEach(user => {
         let box = document.createElement("div");
         let image = document.createElement("img");
        let email = document.createElement("h2");
        let firstName = document.createElement("p");
        let lastName = document.createElement("p");

        image.src = ele.avatar;
        email.textContent = ele.email;
        firstName.textContent = ele.first_name;
        lastName.textContent = ele.last_name;

        box.append(image, email, firstName, lastName);
        userDataElement.appendChild(box);
    });
}


