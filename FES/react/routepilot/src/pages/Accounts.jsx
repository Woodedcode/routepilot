import accounts from '../data/accounts';
import AccountCard from '../components/AccountCard';

function Accounts() {
    return (
        <main className='accounts'>
            <h1>Accounts</h1>
            <p>Manage the accounts in your territory</p>
            {accounts.map((account) => (
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
    )
}

export default Accounts;