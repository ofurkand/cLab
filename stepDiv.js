// Create the 'step' div
const stepDiv = document.createElement('div');
stepDiv.classList.add('step');

// Create the select element
const selectElement = document.createElement('select');
selectElement.id = 'direction';
selectElement.name = 'directions';

// Create the option elements for the select
const options = ['right', 'left', 'upward', 'downward'];
options.forEach(direction => {
    const option = document.createElement('option');
    option.value = direction;
    option.textContent = direction.charAt(0).toUpperCase() + direction.slice(1); // Capitalize first letter
    selectElement.appendChild(option);
});

// Create the input element
const inputElement = document.createElement('input');
inputElement.type = 'number';
inputElement.id = 'numberValue';
inputElement.value = '1';
inputElement.min = '0';

// Append the select and input elements to the 'step' div
stepDiv.appendChild(selectElement);
stepDiv.appendChild(inputElement);

// Append the 'step' div to the body (or another container)
document.body.appendChild(stepDiv); // You can replace `document.body` with any parent element