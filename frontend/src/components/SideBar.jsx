import "./SideBar.css"

const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">
          <span className="sidebar-logo">◆</span> Dashboard
          <span className="sidebar-version">v1</span>
        </h1>
      </div>
      <nav className="sidebar-nav">
        <button className="sidebar-button">Dashboard</button>
        <button className="sidebar-button">Product</button>
        <button className="sidebar-button active">Customers</button>
        <button className="sidebar-button">Help</button>
      </nav>
    </aside>
  )
}

export default SideBar

