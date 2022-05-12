import './ExpenseItem.css';

function ExpenseItem(props) {
   const month = props.date.toISOString('en-US', { month: 'long' });
   const date = props.date.toISOString('en-US', { month: '' });
   const year = props.date.getFullYear();

   return (
      <div className='expense-item'>
         <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{date}</div>
         </div>
         <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
         </div>
      </div>
   )
};

export default ExpenseItem;
