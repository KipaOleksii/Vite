import { useEffect, useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default function EffectSection() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const responce = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await responce.json();
      setUsers(users);
      setLoading(false);
    }
    
    fetchUsers()
  }, []);

  return (
    <section>
      <h3>Effects</h3>

      <Button
        onClick={() => {
          setModal(true);
        }}
      >
        Открыть информацию
      </Button>

      <Modal open={modal}>
        <h3>Информация о наших эффектах</h3>
        <p>Простой текст который будет отображаться в модальном окне</p>
        <Button onClick={() => setModal(false)}>Закрыть</Button>
      </Modal>

      {loading && <p>Loading...</p>}
      {!loading && <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>}
    </section>
  );
}
