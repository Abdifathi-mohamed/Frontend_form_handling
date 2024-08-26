// const addexpense =  document.getElementById('add-expense').addEventListener('click', function(){
    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = document.getElementById('expense-amount').value;

    if(expenseName !== '' && expenseAmount !== '') {
        const expense = {
            name: expenseName,
            amount: parseFloat(expenseAmount)
        };

        fetch('http://localhost:3000/expenses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(expense)
        })
        .then(response => response.json())  
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                addExpenseToList(data);
                updateTotal(data.amount);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

        document.getElementById('expense-name').value = '';
        document.getElementById('expense-amount').value = '';
    };




function addExpenseToList(expense) {
    const expenseList = document.getElementById('expense-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${expense.name}: $${expense.amount}`;
    expenseList.appendChild(listItem);

    // Adding a delete button to the list item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-expense');
    listItem.appendChild(deleteButton);

    deleteButton.addEventListener('click', function() {
        fetch(`http://localhost:3000/expenses/${expense.id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                expenseList.removeChild(listItem);
                updateTotal(-expense.amount);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
}
