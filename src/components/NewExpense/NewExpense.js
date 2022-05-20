import React from "react";
import ExpensesForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpensesForm />
    </div>
  );
};

export default NewExpense;
