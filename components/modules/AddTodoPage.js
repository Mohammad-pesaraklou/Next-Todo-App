import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// components
import RadioButton from "./RadioButton";
// icons
import { FcTodoList } from "react-icons/fc";
import { GrInProgress } from "react-icons/gr";
import { VscOpenPreview } from "react-icons/vsc";
import { IoMdDoneAll } from "react-icons/io";
// style
import styles from "../../styles/AddForm.module.scss";

const AddTodoPage = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [status, setStatus] = useState("todo");
  const router = useRouter();

  const sendData = async (e) => {
    e.preventDefault();
    const req = await axios.post("api/todo/addTodo", {
      title: todoTitle,
      status,
    });
    setTodoTitle("");
    setStatus("todo");
    if (req.status === 201) {
      toast.success("Your Todo Added successfully!");
      setInterval(() => {
        router.replace("/");
      }, 3000);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={sendData}>
        <input
          className={styles.input}
          type="text"
          name="title"
          value={todoTitle}
          placeholder="Enter your Todo Title"
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <div>
          <RadioButton
            status={status}
            setStatus={setStatus}
            title={"Todo"}
            value={"todo"}
            backColor={"todo"}
          >
            <FcTodoList color="white" />
          </RadioButton>
        </div>
        <div>
          <RadioButton
            status={status}
            setStatus={setStatus}
            title={"InProgress"}
            value={"inProgress"}
            backColor={"inProgress"}
          >
            <GrInProgress color="white" />
          </RadioButton>
        </div>
        <div>
          <RadioButton
            status={status}
            setStatus={setStatus}
            title={"Review"}
            value={"review"}
            backColor={"review"}
          >
            <VscOpenPreview color="white" />
          </RadioButton>
        </div>
        <div>
          <RadioButton
            status={status}
            setStatus={setStatus}
            title={"Done"}
            value={"done"}
            backColor={"done"}
          >
            <IoMdDoneAll color="white" />
          </RadioButton>
        </div>

        <button type="submit">Add Todo</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddTodoPage;
