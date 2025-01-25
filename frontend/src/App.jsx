import Sidebar from "./components/SideBar"
import Header from "./components/Header"
import Stats from "./components/Stats"
import CustomerTable from "./components/CustomerTable"
import AddCustomerForm from "./components/AddCustomerForm"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Header />
        <Stats />
        <AddCustomerForm />
        <CustomerTable />
      </main>
    </div>
  )
}

export default App

