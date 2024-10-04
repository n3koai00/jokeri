const tableBody = document.querySelector('#jokeriTable tbody');
const rowCountElement = document.getElementById('rowCount');
const newRowButton = document.getElementById('newRowButton');

let rowCount = 0;

newRowButton.addEventListener('click', addNewRow);

function addNewRow() {
    const newRow = tableBody.insertRow();
    
    for (let i = 0; i < 7; i++) {
        const cell = newRow.insertCell();
        const randomNumber = Math.floor(Math.random() * 10);
        cell.textContent = randomNumber;
    }
    
    rowCount++;
    rowCountElement.textContent = rowCount;
}
