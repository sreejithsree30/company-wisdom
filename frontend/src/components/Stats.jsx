import "./Stats.css"

const Stats = () => {
  return (
    <div className="stats">
      <div className="stat-card">
        <div>
          <p className="stat-label">Total Customers</p>
          <h3 className="stat-value">97</h3>
          <p className="stat-trend positive">↑ 16% this month</p>
        </div>
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM6 8a6 6 0 1 1 12 0A6 6 0 0 1 6 8zm2 10a3 3 0 0 0-3 3 1 1 0 1 1-2 0 5 5 0 0 1 5-5h8a5 5 0 0 1 5 5 1 1 0 1 1-2 0 3 3 0 0 0-3-3H8z" />
          </svg>
        </div>
      </div>
      <div className="stat-card">
        <div>
          <p className="stat-label">Members</p>
          <h3 className="stat-value">97</h3>
          <p className="stat-trend negative">↓ 1% this month</p>
        </div>
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM6 8a6 6 0 1 1 12 0A6 6 0 0 1 6 8zm2 10a3 3 0 0 0-3 3 1 1 0 1 1-2 0 5 5 0 0 1 5-5h8a5 5 0 0 1 5 5 1 1 0 1 1-2 0 3 3 0 0 0-3-3H8z" />
          </svg>
        </div>
      </div>
      <div className="stat-card">
        <div>
          <p className="stat-label">Active Now</p>
          <h3 className="stat-value">97</h3>
          <div className="avatar-group">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="avatar" />
            ))}
          </div>
        </div>
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM6 8a6 6 0 1 1 12 0A6 6 0 0 1 6 8zm2 10a3 3 0 0 0-3 3 1 1 0 1 1-2 0 5 5 0 0 1 5-5h8a5 5 0 0 1 5 5 1 1 0 1 1-2 0 3 3 0 0 0-3-3H8z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Stats

