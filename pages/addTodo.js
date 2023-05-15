import AddTodoPage from "@/components/modules/AddTodoPage";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

const AddTodo = ({ session }) => {
  const { status } = useSession();
  const router = useRouter();
  if (status === "unauthenticated") router.replace("/signin");

  return (
    <div>
      <AddTodoPage />
    </div>
  );
};

export default AddTodo;
