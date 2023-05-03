import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const AddTodoPage = () => {
  const [todoForm, setTodoForm] = useState({
    title: "",
    description: "",
    createdAt: Date.now(),
  });
  const router = useRouter();

  const changeHandler = (e) => {
    setTodoForm({
      ...todoForm,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = async (e) => {
    e.preventDefault();
    const req = await axios.post("api/todo/addTodo", {
      todoForm,
    });
    todoForm.title = "";
    todoForm.description = "";
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
          value={todoForm.title}
          onChange={changeHandler}
        />
        <input
          name="description"
          value={todoForm.description}
          onChange={changeHandler}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodoPage;
