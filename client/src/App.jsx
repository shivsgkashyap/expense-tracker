import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import Footer from "./components/Footer";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <main className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </main>
      </GlobalProvider>
      <Footer />
    </>
  );
}

export default App;
