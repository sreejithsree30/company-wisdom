import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <h2 className="header-title">Hello Wisdom 👋</h2>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <svg
          className="search-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </header>
  )
}

export default Header

