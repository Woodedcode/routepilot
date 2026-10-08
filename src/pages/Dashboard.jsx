import StatCard from "../components/StatCard.jsx";
import dashboardStats from "../data/dashboardStats.js";
import followUps from "../data/followUps.js";
import FollowUpItem from "../components/FollowUpItem.jsx";

function Dashboard() {
  return (
    <main className="dashboard">
      <div className="dashboard__header">
        <h1>Dashboard</h1>
        <p>Welcome back. Here's what's happening in your territory.</p>
      </div>

      <div className="dashboard__stats">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.id} title={stat.title} value={stat.value} />
        ))}
      </div>

      <div className="dashboard__followups">
        <h2>Today's Follow-Ups</h2>

        {followUps.map((item) => (
          <FollowUpItem
            key={item.id}
            account={item.account}
            task={item.task}
            dueDate={item.dueDate}
          />
        ))}
      </div>
    </main>
  );
}

export default Dashboard;
