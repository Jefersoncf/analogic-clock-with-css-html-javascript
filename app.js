// Value input variable
const inputs = document.getElementById('input');
// Insert number inputs fied
const insertNum = num => inputs.textContent += num;

// Do operation using eval()
const equalTo = () => (inputs.textContent) ? inputs.textContent = eval(inputs.textContent): false;

// Remove all inputs
// const clearInput = () => inputs.textContent = '0';
