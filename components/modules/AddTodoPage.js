import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
// toast
import { ToastContainer, toast } from "react-toastify";
// components
import RadioButton from "./RadioButton";
// icons
import { FcTodoList } from "react-icons/fc";
import { GrInProgress } from "react-icons/gr";
import { VscOpenPreview } from "react-icons/vsc";
import { IoMdDoneAll } from "react-icons/io";
// style
import styles from "../../styles/AddForm.module.scss";
import "react-toastify/dist/ReactToastify.css";

const AddTodoPage = ({ data, id }) => {
  const [todoTitle, setTodoTitle] = useState(data?.title || "");
  const [status, setStatus] = useState(data?.status);
  const router = useRouter();
  console.log(data.status);

  const sendData = async (e) => {
    e.preventDefault();
    if (data) {
      const req = await axios.patch(`/api/todo/${id}`, {
        title: todoTitle,
        status,
      });
      if (req.status === 200) {
        toast.success("Your Todo Edited successfully!");
        setInterval(() => {
          router.replace("/");
        }, 3000);
      }
    } else {
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
    }
  };
  const editHandler = async () => {
    const req = await axios.patch(`/api/todo/${id}`, {
      title: todoTitle,
      status,
    });
    console.log(req);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={sendData}>
        <input
          className={styles.input}
          type="text"
          name="title"
          value={todoTitle}
          placeholder={data?.title || "Enter your Todo Title"}
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
        {data ? (
          <button onClick={sendData}>Edit</button>
        ) : (
          <button onClick={sendData} type="submit">
            Add Todo
          </button>
        )}
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddTodoPage;
