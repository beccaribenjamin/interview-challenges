import type {Item} from "./types";

import {useEffect, useState} from "react";

import styles from "./App.module.scss";
import api from "./api";

function App() {
  const [items, setItems] = useState<Item[] | null>(null);

  useEffect(() => {
    api.list().then(setItems);
  }, []);

  const handleDelete = (id: number) => {
    setItems(items ? items.filter((item) => item.id !== id) : items);
  };

  return (
    <main className={styles.main}>
      <h1>Supermarket list</h1>
      <form>
        <input name="text" type="text" autoFocus/>
        <button>Add</button>
      </form>
      <ul>
        {items ? (
          items.map((item) => (
            <li key={item.id} className={item.completed ? styles.completed : ""}>
              {item.text}
              <button onClick={() => handleDelete(item.id)}>[X]</button>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </main>
  );
}

export default App;
