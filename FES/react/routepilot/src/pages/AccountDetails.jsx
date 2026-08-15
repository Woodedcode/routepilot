import { useParams } from "react-router-dom";
import accounts from '../data/accounts';

function AccountDetails() {
  const { id } = useParams();
  const account = accounts.find((account) => account.id === Number(id));
  if (!account) {
    return (
        <h1>Account Not Found</h1>
    )
  }

  return (
    <main className="account-details">
      <h1>{account.name}</h1>
      <p>{account.city}</p>
    </main>
  );
}

export default AccountDetails;
