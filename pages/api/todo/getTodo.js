import TodoUser from "@/models/User";
import { connectDB } from "@/utils/ConnectDB";
import { sortedTodo } from "@/utils/sortedTodo";
import { getSession } from "next-auth/react";

async function handler(req, res) {
  if (req.method !== "GET") return;
  try {
    await connectDB();
  } catch (error) {
    return res
      .status(422)
      .json({ status: "failed", message: "failed to connect to db!" });
  }

  const session = await getSession({ req });

  const user = await TodoUser.findOne({ email: session?.user?.email });

  if (!user) {
    return res
      .status(422)
      .json({ status: "failed", message: "failed to connect to db!" });
  }
  const sortedData = sortedTodo(user.todos);
  res.status(200).json({ status: "success", data: sortedData });
}

export default handler;
