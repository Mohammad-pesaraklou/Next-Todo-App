import TodoUser from "@/models/User";
import { connectDB } from "@/utils/ConnectDB";
import { getSession } from "next-auth/react";

async function handler(req, res) {
  if (req.method !== "POST") return;
  try {
    await connectDB();
  } catch (error) {
    return res
      .status(422)
      .json({ status: "failed", message: "failed to connect to db!" });
  }

  const { title, status } = req.body;
  console.log(title);
  if (!title || !status) {
    return res.status(422).json({ status: "failed", message: "Invalid Data!" });
  }

  const session = await getSession({ req });
  if (!session) {
    return res
      .status(422)
      .json({ status: "failed", message: "User Dose'nt Exist!" });
  }

  const user = await TodoUser.findOne({ email: session?.user?.email });
  user.todos.push({ title, status });
  user.save();
  res.status(201).json({ status: "success", data: user });
}

export default handler;
