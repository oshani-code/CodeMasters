// Sample user data storage
let users = [];

// Function to add a new user
function addUser() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    if (username && email) {
        const newUser = {
            username,
            email
        };

        users.push(newUser);

        // Clear input fields
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";

        // Update the user list
        updateUserList();
    }
}

// Function to update the user list
function updateUserList() {
    const userList = document.getElementById("user-list");
    userList.innerHTML = "";

    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `Username: ${user.username}, Email: ${user.email}`;
        userList.appendChild(li);
    });
}

// Event listener for the "Add User" button
document.getElementById("add-user").addEventListener("click", addUser);
