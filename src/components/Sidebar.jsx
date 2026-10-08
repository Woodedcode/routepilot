import {Link} from 'react-router-dom';

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar__logo">
                <h2>RoutePilot</h2>
                <span>Territory Management</span>
            </div>

            <nav className="sidebar__nav">
                <Link to="/">Dashboard</Link>
                <Link to="/accounts">Accounts</Link>
                <Link to="/route-planner">Route-Planner</Link>
                <Link to="/opportunities">Opportunities</Link>
                <Link to="/follow-ups">Follow-Ups</Link>
            </nav>
        </aside>
    )
}

export default Sidebar;