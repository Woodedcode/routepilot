import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import accounts from "../data/accounts";

function AccountDetails() {
  const { id } = useParams();
  const [note, setNote] = useState("");
  const [savedNotes, setSavedNotes] = useState([]);

  function handleSaveNote() {
    const newNote = {
      text: note,
      date: new Date().toLocaleString(),
    };

    if (note.trim() === "") {
      return;
    }

    setSavedNotes([...savedNotes, newNote]);
    setNote("");
  }

  const account = accounts.find((account) => account.id === Number(id));
  if (!account) {
    return <h1>Account Not Found</h1>;
  }

  return (
    <main className="account-details">
      <Link to="/accounts" className="account-details__back">
        ← Back to Accounts
      </Link>
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
          <span
            className={`account-details__status ${account.status.toLowerCase()}`}
          >
            {account.status}
          </span>
        </p>
      </div>
      <section className="account-notes">
  <h2>Notes</h2>

  <textarea
    value={note}
    onChange={(event) => setNote(event.target.value)}
    placeholder="Add a note..."
  />

  <button onClick={handleSaveNote}>Send note</button>

  {savedNotes.length === 0 && <p>No notes yet.</p>}

  {savedNotes.map((savedNote, index) => (
    <div className="account-notes__saved" key={index}>
      <p>{savedNote.text}</p>
      <span>{savedNote.date}</span>
    </div>
  ))}
</section>
    </main>
  );
}

export default AccountDetails;
