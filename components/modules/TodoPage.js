import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../../styles/TodoCard.module.scss";
const TodoPage = () => {
  const [todos, setTodos] = useState(null);

  const getData = async () => {
    const req = await axios("api/todo/getTodo");
    setTodos(req.data.data);
    console.log(req);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(todos);
  return (
    <div style={{ padding: "40px" }}>
      <div className={styles.title}>
        <h1>Todo</h1>
      </div>
      <div className={styles.mainContainer}>
        {todos?.todos?.map((i) => (
          <div className={styles.cardContainer}>
            <div>
              <p>Title:</p>
              <span>{i.title}</span>
            </div>
            <div>
              <p>Description:</p>
              <span>{i.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoPage;
