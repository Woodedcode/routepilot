function FollowUpItem({ account, task, dueDate }) {
  const today = new Date();
  const followUpDate = new Date(dueDate);

  today.setHours(0, 0, 0, 0);
  followUpDate.setHours(0, 0, 0, 0);

  let status = "UPCOMING";

  if (followUpDate < today) {
    status = "OVERDUE";
  } else if (followUpDate.getTime() === today.getTime()) {
    status = "TODAY";
  }

  return (
    <div className="follow-up-item">
      <div>
        <h3>{account}</h3>
        <p>{task}</p>
        <span>{dueDate}</span>
      </div>

      <span className={`follow-up-status ${status.toLowerCase()}`}>
        {status}
      </span>
    </div>
  );
}

export default FollowUpItem;
