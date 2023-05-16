import AddTodoPage from "@/components/modules/AddTodoPage";
import axios from "axios";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const TodoDetails = () => {
  const [data, setData] = useState({});
  const { query } = useRouter();
  const editHandler = async () => {
    const req = await axios(`/api/todo/${query?.todoId}`);
    if (req.status === 200) setData(req.data);
  };
  console.log(data);

  useEffect(() => {
    editHandler();
  }, []);

  return (
    <div>
      <AddTodoPage data={data?.user} id={query?.todoId} />
    </div>
  );
};

export default TodoDetails;
