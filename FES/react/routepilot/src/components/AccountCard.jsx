function AccountCard({
    name,
    city,
    type,
    lastVisit,
    nextFollowUp,
    status
}) {
    return (
        <div className="account-card">
            <div className="account-card__header">
                <h3>{name}</h3>
                <span>{status}</span>
            </div>

            <p>{city}</p>
            <p>{type}</p>

            <div className="account-card__details">
                <span>Last Visit: {lastVisit}</span>
                <span>Next Follow-Up: {nextFollowUp}</span>
            </div>
        </div>
    )
}

export default AccountCard;