import accounts from "../data/accounts";
import AccountCard from "../components/AccountCard";
import { useState } from "react";

function Accounts() {
  const [search, setSearch] = useState("");
  const filteredAccounts = accounts.filter((account) =>
    account.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <main className="accounts">
      <h1>Accounts</h1>
      <p>Manage the accounts in your territory</p>
      <input
        className="accounts__search"
        type="text"
        placeholder="Search accounts"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <p>{search}</p>
      {filteredAccounts.map((account) => (
        <AccountCard
          key={account.id}
          name={account.name}
          city={account.city}
          type={account.type}
          lastVisit={account.lastVisit}
          nextFollowUp={account.nextFollowUp}
          status={account.status}
        />
      ))}
    </main>
  );
}

export default Accounts;
