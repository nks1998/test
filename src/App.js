
import { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

const handleSubmit = () => {
  if (!fname.trim() || !lname.trim() || !email.trim()) {
      return;
    }

    const curEmail = email.trim().toLowerCase();

    setUsers((prev) => {
      const existingUser = prev.some(
        (user) => user.email === curEmail
      );

      if (existingUser) {
        return prev.map((user) =>
          user.email === curEmail
            ? {
                ...user,
                submitCount: user.submitCount + 1,
              }
            : user
        );
      }

      return [
        ...prev,
        {
          fname: fname.trim(),
          lname: lname.trim(),
          email: curEmail,
          submitCount: 1,
        },
      ];
    });

    setFname("");
    setLname("");
    setEmail("");
  };

  return (
    <div className="App">
      <table border={2} style={{margin:  "16px"}}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Submission Count</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.email}</td>
              <td>{user.submitCount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <input
        placeholder="First Name"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
      />

      <input
        placeholder="Last Name"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
