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

// export async function getStaticProps(context) {
//   const { req } = context;
//   const session = await getSession({ req });
//   console.log(session?.status);
//   return {
//     props: { session },
//   };
// }

export default AddTodo;
