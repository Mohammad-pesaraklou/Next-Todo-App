import TodoUser from "@/models/User";
import { connectDB } from "@/utils/ConnectDB";
import { getSession } from "next-auth/react";

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectDB();
    } catch (error) {
      return res
        .status(422)
        .json({ status: "failed", message: "failed to connect to db!" });
    }

    const { title, description } = req.body.todoForm;

    if (!title || !description) {
      return res
        .status(422)
        .json({ status: "failed", message: "Invalid Data!" });
    }
    const todoObj = {
      title,
      description,
    };

    const session = await getSession({ req });

    const todoUser = await TodoUser.findOne({ email: "ma45@gmail.com" });

    todoUser.todos.push(todoObj);
    todoUser.save();

    res.status(201).json({ status: "success", data: todoUser });
  }
}
export default handler;
