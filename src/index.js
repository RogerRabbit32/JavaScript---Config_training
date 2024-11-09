if (module.hot) {
    module.hot.accept(); // Accept updates for this module
}

document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from JSON Server
    fetch('http://localhost:3000/users')
        .then((response) => response.json())
        .then((data) => {
            // Call a function to display the data
            displayUsers(data);
        })
        .catch((error) => console.error('Error fetching data:', error));
});

// Function to display users on the page
function displayUsers(users) {
    const container = document.getElementById('user-list'); // Assuming this is in your HTML

    users.forEach((user) => {
        // Create a new div for each user
        const userDiv = document.createElement('div');
        userDiv.className = 'user-card';

        // Fill user data
        userDiv.innerHTML = `
            <h3>${user.firstName} ${user.lastName || ''}</h3>
            <p>Nickname: ${user.nick}</p>
        `;

        // Append to container
        container.appendChild(userDiv);
    });
}
