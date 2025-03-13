const rulesDiv = document.getElementById("rules-section");
const addRuleBtn = document.getElementById("newRule");

const tempRule = document.getElementById("rule-1");

let x = document.getElementById("addStep");
// console.log(x);
x.addEventListener("click",function(){
    // console.log(x.parentElement.parentElement.querySelector("div[id='steps']"));
    x.parentElement.parentElement.querySelector("div[id='steps']").appendChild(newStep());
    
});

function newStep(){
    const stepDiv = document.createElement('div');
    stepDiv.classList.add('step');
    const selectElement = document.createElement('select');
    selectElement.id = 'direction';
    selectElement.name = 'directions';
    const options = ['right', 'left', 'upward', 'downward'];
    options.forEach(direction => {
        const option = document.createElement('option');
        option.value = direction;
        option.textContent = direction.charAt(0).toUpperCase() + direction.slice(1); // Capitalize first letter
        selectElement.appendChild(option);
    });
    const inputElement = document.createElement('input');
    inputElement.type = 'number';
    inputElement.id = 'numberValue';
    inputElement.value = '1';
    inputElement.min = '0';
    stepDiv.appendChild(selectElement);
    stepDiv.appendChild(inputElement);
    return stepDiv;
}
