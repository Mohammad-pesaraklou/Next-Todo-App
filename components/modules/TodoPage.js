import axios from "axios";
import { useEffect, useState } from "react";
// style
import styles from "../../styles/TodoCard.module.scss";
import { RiTodoLine } from "react-icons/ri";
// icon
const TodoPage = () => {
  const [todos, setTodos] = useState(null);

  const getData = async () => {
    const req = await axios("api/todo/getTodo");
    setTodos(req.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.mainContainer}>
      {/* todo section */}
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Todo</h1>
        </div>
        <div className={styles.cardParent}>
          {todos?.todo?.map((i) => (
            <div className={styles.cardContainer}>
              <RiTodoLine />
              <div>
                <span>{i.title}</span>
              </div>

              <button onClick={() => nextHandler(i)}>Next</button>
            </div>
          ))}
        </div>
      </div>
      {/* progress section */}
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>In Progress</h1>
        </div>
        <div className={styles.cardParent}>
          {todos?.inProgress?.map((i) => (
            <div className={styles.cardContainer}>
              <RiTodoLine />
              <div>
                <span>{i.title}</span>
              </div>

              <button onClick={() => nextHandler(i)}>Next</button>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Review</h1>
        </div>
        <div className={styles.cardParent}>
          {todos?.review?.map((i) => (
            <div className={styles.cardContainer}>
              <RiTodoLine />
              <div>
                <span>{i.title}</span>
              </div>

              <button onClick={() => nextHandler(i)}>Next</button>
            </div>
          ))}
        </div>
      </div>
      {/* done section */}
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Done</h1>
        </div>
        <div className={styles.cardParent}>
          {todos?.done?.map((i) => (
            <div className={styles.cardContainer}>
              <RiTodoLine />
              <div>
                <span>{i.title}</span>
              </div>

              <button onClick={() => nextHandler(i)}>Next</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
