document.addEventListener('DOMContentLoaded', () => {
    const inventoryList = document.getElementById('inventory-list');
    const addItemForm = document.getElementById('add-item-form');

    // Fetch and display inventory on page load
    fetchInventory();

    addItemForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const itemName = document.getElementById('itemName').value;
        const itemQuantity = document.getElementById('itemQuantity').value;

        // Add the new item to the inventory
        addItemToInventory(itemName, itemQuantity);

        // Clear the form fields
        addItemForm.reset();
    });

    function fetchInventory() {
        // Simulate fetching data from a backend/database
        const inventoryData = [
            { name: 'Item 1', quantity: 10 },
            { name: 'Item 2', quantity: 5 },
            // Add more items as needed
        ];

        // Display inventory on the page
        displayInventory(inventoryData);
    }

    function displayInventory(inventoryData) {
        inventoryList.innerHTML = '';

        inventoryData.forEach((item) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - Quantity: ${item.quantity}`;
            inventoryList.appendChild(listItem);
        });
    }

    function addItemToInventory(name, quantity) {
        // Simulate sending data to a backend/database
        // In a real application, you would make an HTTP request
        const newItem = { name, quantity };

        // Update the UI with the new item
        const listItem = document.createElement('li');
        listItem.textContent = `${newItem.name} - Quantity: ${newItem.quantity}`;
        inventoryList.appendChild(listItem);
    }
});
