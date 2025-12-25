import "./App.css";
import Details from "./components/Details";
import List from "./components/List";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json`
    )
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const selectUser = (id) => {
    if (id === selectedId) return;
    setSelectedId(id);
    setLoading(true);
    fetch(
      `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setUserDetails(data);
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <List users={users} select={selectUser} selectedId={selectedId} />
      <Details info={userDetails} loading={loading} />
    </div>
  );
}

export default App;
