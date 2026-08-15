import { Link } from "react-router-dom";

function AccountCard({
  id,
  name,
  city,
  type,
  lastVisit,
  nextFollowUp,
  status,
}) {
  return (
    <Link to={`/accounts/${id}`} className="account-card">
      <div className="account-card__header">
        <h3>{name}</h3>
        <span className={`account-card__status ${status.toLowerCase()}`}>
          {status}
        </span>
      </div>

      <p>{city}</p>
      <p>{type}</p>

      <div className="account-card__details">
        <span>Last Visit: {lastVisit}</span>
        <span>Next Follow-Up: {nextFollowUp}</span>
      </div>
    </Link>
  );
}

export default AccountCard;
