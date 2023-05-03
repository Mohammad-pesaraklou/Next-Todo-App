import TodoUser from "@/models/User";
import { connectDB } from "@/utils/ConnectDB";
import { getSession } from "next-auth/react";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectDB();
    } catch (error) {
      return res
        .status(422)
        .json({ status: "failed", message: "failed to connect to db!" });
    }

    const todoUser = await TodoUser.findOne({ email: "ma45@gmail.com" });

    if (!todoUser) {
      return res
        .status(422)
        .json({ status: "failed", message: "failed to connect to db!" });
    }

    res.status(200).json({ status: "success", data: todoUser });
  }
}
export default handler;
