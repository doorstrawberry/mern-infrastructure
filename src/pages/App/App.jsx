import './App.css';
import { useState } from "react"
import AuthPage from "../../components/AuthPage"
import NewOrderPage from "../../components/NewOrderPage"
import OrderHistoryPage from "../../components/OrderHistoryPage"

function App() {
  const [user, setUser] = useState(null)

  return (
    <main className="App">
      <h1>App</h1>
      <AuthPage />
      <NewOrderPage />
      <OrderHistoryPage />
    </main>
  );
}

export default App;
