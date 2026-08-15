import Dashboard from "./pages/Dashboard.jsx";
import Accounts from "./pages/Accounts.jsx";
import RoutePlanner from "./pages/RoutePlanner.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Link} from 'react-router-dom';
import AccountDetails from "./pages/AccountDetails.jsx";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/accounts/:id"element={<AccountDetails />} />
          <Route path="/route-planner" element={<RoutePlanner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;