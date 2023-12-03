const orderList = document.getElementById('food-list');
const orderButton = document.getElementById('order-food');
const orderIdElement = document.getElementById('order-id');
const foodImageElement = document.getElementById('food-image');

function getRandomTime() {
    return Math.floor(Math.random() * 3000);
}

function createFoodItem(name, image) {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    checkbox.type = 'checkbox';
    checkbox.name = 'food';
    checkbox.value = name;
    label.innerText = name;
    label.htmlFor = name;
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    orderList.appendChild(listItem);
}

function clearOrderDetails() {
    orderIdElement.textContent = '';
    foodImageElement.src = '';
}

createFoodItem('burger', 'images/burger.png');
createFoodItem('fries', 'images/fries.png');
createFoodItem('chicken-nuggets', 'images/chicken-nuggets.png');

orderButton.addEventListener('click', function () {
    const selectedFood = Array.from(orderList.querySelectorAll('input:checked'))
        .map(item => item.value);

    if (!selectedFood.length) {
        alert('Please select at least one food item.');
        return;
    }

    clearOrderDetails();
    orderIdElement.textContent = `Order #${Math.floor(Math.random() * 10000)}`;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(selectedFood);
        }, getRandomTime());
    });

    promise.then(food => {
        foodImageElement.src = `images/${food[0]}.png`;
    });
});
