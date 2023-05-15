import { RiTodoLine } from "react-icons/ri";
import axios from "axios";
// style
import styles from "../../styles/TodoCard.module.scss";

const Tasks = ({ data, title, next, back, fetcher }) => {
  const updateHandler = async (id, status) => {
    const req = await axios.patch("api/todo/updateTodo", {
      id,
      status,
    });
    console.log(req.data);
    fetcher();
  };

  return (
    <div className={styles.container}>
      <div className={styles[title]}>
        <h1>{title}</h1>
      </div>
      <div className={styles.cardParent}>
        {data?.map((i) => (
          <div key={i.title} className={styles.cardContainer}>
            <RiTodoLine />
            <div>
              <span>{i.title}</span>
            </div>
            <div className={styles.btnHandler}>
              {back && (
                <button name="back" onClick={(e) => updateHandler(i._id, back)}>
                  Back
                </button>
              )}
              {next && (
                <button name="next" onClick={(e) => updateHandler(i._id, next)}>
                  Next
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
