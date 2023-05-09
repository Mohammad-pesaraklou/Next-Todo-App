import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
// components
import RadioButton from "./RadioButton";
// icons
import { FcTodoList } from "react-icons/fc";
import { GrInProgress } from "react-icons/gr";
import { VscOpenPreview } from "react-icons/vsc";
import { IoMdDoneAll } from "react-icons/io";

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
    if (req.status === 201) router.replace("/");
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "50px",
        }}
        onSubmit={sendData}
      >
        <input
          type="text"
          name="title"
          value={todoTitle}
          placeholder="Enter your Todo Title"
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <RadioButton
          status={status}
          setStatus={setStatus}
          title={"Todo"}
          value={"todo"}
        >
          <FcTodoList />
        </RadioButton>

        <RadioButton
          status={status}
          setStatus={setStatus}
          title={"InProgress"}
          value={"inProgress"}
        >
          <GrInProgress />
        </RadioButton>

        <RadioButton
          status={status}
          setStatus={setStatus}
          title={"Review"}
          value={"review"}
        >
          <VscOpenPreview />
        </RadioButton>
        <RadioButton
          status={status}
          setStatus={setStatus}
          title={"Done"}
          value={"done"}
        >
          <IoMdDoneAll />
        </RadioButton>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodoPage;
