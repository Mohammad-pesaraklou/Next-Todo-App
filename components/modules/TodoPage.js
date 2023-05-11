import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
// style
import styles from "../../styles/TodoCard.module.scss";
// components
import Tasks from "./Tasks";

const TodoPage = () => {
  const [todos, setTodos] = useState(null);

  const { status } = useSession();

  const router = useRouter();

  const getData = async () => {
    const req = await axios("api/todo/getTodo");
    setTodos(req.data.data);
  };
  if (status === "authenticated") {
    useEffect(() => {
      getData();
    }, []);
  }

  return (
    <div className={styles.mainContainer}>
      {/* todo section */}
      <div>
        <Tasks
          data={todos?.todo}
          next={"inProgress"}
          title="Todo"
          fetcher={getData}
        />
      </div>
      {/* progress section */}
      <div>
        <Tasks
          data={todos?.inProgress}
          next={"review"}
          back="todo"
          title="In Progress"
          fetcher={getData}
        />
      </div>
      {/* review section*/}
      <div>
        <Tasks
          data={todos?.review}
          next={"done"}
          back="inProgress"
          title="Review"
          fetcher={getData}
        />
      </div>
      {/* done section */}
      <div>
        <Tasks
          data={todos?.done}
          title="Done"
          back="review"
          fetcher={getData}
        />
      </div>
    </div>
  );
};

export default TodoPage;
