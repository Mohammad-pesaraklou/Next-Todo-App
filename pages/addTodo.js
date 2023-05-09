import AddTodoPage from "@/components/modules/AddTodoPage";
import { getSession } from "next-auth/react";
import React from "react";

const AddTodo = ({ session }) => {
  console.log(session);
  return (
    <div>
      <AddTodoPage />
    </div>
  );
};

export default AddTodo;
