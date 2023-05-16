import TodoUser from "@/models/User";
import { connectDB } from "@/utils/ConnectDB";
import { getSession } from "next-auth/react";

async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    return res
      .status(422)
      .json({ status: "failed", message: "failed to connect to db!" });
  }

  const { todoId } = req.query;
  const { title, status } = req.body;
  const session = await getSession({ req });

  const todoUser = await TodoUser.findOne({ email: session?.user?.email });
  if (!todoUser) {
    return res
      .status(422)
      .json({ status: "failed", message: "User Dose'nt Exist! " });
  }
  const user = todoUser.todos.find((todo) => todo._id == todoId);
  if (req.method === "GET") {
    res.status(200).json({ user: user });
  } else if (req.method === "PATCH") {
    user.title = title;
    user.status = status;
    todoUser.save();
    res.status(200).json({ message: "Your Todo Edited Successfully" });
  } else if (req.method === "DELETE") {
    const todos = todoUser.todos.filter((todo) => todo._id != todoId);
    todoUser.todos = todos;
    todoUser.save();
    res.status(200).json({ message: "Your Todo Successfully Deleted" });
  }
}
export default handler;
