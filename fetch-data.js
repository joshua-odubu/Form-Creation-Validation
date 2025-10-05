// fetch-data.js

// Step 1: Define the asynchronous function
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data from the API
        const response = await fetch(apiUrl);

        // Check for non-OK responses
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the response as JSON
        const users = await response.json();

        // Step 5: Clear the "Loading..." message
        dataContainer.innerHTML = '';

        // Step 6: Create a list element to hold user names
        const userList = document.createElement('ul');

        // Step 7: Loop through users and append each name to the list
        users.forEach(function(user) {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Step 8: Append the complete list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 9: Handle errors gracefully
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Step 10: Invoke the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);