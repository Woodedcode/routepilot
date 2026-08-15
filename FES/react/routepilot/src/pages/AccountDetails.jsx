import { useParams } from "react-router-dom";
import accounts from "../data/accounts";

function AccountDetails() {
  const { id } = useParams();
  const account = accounts.find((account) => account.id === Number(id));
  if (!account) {
    return <h1>Account Not Found</h1>;
  }

  return (
    <main className="account-details">
      <h1>{account.name}</h1>
      <div className="account-details__card">
        <p>
          <strong>City:</strong> {account.city}
        </p>
        <p>
          <strong>Type:</strong> {account.type}
        </p>
        <p>
          <strong>Last Visit:</strong> {account.lastVisit}
        </p>
        <p>
          <strong>Next Follow-Up:</strong> {account.nextFollowUp}
        </p>
        <p>
          <strong>Status:</strong>
          <span className="account-details__status"> {account.status}</span>
        </p>
      </div>
    </main>
  );
}

export default AccountDetails;
