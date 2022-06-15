import React from "react";
import Expenses from "./componenets/Expenses/Expenses";
import NewExpense from "./componenets/NewExpense/NewExpense";

function App() {
  const expenses = [
    {id:'el1', title:'car insurance', amount:294.3, date : new Date(2022, 6, 10)},
    {id:'el2', title:'school fees', amount:394.3, date : new Date(2022, 6, 11)},
    {id:'el3', title:'gas refill', amount:494.3, date : new Date(2022, 6, 12)},
    {id:'el4', title:'house rent', amount:594.3, date : new Date(2022, 6, 13)}
  ];


  const addExpenseHandler = expense => {
    console.log('in app js')
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
