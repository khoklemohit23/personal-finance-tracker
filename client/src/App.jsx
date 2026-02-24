import { useState } from 'react'

function App() {
 const [transactions, setTransactions]  = useState([
    { id: 1, text: 'Freelance Gig', amount: 500 },
    { id: 2, text: 'Lunch', amount: -20 }
 ]);


  const addTransaction = (text,amount) => {
    const newTransaction = {
      id: Math.random(),
      text,
      amount: Number(amount)
    }
    setTransactions([...transactions,newTransaction])
    
  }

  return (
    <>
      <div>
        <h1>Finance Tracker</h1>
        <Balance transactions={transactions} />
        <TransactionList transactions={transactions} />
        <AddTransaction onAdd={addTransaction} />
      </div>
    </>
  )
}

export default App
