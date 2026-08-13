import StatCard from '../components/StatCard.jsx';

function Dashboard() {
    return (
        <main className="dashboard">
            <div className="dashboard__header">
                <h1>Dashboard</h1>
                <p>Welcome back. Here's what's happening in your territory.</p>
            </div>

            <div className="dashboard__stats">
                <StatCard title="Active Accounts" value="32" />
                <StatCard title="Follow-Ups Due" value="6" />
                <StatCard title="Opportunities" value="8" />
                <StatCard title="Visits This Week" value="14" />
            </div>
        </main>
    )
}

export default Dashboard;