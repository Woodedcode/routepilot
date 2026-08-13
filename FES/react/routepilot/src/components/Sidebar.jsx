function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar__logo">
                <h2>RoutePilot</h2>
                <span>Territory Management</span>
            </div>

            <nav className="sidebar__nav">
                <a href="#">Dashboard</a>
                <a href="#">Accounts</a>
                <a href="#">Route Planner</a>
                <a href="#">Opportunities</a>
                <a href="#">Follow-Ups</a>
            </nav>
        </aside>
    )
}

export default Sidebar;