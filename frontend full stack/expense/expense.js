function addNewExpense(event){
    event.preventDefault()
    const expenseD={
        expenseamount:event.target.expenseamount.value,
        description:event.target.description.value,
        category:event.target.category.value
    }
    console.log(expenseD )
    axios.post("http://localhost:3000/expense/addexpense",expenseD)
    .then((response)=>{
        showscr(response.data.expense)
    })
    .catch((err)=>{
        showError(err)
    })
    
}
window.addEventListener('DOMContentLoaded',()=>{
    axios.get("http://localhost:3000/expense/getexpense")
    .then(response=>{
        
        response.data.expenses.forEach(expense=>{
            showscr(expense)
        })
    })
    .catch(err=>{
        showError(err)
    })
})
function showscr(expense){
    const list=document.getElementById('listOfExpenses')
    const expenseElemId=`expense-${expense.id}`
    list.innerHTML+=`<li id="${expenseElemId}">${expense.expenseamount}-${expense.description}-${expense.category}
    <button onclick='deleteExpense(event, ${expense.id})'>Delete expense</button>
    </li>`
}
function showError(err){
    document.body.innerHTML += `<div style="color:red;"> ${err}</div>`
}

